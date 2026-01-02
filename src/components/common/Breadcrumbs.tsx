import styles from './breadcrumbs.module.css';

const Breadcrumbs = () => (
  // <div
  //   className="breadcrumbs-wrapper uk-container uk-container-xlarge"
  //   itemProp="http://schema.org/breadcrumb"
  //   itemScope
  //   itemType="http://schema.org/BreadcrumbList"
  // >
  //   <ul className="uk-breadcrumb">
  //     <li
  //       id="bx_breadcrumb_0"
  //       itemProp="itemListElement"
  //       itemScope
  //       itemType="http://schema.org/ListItem"
  //     >
  //       <a href="/" title="Главная" itemProp="item">
  //         <span itemProp="name">Главная</span>
  //       </a>
  //       <meta itemProp="position" content="1" />
  //     </li>
  //     <li>
  //       <span>Покупка недвижимости</span>
  //     </li>
  //     <li
  //       id="bx_breadcrumb_2"
  //       itemProp="itemListElement"
  //       itemScope
  //       itemType="http://schema.org/ListItem"
  //     >
  //       <a href="/kvartiry/" title="Квартиры" itemProp="item">
  //         <span itemProp="name">Квартиры</span>
  //       </a>
  //       <meta itemProp="position" content="3" />
  //     </li>
  //     <li
  //       id="bx_breadcrumb_3"
  //       itemProp="itemListElement"
  //       itemScope
  //       itemType="http://schema.org/ListItem"
  //     >
  //       <a
  //         href="/obekty/3-ya-pryadilnaya-ul-vld-4/?open_sale=1&amp;object=41106&amp;type=R"
  //         title="3-я Прядильная ул., влд. 4"
  //         itemProp="item"
  //       >
  //         <span itemProp="name">3-я Прядильная ул., влд. 4</span>
  //       </a>
  //       <meta itemProp="position" content="4" />
  //     </li>
  //     <li>
  //       <span>№31</span>
  //     </li>
  //   </ul>
  // </div>

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
