import styles from './breadcrumbs.module.css';

const Breadcrumbs = () => (
  <div className={styles.container}>
    <div className={styles.breadcrumbs}>
      <a className={styles.linkRout} href="#">
        Главная
      </a>{' '}
      <div className={styles.line} />{' '}
      <a
        style={{ textDecoration: 'none' }}
        className={styles.linkRout}
        href="#"
      >
        Покупка недвижимости
      </a>{' '}
      <div className={styles.line} />{' '}
      <a className={styles.linkRout} href="#">
        Квартиры
      </a>{' '}
      <div className={styles.line} />
      <span className={styles.linkRout}>3-я Прядильная ул., влд. 4</span>
      <div className={styles.line} />{' '}
      <a
        className={styles.linkRout}
        style={{ textDecoration: 'none' }}
        href="#"
      >
        №31
      </a>
    </div>
  </div>
);

export default Breadcrumbs;
