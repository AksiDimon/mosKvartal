import React, { Fragment, useEffect, useMemo, useState } from 'react';
import styles from './BuySection.module.css';
import styleD from './digits.module.css';
import { useScrollReveal } from '@/hooks/useScrollReveal'; // как у тебя

const STEPS = [
  { id: 1, title: 'Выбор и осмотр объекта' },
  { id: 2, title: 'Одобрение в\u00A0банке' },
  { id: 3, title: 'Оформление ЭЦП *', withComment: true },
  { id: 4, title: 'Регистрация на\u00A0торговой площадке' },
  { id: 5, title: 'Подача заявки на\u00A0участие в\u00A0аукционе' },
  { id: 6, title: 'Участие в\u00A0аукционе' },
  { id: 7, title: 'Предоставление данных' },
  { id: 8, title: 'Оценка недвижимости' },
  { id: 9, title: 'Согласование даты сделки' },
  { id: 10, title: 'Заключение и\u00A0оплата договора' },
  { id: 11, title: 'Регистрация права собственности и\u00A0получение ключей' },
] as const;

type StepId = (typeof STEPS)[number]['id'];
type SlidePhase = 'idle' | 'prep' | 'run';

const BuyHowDigits = () => {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();

  const [activeId, setActiveId] = useState<StepId>(1);
  const [prevId, setPrevId] = useState<StepId | null>(null);
  const [phase, setPhase] = useState<SlidePhase>('idle');

  const byId = useMemo(() => {
    const map = new Map<number, string>();
    STEPS.forEach((s) => map.set(s.id, s.title));
    return map;
  }, []);

  const selectStep = (id: StepId) => {
    if (id === activeId) return;
    setPrevId(activeId);
    setActiveId(id);
    setPhase('prep');
  };

  // старт анимации “в следующий кадр”, чтобы transition отработал
  useEffect(() => {
    if (phase !== 'prep') return;

    const raf = requestAnimationFrame(() => setPhase('run'));
    const t = window.setTimeout(() => {
      setPrevId(null);
      setPhase('idle');
    }, 320); // длительность должна совпадать с CSS (см. ниже)

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, [phase]);

  const currentTitle = byId.get(activeId) ?? '';
  const prevTitle = prevId ? byId.get(prevId) ?? '' : '';

  return (
    <div
      ref={ref}
      className={`${styles.buy_how} ${styles.animate} ${
        isRevealed ? styles.animated : ''
      }`}
    >
      <div className={styles.buy_how__l}>
        <div className={styles.buy_how__t}>Как купить в ипотеку?</div>

        {/* DIGITS */}
        <div className={styleD.buy_how__digs}>
          {STEPS.map((s, idx) => (
            <Fragment key={s.id}>
              <div
                role="button"
                tabIndex={0}
                onClick={() => selectStep(s.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    selectStep(s.id);
                  }
                }}
                data-id={s.id}
                className={[
                  styleD.buy_how__dig,
                  s.id === activeId ? styleD.active : '',
                  s.withComment ? styleD['with-comment'] : '',
                ].join(' ')}
              >
                <span>{s.title.replace(' *', '')}</span>
              </div>

              {idx < STEPS.length - 1 && (
                <div className={styleD.buy_how__sep} />
              )}
            </Fragment>
          ))}
        </div>

        {/* STEPS */}
        <div className={styles.buy_how__steps}>
          <div>
            <div className={styles.buy_how__step}>
              Шаг{' '}
              <span
                className={[
                  styles.stepSlideViewportNum,
                  phase === 'run' ? styles.stepSlideRun : '',
                ].join(' ')}
              >
                {/* {prevId !== null && (
                  <span
                    className={`${styles.stepSlideItem} ${styles.stepSlidePrev}`}
                  >
                    {prevId}
                  </span>
                )} */}
                <span
                  className={`${styles.stepSlideItem} ${styles.stepSlideCurrent}`}
                >
                  {activeId}
                </span>
              </span>
            </div>

            <div className={styles.buy_how__val}>
              <div
                className={[
                  styles.stepSlideViewportVal,
                  phase === 'run' ? styles.stepSlideRun : '',
                ].join(' ')}
              >
                {/* {prevId !== null && (
                  <div
                    className={`${styles.stepSlideItem} ${styles.stepSlidePrev}`}
                  >
                    {prevTitle}
                  </div>
                )} */}
                <div
                  className={`${styles.stepSlideItem} ${styles.stepSlideCurrent}`}
                >
                  {currentTitle}
                </div>
              </div>
            </div>
          </div>

          <a
            href="/pokupka-nedvizhimosti-dlya-vseh/uslovia-pokupki/#buy_mortgage"
            className={styles.buy_link_det}
          >
            <span className={styles.buttonDetails}>Подробнее</span>
            <i />
          </a>
        </div>
      </div>

      <div className={styles.buy_terms__top_r}>
        <div className={styles.buy_how__t}>Рассчитать ипотеку</div>
        <div className={styles.buy_how__banks}>
          <a
            href="https://domclick.ru/ipoteka/calculator?subproductId=2&utm_source=sberbank&utm_medium=referral&utm_campaign=homenew"
            target="_blank"
            rel="noreferrer"
          >
            <img src="../assets/i_sber.svg" alt="sber" />
          </a>
          <a
            href="https://www.gazprombank.ru/personal/mortgage/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="../assets/i_gasprom.svg" alt="gasprom" />
          </a>
        </div>
        <div className={styles.buy_how__text}>
          Сервис расчета ипотечных продуктов предоставляется на&nbsp;платформах
          банков-партнеров. Результаты расчетов не&nbsp;являются офертой
          и&nbsp;носят информационный характер.
        </div>
      </div>
    </div>
  );
};

export default BuyHowDigits;
