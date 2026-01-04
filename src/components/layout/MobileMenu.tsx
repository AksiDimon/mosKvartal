'use client';
import styles from './MobileMenu.module.css';
/* eslint-disable @next/next/no-img-element */

// import styles from './MobileMenu.module.css';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => (
  <div
    className={`${styles['mobile-menu']} ${isOpen ? styles.open : ''}`}
    aria-hidden={!isOpen}
  >
    <div className={styles['mobile-menu__in']}>
      <button
        className={styles['mobile-menu__close']}
        type="button"
        aria-label="Закрыть меню"
        onClick={onClose}
      >
        <img src="/assets/menu_close.svg" alt="Закрыть меню" />
      </button>
      <a className={styles['menu__item']} href="/o-moskovskikh-kvartalakh/">
        О «Московских кварталах»
      </a>
      <a className={styles['menu__item']} href="/kvartiry/">
        Квартиры
      </a>
      <a className={styles['menu__item']} href="/pomeshcheniya-dlya-biznesa/">
        Помещения для бизнеса
      </a>
      <a className={styles['menu__item']} href="/mashino-mesta/">
        Машино-места
      </a>
      <a className={styles['menu__item']} href="/usloviya-pokupki/">
        Условия покупки
      </a>
      <a className={styles['menu__item']} href="/news/">
        Новости
      </a>
      <a className={styles['menu__item']} href="/kontakty/">
        Контакты
      </a>
    </div>
  </div>
);

export default MobileMenu;
