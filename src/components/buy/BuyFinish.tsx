const BuyFinish = () => (
  <div className="no_det_print buy_finish">
    <div className="uk-container-xlarge">
      <h2 className="new-buy-subtitle">В квартире</h2>
      <div className="buy_finish__main">
        <div className="buy_terms__top_r animate animated">
          <div
            className="buy_terms__top_r__img lazy-loaded"
            data-lazy="../assets/nf-1.webp"
            style={{ backgroundImage: "url('../assets/nf-1.webp')" }}
          ></div>
        </div>
        <div className="buy_finish__main-text-wrap animate animated">
          <div className="buy_finish__main-text-tl">
            Все квартиры передаются с готовой чистовой отделкой — заселяйтесь и
            живите сразу
          </div>
          <div className="buy_finish__main-text-image">
            <img src="../assets/nf-1.webp" alt="nf-1.webp" />
          </div>
          <div className="buy_finish__main-text-tx">
            <div>Экономьте своё время и средства на ремонтные работы.</div>
            <div>
              Интерьер квартир продуман до мелочей и создаёт уют и эстетику
              пространства.
            </div>
            <div>Никаких ожиданий — начинайте новую жизнь прямо сейчас!</div>
          </div>
        </div>
      </div>
      <div className="buy_finish__main-text-list">
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
    <div className="banners">
      <div className="buy_terms uk-container-xlarge">
        <div className="buy_top -bottom animate animated">
          <div className="-pos6 -no_link -with-video">
            <div>
              <div className="buy_top__title">Двор</div>
              <div className="buy_top__text">
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
            <div className="buy_top__img">
              <video
                muted
                loop
                autoPlay
                poster="../assets/yard.mp4"
                preload="auto"
              >
                <source src="../assets/yard.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="-pos5">
            <div className="buy_top__title">Безбарьерная среда</div>
            <img
              className="buy_top__img"
              src="./assets/bottom3.webp"
              alt="bottom3.webp"
            />
          </div>
          <div className="-pos6 -no_link -with-video">
            <div className="buy_top__title">
              Колясочная
              <div className="buy_top__text">Удобства для каждого</div>
            </div>
            <div className="buy_top__img">
              <img
                className="buy_top__img"
                data-lazy="../assets/t2_v2.jpg"
                src="../assets/t2_v2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="buy_terms__top -wide animate animated">
          <div className="buy_terms__top_l">
            <div className="buy_terms__top_l_content">
              <div>
                <div className="buy_terms__top_l_title">
                  Коммерческие помещения
                </div>
                <div className="buy_terms__top_l_text">
                  Коммерческие помещения в «Московских кварталах» — это
                  возможность открыть свой бизнес в развитых жилых районах
                  Москвы. Водоснабжение, отопление, система вентиляции уже
                  готовы к подключению.
                </div>
              </div>
            </div>
            <img
              data-lazy="../assets/bottom4.webp"
              alt="terms"
              className="buy_terms__top_l_img"
              src="../assets/bottom4.webp"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BuyFinish;
