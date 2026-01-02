#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
import postcss from 'postcss';
import selectorParser from 'postcss-selector-parser';
import valueParser from 'postcss-value-parser';
import { JSDOM } from 'jsdom';

const rootDir = process.cwd();
const htmlPath = path.resolve(rootDir, 'public/srcClone/clone.html');
const cssPath = path.resolve(rootDir, 'public/srcClone/styleClone.css');
const outputPath = path.resolve(rootDir, 'public/srcClone/cleanClone.css');

const safelistPatterns = [
  /\.active(?![\w-])/,
  /\.open(?![\w-])/,
  /\.hide(?![\w-])/,
  /\.d-none(?![\w-])/,
  /\.hidden-block(?![\w-])/,
  /\.det_bl_tab(?![\w-])/,
  /\.det_bl_tab_content(?![\w-])/,
  /\.active-step-[\w-]+/,
  /\.step-[\w-]+/,
  /\.checked-[\w-]+/,
];

const statefulPseudos = new Set([
  'hover',
  'active',
  'focus',
  'focus-visible',
  'focus-within',
  'visited',
  'link',
  'target',
  'checked',
  'disabled',
  'enabled',
  'read-only',
  'read-write',
  'placeholder-shown',
  'selection',
  'file-selector-button',
  'autofill',
]);

const pseudoElements = new Set([
  'before',
  'after',
  'first-line',
  'first-letter',
  'backdrop',
  'marker',
]);

const html = await fs.readFile(htmlPath, 'utf8');
const dom = new JSDOM(html);
const { document } = dom.window;

const css = await fs.readFile(cssPath, 'utf8');
const root = postcss.parse(css);

const usedAnimationNames = new Set();
const keptKeyframes = new Set();
const filteredRoot = postcss.root();

function normalizeSelector(selector) {
  try {
    return selectorParser((selectors) => {
      selectors.walkComments((comment) => comment.remove());
      selectors.walkPseudos((pseudo) => {
        const name = pseudo.value.replace(/^::?/, '');
        if (pseudo.value.startsWith('::') || pseudoElements.has(name) || statefulPseudos.has(name)) {
          pseudo.remove();
          return;
        }
        if (name === 'has') {
          // jsdom does not support :has; drop it so the base selector can still match.
          pseudo.remove();
        }
      });
    }).processSync(selector).trim();
  } catch {
    return '';
  }
}

function isSelectorSafelisted(selector) {
  return safelistPatterns.some((re) => re.test(selector));
}

function selectorMatchesDom(selector) {
  const normalized = normalizeSelector(selector);
  if (!normalized) return false;
  try {
    return document.querySelector(normalized) !== null;
  } catch {
    return false;
  }
}

const animationKeyword = new Set([
  'infinite',
  'forwards',
  'backwards',
  'both',
  'none',
  'linear',
  'ease',
  'ease-in',
  'ease-out',
  'ease-in-out',
  'running',
  'paused',
  'normal',
  'reverse',
  'alternate',
  'alternate-reverse',
  'initial',
  'inherit',
  'unset',
  'step-start',
  'step-end',
]);

function isTime(value) {
  return /^-?\d*\.?\d+m?s$/.test(value);
}

function isNumber(value) {
  return /^-?\d+(\.\d+)?$/.test(value);
}

function extractNameFromAnimationNodes(nodes) {
  for (const node of nodes) {
    if (node.type !== 'word') continue;
    const value = node.value;
    if (animationKeyword.has(value) || isTime(value) || isNumber(value)) {
      continue;
    }
    return value;
  }
  return null;
}

function collectAnimationNames(decls) {
  for (const decl of decls) {
    if (decl.prop !== 'animation' && decl.prop !== 'animation-name') continue;
    const parsed = valueParser(decl.value || '');
    let current = [];

    const flush = () => {
      if (!current.length) return;
      const name = extractNameFromAnimationNodes(current);
      if (name) {
        usedAnimationNames.add(name);
      }
      current = [];
    };

    for (const node of parsed.nodes) {
      if (node.type === 'div' && node.value === ',') {
        flush();
      } else {
        current.push(node);
      }
    }
    flush();
  }
}

function filterContainer(from, to) {
  from.each((child) => {
    const kept = filterNode(child);
    if (kept) {
      to.append(kept);
    }
  });
}

function filterNode(node) {
  if (node.type === 'rule') {
    const selectors = Array.isArray(node.selectors) ? node.selectors : node.selector.split(',');
    const keptSelectors = [];

    for (const sel of selectors) {
      const selector = sel.trim();
      if (!selector) continue;

      if (selector.includes(':root')) {
        keptSelectors.push(selector);
        continue;
      }

      if (isSelectorSafelisted(selector) || selectorMatchesDom(selector)) {
        keptSelectors.push(selector);
      }
    }

    if (!keptSelectors.length) {
      return null;
    }

    const clone = node.clone();
    clone.selector = keptSelectors.join(', ');
    collectAnimationNames(clone.nodes || []);
    return clone;
  }

  if (node.type === 'atrule') {
    const name = node.name.toLowerCase();

    if (name === 'keyframes' || name === '-webkit-keyframes' || name === '-moz-keyframes' || name === '-o-keyframes') {
      keptKeyframes.add(`${name}:${node.params.trim()}`);
      usedAnimationNames.add(node.params.trim());
      return node.clone();
    }

    if (name === 'font-face' || name === 'page' || name === 'import') {
      return node.clone();
    }

    if (node.nodes && node.nodes.length) {
      const clone = node.clone({ nodes: [] });
      filterContainer(node, clone);
      if (clone.nodes && clone.nodes.length) {
        return clone;
      }
    }
    return null;
  }
  return null;
}

filterContainer(root, filteredRoot);

// Ensure keyframes referenced via animation(-name) survive even if all selectors were pruned.
if (usedAnimationNames.size) {
  root.walkAtRules(/keyframes/i, (atRule) => {
    const name = atRule.params.trim();
    const key = `${atRule.name.toLowerCase()}:${name}`;
    if (usedAnimationNames.has(name) && !keptKeyframes.has(key)) {
      filteredRoot.append(atRule.clone());
      keptKeyframes.add(key);
    }
  });
}

await fs.writeFile(outputPath, filteredRoot.toResult().css, 'utf8');
console.log(`cleanClone.css written to ${path.relative(rootDir, outputPath)}`);
