const Header = () => (
  <header className="header upper hide">
    <div className="container">
      <a
        href="https://xn--80aae5aibotfo5h.xn--p1ai/?view=tile"
        className="header__logo"
      >
        <img src="../assets/mk-logo-ny.svg" alt="mk-logo-ny.svg" />
      </a>

      <div className="header__menu">
        <a className="hm_item" href="/o-moskovskikh-kvartalakh/">
          О «Московских кварталах»
        </a>
        <a className="hm_item" href="/kvartiry/">
          Квартиры
        </a>
        <a className="hm_item" href="/pomeshcheniya-dlya-biznesa/">
          Помещения для бизнеса
        </a>
        <a className="hm_item" href="/mashino-mesta/">
          Машино-места
        </a>
        <a className="hm_item" href="/usloviya-pokupki/">
          Условия покупки
        </a>
        <a className="hm_item" href="/news/">
          Новости
        </a>
        <a className="hm_item" href="/kontakty/">
          Контакты
        </a>
      </div>
      <div className="header__menu-buttons">
        <div className="flex-gheader-wrap">
          <a href="/favourites/" className="flex-svg fav_i_out fav-min-width">
            <i className="fav_i none">
              <span></span>
            </i>
            <svg
              width="23"
              height="20"
              viewBox="0 0 23 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1251 18.81C11.7851 18.93 11.2251 18.93 10.8851 18.81C7.98513 17.82 1.50513 13.69 1.50513 6.68998C1.50513 3.59998 3.99513 1.09998 7.06513 1.09998C8.88513 1.09998 10.4951 1.97998 11.5051 3.33998C12.5151 1.97998 14.1351 1.09998 15.9451 1.09998C19.0151 1.09998 21.5051 3.59998 21.5051 6.68998C21.5051 13.69 15.0251 17.82 12.1251 18.81Z"
                stroke="#E90002"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="header__mobile-burger">
          <img src="../assets/sw_list_sel.svg" alt="burger.svg" />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
