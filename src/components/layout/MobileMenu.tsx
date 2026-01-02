const MobileMenu = () => (
  <div className="mobile-menu">
    <div className="mobile-menu__in">
      <div className="mobile-menu__close">
        <img src="../assets/menu_close.svg" alt="menu_close.svg" />
      </div>
      <a className="menu__item" href="/o-moskovskikh-kvartalakh/">
        О «Московских кварталах»
      </a>
      <a className="menu__item" href="/kvartiry/">
        Квартиры
      </a>
      <a className="menu__item" href="/pomeshcheniya-dlya-biznesa/">
        Помещения для бизнеса
      </a>
      <a className="menu__item" href="/mashino-mesta/">
        Машино-места
      </a>
      <a className="menu__item" href="/usloviya-pokupki/">
        Условия покупки
      </a>
      <a className="menu__item" href="/news/">
        Новости
      </a>
      <a className="menu__item" href="/kontakty/">
        Контакты
      </a>
    </div>
  </div>
);

export default MobileMenu;
