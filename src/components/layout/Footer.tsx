import { FooterLogo } from '../icons/FooterLogo';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles['background-color-light-grey']}>
    <div className={styles['footer-wrap']}>
      <div className={`${styles['footer-colum']} ${styles.wrap}`}>
        <div className={styles['footer-colum']}>
          <a
            href="/o-moskovskikh-kvartalakh/"
            className={styles['footer-a-main']}
          >
            О «Московских кварталах»
          </a>

          <a href="/kvartiry/" className={styles['footer-a-main']}>
            Квартиры
          </a>

          <a
            href="/pomeshcheniya-dlya-biznesa/"
            className={styles['footer-a-main']}
          >
            Помещения для бизнеса
          </a>
        </div>
      </div>

      <div className={`${styles['footer-colum']} ${styles.wrap}`}>
        <div className={styles['footer-colum']}>
          <a href="/mashino-mesta/" className={styles['footer-a-main']}>
            Машино-места
          </a>

          <a href="/usloviya-pokupki/" className={styles['footer-a-main']}>
            Условия покупки
          </a>
        </div>
      </div>

      <div className={`${styles['footer-colum']} ${styles.wrap}`}>
        <div className={styles['footer-colum']}>
          <a href="/news/" className={styles['footer-a-main']}>
            Новости
          </a>

          <a href="/kontakty/" className={styles['footer-a-main']}>
            Контакты
          </a>
        </div>
      </div>
    </div>

    <div className={styles['footer-mob']}>
      <div className={styles['footer-mob-a']}>
        <a href="/o-moskovskikh-kvartalakh/" className={styles.mobLink}>
          О «Московских кварталах»
        </a>
        <a href="/kvartiry/" className={styles.mobLink}>
          Квартиры
        </a>
        <a href="/pomeshcheniya-dlya-biznesa/" className={styles.mobLink}>
          Помещения для бизнеса
        </a>
        <a href="/mashino-mesta/" className={styles.mobLink}>
          Машино-места
        </a>
        <a href="/usloviya-pokupki/" className={styles.mobLink}>
          Условия покупки
        </a>
        <a href="/news/" className={styles.mobLink}>
          Новости
        </a>
        <a href="/kontakty/" className={styles.mobLink}>
          Контакты
        </a>
      </div>
    </div>

    <div className={styles['footer-d']}>
      <div className={styles['footer-down']}>
        <div className={styles['footer-down_m']}>
          <div className={styles['footer-down__flex']}>
            <div className={styles['footer-down-in-wrap']}>
              <div className={styles.footer_logos}>
                <a href="https://stroi.mos.ru/" target="_blank">
                  {/* <img src="../img/f_logo1.svg?2" alt="logo" /> */}
                  <FooterLogo />
                </a>
              </div>
              <div className={styles['footer-down-labal']}>Адрес:</div>
              <a href="https://yandex.ru/maps/-/CHXcQ6OI" target="_blank">
                101000, Малый Златоустинский пер., д. 3, стр. 3
              </a>
              <a
                className={styles['footer-mail']}
                href="mailto:info@москварталы.рф"
              >
                info@москварталы.рф
              </a>
            </div>
            <div
              className={`${styles['footer-down-in-wrap']} ${styles['-full_mob']}`}
            >
              <div className={styles.ft_tel_block}>
                <span>+7 (495) 651-07-75</span>
                <div className={styles.ft_tel_block_but}>
                  <span>Оставить обращение</span>
                </div>
              </div>
              <div className={styles['footer-right-info']}>
                <div className={styles.title}>Фонд реновации, 2017-2025</div>
                <div className={styles.link}>
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
