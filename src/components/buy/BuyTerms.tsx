const BuyTerms = () => (
  <>
    <div
      className="no_det_print buy_terms uk-container-xlarge -no_auction"
      id="object-usloviya-pokupki"
    >
      <div className="buy_terms__top animate animated">
        <div className="buy_terms__top_l">
          <a href="/usloviya-pokupki/" className="dt_link"></a>
          <div className="buy_terms__top_l_content">
            <div>
              <div className="buy_terms__top_l_title">Условия покупки</div>
              <div className="buy_terms__top_l_text">
                Квартиры, машино-места в подземном паркинге или помещения для
                бизнеса в «Московских&nbsp;кварталах» можно купить по прямой
                продаже или по аукциону на электронной торговой площадке
                Росэлторг.
              </div>
            </div>
            <div className="buy_link_det">
              <span>Подробнее</span>
              <i></i>
            </div>
          </div>
          <div className="buy_terms__top_l_image">
            <img
              loading="lazy"
              alt="terms"
              className="buy_terms__top_l_img"
              src="../assets/terms1.png"
            />
          </div>
        </div>
        <div className="buy_how__r">
          <div className="buy_how__t">Рассчитать ипотеку</div>
          <div className="buy_how__banks">
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
          <div className="buy_how__text">
            Сервис расчета ипотечных продуктов предоставляется
            на&nbsp;платформах банков-партнеров. Результаты расчетов
            не&nbsp;являются офертой и&nbsp;носят информационный характер.
          </div>
        </div>
      </div>

      {/* <div className="iframe-ipoteka-domclick">
        <iframe
          id="calculator-iframe"
          src="https://ipoteka.domclick.ru/calc-reg/calculator.html?excludedSubproductIds=7&excludedSubproductIds=33&excludedSubproductIds=34&excludeMaternalFund=true"
          frameBorder="no"
          scrolling="no"
          width="100%"
          height="1200"
        ></iframe>
      </div> */}

      <div className="buy_how animate animated">
        <div className="buy_how__l">
          <div className="buy_how__t">Как купить в ипотеку?</div>

          <div className="buy_how__digs">
            <div className="buy_how__dig active" data-id="1">
              <span>Выбор и осмотр объекта</span>
            </div>
            <div className="buy_how__sep"></div>
            <div className="buy_how__dig" data-id="2">
              <span>Одобрение в&nbsp;банке</span>
            </div>
            <div className="buy_how__sep"></div>
            <div className="buy_how__dig with-comment" data-id="3">
              <span> Оформление ЭЦП </span>
            </div>
            <div className="buy_how__sep"></div>
            <div className="buy_how__dig" data-id="4">
              <span>Регистрация на&nbsp;торговой площадке</span>
            </div>
            <div className="buy_how__sep"></div>
            <div className="buy_how__dig" data-id="5">
              <span>Подача заявки на&nbsp;участие в&nbsp;аукционе</span>
            </div>
            <div className="buy_how__sep"></div>
            <div className="buy_how__dig" data-id="6">
              <span>Участие в&nbsp;аукционе</span>
            </div>
            <div className="buy_how__sep"></div>
            <div className="buy_how__dig" data-id="7">
              <span>Предоставление данных</span>
            </div>
            <div className="buy_how__sep"></div>
            <div className="buy_how__dig" data-id="8">
              <span>Оценка недвижимости</span>
            </div>
            <div className="buy_how__sep"></div>
            <div className="buy_how__dig" data-id="9">
              <span>Согласование даты сделки</span>
            </div>
            <div className="buy_how__sep"></div>
            <div className="buy_how__dig" data-id="10">
              <span>Заключение и&nbsp;оплата договора</span>
            </div>
            <div className="buy_how__sep"></div>
            <div className="buy_how__dig" data-id="11">
              <span>
                Регистрация права собственности и&nbsp;получение ключей
              </span>
            </div>
          </div>

          <div className="buy_how__steps">
            <div>
              <div className="buy_how__step">
                Шаг <span>1</span>
              </div>
              <div className="buy_how__val">
                <div data-id="1">Выбор и осмотр объекта</div>
                <div data-id="2" style={{ display: 'none' }}>
                  Одобрение в&nbsp;банке
                </div>
                <div data-id="3" style={{ display: 'none' }}>
                  Оформление ЭЦП *
                </div>
                <div data-id="4" style={{ display: 'none' }}>
                  Регистрация на&nbsp;торговой площадке
                </div>
                <div data-id="5" style={{ display: 'none' }}>
                  Подача заявки на&nbsp;участие в&nbsp;аукционе
                </div>
                <div data-id="6" style={{ display: 'none' }}>
                  Участие в&nbsp;аукционе
                </div>
                <div data-id="7" style={{ display: 'none' }}>
                  Предоставление данных
                </div>
                <div data-id="8" style={{ display: 'none' }}>
                  Оценка недвижимости
                </div>
                <div data-id="9" style={{ display: 'none' }}>
                  Согласование даты сделки
                </div>
                <div data-id="10" style={{ display: 'none' }}>
                  Заключение и&nbsp;оплата договора
                </div>
                <div data-id="11" style={{ display: 'none' }}>
                  Регистрация права собственности и&nbsp;получение ключей
                </div>
              </div>
            </div>
            <a
              href="/pokupka-nedvizhimosti-dlya-vseh/uslovia-pokupki/#buy_mortgage"
              className="buy_link_det"
            >
              <span>Подробнее</span>
              <i></i>
            </a>
          </div>
        </div>

        <div className="buy_how__r">
          <div className="buy_how__t">Рассчитать ипотеку</div>
          <div className="buy_how__banks">
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
          <div className="buy_how__text">
            Сервис расчета ипотечных продуктов предоставляется
            на&nbsp;платформах банков-партнеров. Результаты расчетов
            не&nbsp;являются офертой и&nbsp;носят информационный характер.
          </div>
        </div>
      </div>
    </div>

    <div
      className="component-similar-flats no_det_print"
      id="component-similar-flats"
    ></div>
    <div className="object-buy-info">
      <div className="container">
        <div className="text">Получить информацию по покупке недвижимости</div>
        <a href="tel:+7 (495) 651-07-75" className="phone">
          +7 (495) 651-07-75
        </a>
      </div>
    </div>
  </>
);

export default BuyTerms;
