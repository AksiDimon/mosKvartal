'use client';

import { useState } from 'react';

import { useLikes } from '../../contexts/LikeContext';
import MobileMenu from './MobileMenu';
import styles from './Header.module.css';

export default function Header() {
  const { likes, setLikes } = useLikes();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.logo} />

            <nav className={styles.nav}>
              <a
                className={styles.link}
                href="https://xn--80aae5aibotfo5h.xn--p1ai/o-moskovskikh-kvartalakh/"
              >
                О «Московских кварталах»
              </a>
              <a className={styles.link} href="#">
                Квартиры
              </a>
              <a className={styles.link} href="#">
                Помещения для бизнеса
              </a>
              <a className={styles.link} href="#">
                Машино-место
              </a>
              <a className={styles.link} href="#">
                Условия покупки
              </a>
              <a className={styles.link} href="#">
                Новости
              </a>
              <a className={styles.link} href="#">
                Контакты
              </a>
            </nav>

            <div className={styles.actions}>
              <button
                type="button"
                className={styles.likeButton}
                // onClick={() => setLikes((prev) => (prev ? 0 : 1))}
                aria-label={
                  likes ? 'Убрать из избранного' : 'Добавить в избранное'
                }
              >
                <div className={styles.like} />
                {likes > 0 && <span className={styles.likeBadge}>{likes}</span>}
              </button>
              <button
                className={styles.burger}
                type="button"
                aria-label="Меню"
                onClick={openMobileMenu}
              >
                <div className={styles.burgerImg} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}
