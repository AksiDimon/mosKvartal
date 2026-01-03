'use client';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import BuyHowDigits from './BuyHowDigits';
import styles from './BuySection.module.css';
import styleD from './digits.module.css';

const BuyTerms = () => (
  <>
    <div
      className={`${styles.no_det_print} ${styles.buy_terms} uk-container-xlarge ${styles['-no_auction']}`}
      id="object-usloviya-pokupki"
    >
      <BuyTermsTop />

      <div className={styles['iframe-ipoteka-domclick']}>
        <iframe
          id="calculator-iframe"
          src="https://ipoteka.domclick.ru/calc-reg/calculator.html?excludedSubproductIds=7&excludedSubproductIds=33&excludedSubproductIds=34&excludeMaternalFund=true"
          frameBorder="no"
          scrolling="no"
          width="100%"
          height="1200"
        ></iframe>
      </div>

      <BuyHowDigits />
    </div>

    <div
      className={`component-similar-flats ${styles.no_det_print}`}
      id="component-similar-flats"
    ></div>
    <div className={styles['object-buy-info']}>
      <div className={styles['container-info']}>
        <div className={styles.text}>
          Получить информацию по покупке недвижимости
        </div>
        <a className={styles.phone} href="tel:+7 (495) 651-07-75">
          +7 (495) 651-07-75
        </a>
      </div>
    </div>
  </>
);

const BuyTermsTop = () => {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${styles.buy_terms__top} ${styles.animate} ${
        isRevealed ? styles.animated : ''
      }`}
    >
      <div className={styles.buy_terms__top_l}>
        <a href="/usloviya-pokupki/" className={styles.dt_link}></a>
        <div className={styles.buy_terms__top_l_content}>
          <div>
            <div className={styles.buy_terms__top_l_title}>Условия покупки</div>
            <div className={styles.buy_terms__top_l_text}>
              Квартиры, машино-места в подземном паркинге или помещения для
              бизнеса в «Московских&nbsp;кварталах» можно купить по прямой
              продаже или по аукциону на электронной торговой площадке
              Росэлторг.
            </div>
          </div>
          <div className={styles.buy_link_det} style={{ border: 'none' }}>
            <span>Подробнее</span>
            <i></i>
          </div>
        </div>
        <div className={styles.buy_terms__top_l_image}>
          <img
            loading="lazy"
            alt="terms"
            className={styles.buy_terms__top_l_img}
            src="../assets/terms1.png"
          />
        </div>
      </div>
      <div className={styles.buy_terms__top_r}>
        <div className={styles.buy_how__t}>Рассчитать ипотеку</div>
        <div className={styles.buy_how__banks}>
          <a
            href="https://domclick.ru/ipoteka/calculator?subproductId=2&utm_source=sberbank&utm_medium=referral&utm_campaign=homenew"
            target="_blank"
          >
            <img src="../assets/i_sber.svg" alt="sber" />
          </a>
          <a
            href="https://www.gazprombank.ru/personal/mortgage/"
            target="_blank"
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

export default BuyTerms;
