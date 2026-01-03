'use client';
import { useRef } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './BuySection.module.css';

const BuyFinish = () => (
  <div className={`${styles.no_det_print} ${styles.buy_finish}`}>
    <div className="uk-container-xlarge">
      <h2 className={styles['new-buy-subtitle']}>В квартире</h2>
      <BuyFinishMain />
      <div className={styles['buy_finish__main-text-list']}>
        <ul>
          <li>
            Квартиры готовы к заселению с первого дня — остается только добавить
            мебель и детали интерьера
          </li>
          <li>
            Полы в комнатах — ламинат, в кухнях и санузлах — керамическая плитка
          </li>
        </ul>
        <ul>
          <li>
            В интерьерах применены современные материалы в спокойных светлых
            тонах, создающих ощущение простора и уютной атмосферы
          </li>
          <li>
            Установлены межкомнатные двери, розетки, выключатели, сантехника и
            светильники
          </li>
        </ul>
      </div>
    </div>
    <div className={styles.banners}>
      <BuyBanners />
    </div>
  </div>
);

const BuyFinishMain = () => {
  const { ref: mainRef, isRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={mainRef} className={styles.buy_finish__main}>
      <div
        className={`${styles.buy_terms__top_r} ${styles.animate} ${
          isRevealed ? styles.animated : ''
        }`}
      >
        <div
          className={`${styles.buy_terms__top_r__img} lazy-loaded`}
          data-lazy="../assets/nf-1.webp"
          style={{ backgroundImage: "url('../assets/nf-1.webp')" }}
        ></div>
      </div>
      <div
        className={`${styles['buy_finish__main-text-wrap']} ${styles.animate} ${
          isRevealed ? styles.animated : ''
        }`}
      >
        <div className={styles['buy_finish__main-text-tl']}>
          Все квартиры передаются с готовой чистовой отделкой — заселяйтесь и
          живите сразу
        </div>
        <div className={styles['buy_finish__main-text-image']}>
          <img src="../assets/nf-1.webp" alt="nf-1.webp" />
        </div>
        <div className={styles['buy_finish__main-text-tx']}>
          <div>Экономьте своё время и средства на ремонтные работы.</div>
          <div>
            Интерьер квартир продуман до мелочей и создаёт уют и эстетику
            пространства.
          </div>
          <div>Никаких ожиданий — начинайте новую жизнь прямо сейчас!</div>
        </div>
      </div>
    </div>
  );
};

const BuyBanners = () => {
  const { ref: topRef, isRevealed: isTopVisible } =
    useScrollReveal<HTMLDivElement>();
  const { ref: termsRef, isRevealed: isTermsVisible } =
    useScrollReveal<HTMLDivElement>();
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnter = () => {
    videoRef.current?.play();
  };

  const handleVideoLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className={`${styles.buy_terms} uk-container-xlarge`}>
      <div
        ref={topRef}
        className={`${styles.buy_top} ${styles['-bottom']} ${styles.animate} ${
          isTopVisible ? styles.animated : ''
        }`}
      >
        <div
          className={`${styles['-pos6']} ${styles['-no_link']} ${styles['-with-video']}`}
          onMouseEnter={handleVideoEnter}
          onMouseLeave={handleVideoLeave}
        >
          <div>
            <div className={styles.buy_top__title}>Двор</div>
            <div className={styles.buy_top__text}>
              детские площадки: 1 <br />
              спортивные площадки: 1 <br />
              площадки для отдыха: 1 <br />
              двор без машин
              <br />
              озеленение
              <br />
              камеры видеонаблюдения
              <br />
              освещение
              <br />
            </div>
          </div>
          <div className={styles.buy_top__img}>
            <video
              muted
              loop
              poster="../assets/image.png"
              preload="auto"
              ref={videoRef}
            >
              <source src="../assets/yard.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className={styles['-pos5']}>
          <div className={styles.buy_top__title} style={{ color: '#4d4f53' }}>
            Безбарьерная среда
          </div>
          <img
            className={styles.buy_top__img}
            src="./assets/bottom3.webp"
            alt="bottom3.webp"
          />
        </div>
        <div
          className={`${styles['-pos6']} ${styles['-no_link']} ${styles['-with-video']}`}
        >
          <div className={styles.buy_top__title}>
            Колясочная
            <div className={styles.buy_top__text}>Удобства для каждого</div>
          </div>
          <div className={styles.buy_top__img}>
            <img
              style={{ width: '100%', objectFit: 'contain', height: '100%' }}
              className={styles.buy_top__img}
              data-lazy="../assets/t2_v2.jpg"
              src="../assets/t2_v2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        ref={termsRef}
        className={`${styles.buy_terms__top} ${styles['-wide']} ${
          styles.animate
        } ${isTermsVisible ? styles.animated : ''}`}
      >
        <div className={styles.buy_terms__top_l}>
          <div className={styles.buy_terms__top_l_content}>
            <div>
              <div className={styles.buy_terms__top_l_title}>
                Коммерческие помещения
              </div>
              <div className={styles.buy_terms__top_l_text}>
                Коммерческие помещения в «Московских кварталах» — это
                возможность открыть свой бизнес в развитых жилых районах Москвы.
                Водоснабжение, отопление, система вентиляции уже готовы к
                подключению.
              </div>
            </div>
          </div>
          <img
            data-lazy="../assets/bottom4.webp"
            alt="terms"
            className={styles.buy_terms__top_l_img}
            src="../assets/bottom4.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default BuyFinish;
