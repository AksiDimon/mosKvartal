import { FooterLogo } from '../icons/FooterLogo';

const Footer = () => (
  <footer className="background-color-light-grey">
    <div className="footer-wrap">
      <div className="footer-colum wrap">
        <div className="footer-colum">
          <a href="/o-moskovskikh-kvartalakh/" className="footer-a-main">
            О «Московских кварталах»
          </a>

          <a href="/kvartiry/" className="footer-a-main">
            Квартиры
          </a>

          <a href="/pomeshcheniya-dlya-biznesa/" className="footer-a-main">
            Помещения для бизнеса
          </a>
        </div>
      </div>

      <div className="footer-colum wrap">
        <div className="footer-colum">
          <a href="/mashino-mesta/" className="footer-a-main">
            Машино-места
          </a>

          <a href="/usloviya-pokupki/" className="footer-a-main">
            Условия покупки
          </a>
        </div>
      </div>

      <div className="footer-colum wrap">
        <div className="footer-colum">
          <a href="/news/" className="footer-a-main">
            Новости
          </a>

          <a href="/kontakty/" className="footer-a-main">
            Контакты
          </a>
        </div>
      </div>
    </div>

    <div className="footer-mob">
      <div className="footer-mob-a">
        <a href="/o-moskovskikh-kvartalakh/" className="">
          О «Московских кварталах»
        </a>
        <a href="/kvartiry/" className="">
          Квартиры
        </a>
        <a href="/pomeshcheniya-dlya-biznesa/" className="">
          Помещения для бизнеса
        </a>
        <a href="/mashino-mesta/" className="">
          Машино-места
        </a>
        <a href="/usloviya-pokupki/" className="">
          Условия покупки
        </a>
        <a href="/news/" className="">
          Новости
        </a>
        <a href="/kontakty/" className="">
          Контакты
        </a>
      </div>
    </div>

    <div className="footer-d">
      <div className="footer-down">
        <div className="footer-down_m">
          <div className="footer-down__flex">
            <div className="footer-down-in-wrap">
              <div className="footer_logos">
                <a href="https://stroi.mos.ru/" target="_blank">
                  {/* <img src="../img/f_logo1.svg?2" alt="logo" /> */}
                  <FooterLogo />
                </a>
              </div>
              <div className="footer-down-labal">Адрес:</div>
              <a href="https://yandex.ru/maps/-/CHXcQ6OI" target="_blank">
                101000, Малый Златоустинский пер., д. 3, стр. 3
              </a>
              <a className="footer-mail" href="mailto:info@москварталы.рф">
                info@москварталы.рф
              </a>
            </div>
            <div className="footer-down-in-wrap -full_mob">
              <div className="ft_tel_block">
                <span>+7 (495) 651-07-75</span>
                <div className="ft_tel_block_but">
                  <span>Оставить обращение</span>
                </div>
              </div>
              <div className="footer-right-info">
                <div className="title">Фонд реновации, 2017-2025</div>
                <div className="link">
                  <a href="https://www.mos.ru/legal/rules/" target="_blank">
                    Соглашение о&nbsp;пользовании информационными системами
                    и&nbsp;ресурсами города Москвы
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
