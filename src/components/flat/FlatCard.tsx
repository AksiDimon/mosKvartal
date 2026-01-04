'use client';

import Image from 'next/image';
import { MouseEvent, useEffect, useMemo, useState } from 'react';
import pageStyles from '../../app/page.module.css';
import styles from './FlatCard.module.css';
import { printPage, scrollToElement } from '../../lib/dom';
import { Heart } from '../icons/Heart';
import { useLikes } from '@/contexts/LikeContext';

const FlatCard = () => {
  const { setLikes } = useLikes();
  const mediaOptions = useMemo(
    () => [
      {
        key: 'plan',
        label: 'Планировка',
        src: '/assets/hi8vz4jggj7utowsho6fdf0badsmmpob.png',
      },
      {
        key: 'floor',
        label: 'Этаж',
        src: '/assets/s7bhtd8958vsglbo4c05wijevnz5ox9l.jpg',
      },
      {
        key: 'view',
        label: 'Вид из окна',
        src: '/assets/v2zuwzj16d1gcno3ysjkuquemghdk4rl.jpg',
      },
    ],
    []
  );
  const [activeKey, setActiveKey] = useState(mediaOptions[0].key);
  const [discountApplied, setDiscountApplied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeHover, setLikeHover] = useState(false);
  const activeMedia =
    mediaOptions.find((option) => option.key === activeKey) ?? mediaOptions[0];

  const handleScrollClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToElement('calculator-iframe');
  };

  const handleLikeToggle = () => {
    setLiked((prev) => !prev);
  };

  useEffect(() => {
    setLikes(liked ? 1 : 0);
  }, [liked, setLikes]);

  const heartColors = useMemo(() => {
    if (liked) {
      return likeHover
        ? { fill: '#4D4F53', stroke: '#4D4F53' }
        : { fill: '#E90002', stroke: '#E90002' };
    }
    return likeHover
      ? { fill: 'none', stroke: '#4D4F53' }
      : { fill: 'none', stroke: '#E90002' };
  }, [liked, likeHover]);

  return (
    <>
      <div
        className={`${pageStyles['page-title']} uk-container uk-container-xlarge`}
      >
        <div className={pageStyles['page-title__det']}>
          <div className={styles.title_buts}>
            <div
              className={`${styles.title_but} ${styles['-print']}`}
              onClick={printPage}
            >
              <i></i>
              <span>Распечатать</span>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-container uk-container-xlarge">
        <div className={styles['flat-card']}>
          <div className={styles['flat-card__image']}>
            <div className={styles.det_bl_tab_contents}>
              <div className={styles.det_bl_tab_content}>
                <div
                  className={`${styles.det_bl_plan} ${
                    activeKey === 'plan' ? 'reserve' : ''
                  }`}
                >
                  <img
                    src={activeMedia.src}
                    alt={activeMedia.label}
                    title="plan"
                  />
                  {activeKey === 'plan' && (
                    <div className={styles['icon-lock']}>
                      <img src="../assets/lock.svg" alt="lock.svg" />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.det_bl_tabs}>
              {mediaOptions.map((option) => (
                <button
                  key={option.key}
                  type="button"
                  className={`${styles.det_bl_tab} ${
                    activeKey === option.key ? styles.active : ''
                  }`}
                  onClick={() => setActiveKey(option.key)}
                >
                  {activeKey === option.key && (
                    <Image
                      className={styles.tabIcon}
                      src="/assets/check-white.svg"
                      alt=""
                      width={15}
                      height={10}
                    />
                  )}
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div className={styles['flat-card__info']}>
            <div className={styles.title_address}>
              <div className={styles.text}>
                <span>
                  1 комн.&nbsp;&nbsp;&nbsp;39.4 м
                  <sup>
                    <small>2</small>
                  </sup>
                </span>
                <div className={styles.det_bl_l_title}>
                  1 корп.&nbsp;/&nbsp; № 31 &nbsp;/&nbsp;8 этаж
                </div>
              </div>
              <div
                className={`js-det-fav-but ${styles.title_but} ${styles['-fav']}`}
                data-id="92793"
              >
                {/* <i></i> */}
                <button
                  type="button"
                  className={styles.likeButton}
                  style={{ background: 'none' }}
                  onClick={handleLikeToggle}
                  onMouseEnter={() => setLikeHover(true)}
                  onMouseLeave={() => setLikeHover(false)}
                  aria-label={
                    liked ? 'Убрать из избранного' : 'Добавить в избранное'
                  }
                >
                  <Heart fill={heartColors.fill} stroke={heartColors.stroke} />
                </button>
              </div>
            </div>
            <div className={styles.name}>
              ВАО, Измайлово, 3-я Прядильная ул., влд. 4
            </div>
            <div className={styles.metro}>
              <div className={styles['pageCard-adress-lock-item']}>
                <div className={styles['pageCard-adress-lock-img']}>
                  <div>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="14" height="14" rx="7" fill="#0072BA"></rect>
                    </svg>
                    <div className={styles['pageCard-adress-lock-img-text']}>
                      Измайловская
                    </div>
                  </div>
                  <div>
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.34833 7.26L5.01918 5.32C5.31901 5.10058 5.68368 4.98792 6.05501 5C6.50793 5.01129 6.94609 5.16343 7.30851 5.43523C7.67101 5.70705 7.93976 6.08504 8.07751 6.51667C8.23251 7.0025 8.37418 7.33083 8.50251 7.50167C8.89026 8.019 9.39326 8.43883 9.97159 8.72783C10.5499 9.01692 11.1877 9.16708 11.8342 9.16667V10.8333C10.9736 10.8342 10.1235 10.6444 9.34509 10.2774C8.56668 9.91042 7.87934 9.37533 7.33251 8.71083L6.75168 12.0067L8.46918 13.4483L10.3217 18.5383L8.75501 19.1083L7.05501 14.4383L4.23 12.0675C3.99817 11.8803 3.82077 11.6343 3.71627 11.3553C3.61177 11.0763 3.58399 10.7742 3.63583 10.4808L4.06 8.07667L3.49583 8.48667L1.72333 10.9267L0.375 9.94667L2.33417 7.25L2.34833 7.26ZM7.25084 4.58333C6.80884 4.58333 6.38493 4.40774 6.07234 4.09517C5.75976 3.78262 5.58418 3.35869 5.58418 2.91667C5.58418 2.47464 5.75976 2.05072 6.07234 1.73816C6.38493 1.42559 6.80884 1.25 7.25084 1.25C7.69284 1.25 8.11676 1.42559 8.42934 1.73816C8.74193 2.05072 8.91751 2.47464 8.91751 2.91667C8.91751 3.35869 8.74193 3.78262 8.42934 4.09517C8.11676 4.40774 7.69284 4.58333 7.25084 4.58333ZM4.77418 15.5675L2.09583 18.7592L0.819167 17.6883L3.29917 14.7333L3.92083 12.9167L5.41334 14.1667L4.77418 15.5675Z"
                        fill="#E90002"
                      ></path>
                    </svg>
                    <div className={styles['pageCard-adress-lock-img-text']}>
                      15 мин.
                    </div>
                  </div>
                  <div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.8346 16.6654H4.16797V17.4987C4.16797 17.7197 4.08017 17.9317 3.92389 18.0879C3.76761 18.2442 3.55565 18.332 3.33464 18.332H2.5013C2.28029 18.332 2.06833 18.2442 1.91204 18.0879C1.75577 17.9317 1.66797 17.7197 1.66797 17.4987V9.9987L3.76214 4.4137C3.88124 4.09594 4.09452 3.82211 4.37344 3.62882C4.65235 3.43553 4.98362 3.33199 5.32297 3.33203H14.6796C15.019 3.33199 15.3502 3.43553 15.6291 3.62882C15.9081 3.82211 16.1214 4.09594 16.2405 4.4137L18.3346 9.9987V17.4987C18.3346 17.7197 18.2468 17.9317 18.0906 18.0879C17.9343 18.2442 17.7223 18.332 17.5013 18.332H16.668C16.447 18.332 16.235 18.2442 16.0787 18.0879C15.9225 17.9317 15.8346 17.7197 15.8346 17.4987V16.6654ZM3.44797 9.9987H16.5546L14.6796 4.9987H5.32297L3.44797 9.9987ZM5.41797 14.1654C5.74949 14.1654 6.06744 14.0337 6.30185 13.7993C6.53627 13.5649 6.66797 13.2469 6.66797 12.9154C6.66797 12.5839 6.53627 12.2659 6.30185 12.0314C6.06744 11.797 5.74949 11.6654 5.41797 11.6654C5.08645 11.6654 4.7685 11.797 4.53409 12.0314C4.29967 12.2659 4.16797 12.5839 4.16797 12.9154C4.16797 13.2469 4.29967 13.5649 4.53409 13.7993C4.7685 14.0337 5.08645 14.1654 5.41797 14.1654ZM14.5846 14.1654C14.9161 14.1654 15.2341 14.0337 15.4686 13.7993C15.703 13.5649 15.8346 13.2469 15.8346 12.9154C15.8346 12.5839 15.703 12.2659 15.4686 12.0314C15.2341 11.797 14.9161 11.6654 14.5846 11.6654C14.2531 11.6654 13.9351 11.797 13.7007 12.0314C13.4663 12.2659 13.3346 12.5839 13.3346 12.9154C13.3346 13.2469 13.4663 13.5649 13.7007 13.7993C13.9351 14.0337 14.2531 14.1654 14.5846 14.1654Z"
                        fill="#E90002"
                      ></path>
                    </svg>
                    <div className={styles['pageCard-adress-lock-img-text']}>
                      11 мин.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.det_bl_l_advs}>
              <div className={styles.det_bl_l_advs__label}>Особенности:</div>
              <div className={styles.det_bl_l_advs__tag}>без аукциона</div>
              <div className={styles.det_bl_l_advs__tag}>с отделкой</div>
            </div>
            <div className={styles.det_bl_l_p}>
              <span>Ипотека:</span>
              <span>Стандартная, семейная</span>
            </div>
            <div className={styles.det_bl_l_p}>
              <span>Условия покупки:</span>
              <span>Забронировано</span>
            </div>
            <div className={styles.det_bl_l_p}>
              <span>Доступно для бронирования:</span>
              <span>до 15.02.2026</span>
            </div>
            <div className={styles.det_bl_l_p}>
              <span>Артикул:</span>
              <span>212926</span>
            </div>
            <div className={styles.det_bl_l_pr_flex}>
              <div className={styles.priceBlock}>
                <div className={styles.left}>
                  <div className={styles.price}>
                    {discountApplied ? '12 720 932 ₽' : '13 896 619 ₽'}
                  </div>
                  <div className={styles.priceSub}>
                    {discountApplied ? '322 867 ₽/м²' : '352 706 ₽/м²'}
                  </div>
                </div>
                <div className={styles.right}>
                  <div className={styles.saleRow}>
                    <span className={styles.saleLabel}>
                      {discountApplied ? 'Скидка применена:' : 'Акция:'}
                    </span>
                    <strong className={styles.saleValue}>
                      {discountApplied ? '8.46%' : 'Скидка 8.46%'}
                    </strong>
                  </div>

                  <label className={styles.discountToggle}>
                    <input
                      type="checkbox"
                      checked={discountApplied}
                      onChange={() => setDiscountApplied((v) => !v)}
                    />
                    <span
                      className={`${styles.toggleSlider} ${
                        discountApplied ? styles.toggleSliderActive : ''
                      }`}
                      aria-hidden
                    />
                    <span className={styles.toggleLabel}>
                      Рассчитать скидку
                    </span>
                  </label>
                  {discountApplied && (
                    <div className={styles.discountNote}>
                      Скидка действительна при <br />
                      100% оплате и ипотеке
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={`no_det_print ${styles.det_bl_buy__btns}`}>
              <a
                href="https://msk.widget.hart-estate.ru/beta/?id=71869567-c940-4161-970f-0b6c49ee9b07"
                target="_blank"
                className={styles.det_bl_buy__btn}
              >
                <span>3D тур 360</span>
              </a>
            </div>
            <div className={`no_det_print ${styles.det_bl_buy__btns}`}>
              <a
                className={styles.det_bl_buy__btn}
                href="#"
                onClick={handleScrollClick}
              >
                Выбрать условия по ипотеке
                <span>
                  <img src="/assets/forward.svg" alt="forward.svg" />
                </span>
              </a>
            </div>
            <div
              className={`no_det_print ${styles.det_bl_buy__btn} ${styles['-dis']}`}
            >
              <span>Забронировано</span>
            </div>
          </div>
        </div>
        <div className={styles['flat-card__mobile']}>
          <div className={styles.title_address}>
            <div className={styles.text}>
              1 комн.,&nbsp;39.4 м
              <sup>
                <small>2</small>
              </sup>
            </div>
            <div
              className={`js-det-fav-but ${styles.title_but} ${styles['-fav']}`}
              data-id="92793"
            >
              {/* <i></i> */}
              <button
                style={{ background: 'none' }}
                type="button"
                className={styles.likeButton}
                onClick={handleLikeToggle}
                onMouseEnter={() => setLikeHover(true)}
                onMouseLeave={() => setLikeHover(false)}
                aria-label={
                  liked ? 'Убрать из избранного' : 'Добавить в избранное'
                }
              >
                <Heart fill={heartColors.fill} stroke={heartColors.stroke} />
              </button>
            </div>
          </div>
          <div className={styles.name}>
            ВАО, Измайлово, 3-я Прядильная ул., влд. 4
          </div>
          <div className={styles.det_bl_l_title}>
            1 корп.&nbsp;/&nbsp; № 31 &nbsp;/&nbsp;8 этаж
          </div>
          <div className={styles.metro}>
            <div className={styles['pageCard-adress-lock-item']}>
              <div className={styles['pageCard-adress-lock-img']}>
                <div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="14" height="14" rx="7" fill="#0072BA"></rect>
                  </svg>
                  <div className={styles['pageCard-adress-lock-img-text']}>
                    Измайловская
                  </div>
                </div>
                <div>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.34833 7.26L5.01918 5.32C5.31901 5.10058 5.68368 4.98792 6.05501 5C6.50793 5.01129 6.94609 5.16343 7.30851 5.43523C7.67101 5.70705 7.93976 6.08504 8.07751 6.51667C8.23251 7.0025 8.37418 7.33083 8.50251 7.50167C8.89026 8.019 9.39326 8.43883 9.97159 8.72783C10.5499 9.01692 11.1877 9.16708 11.8342 9.16667V10.8333C10.9736 10.8342 10.1235 10.6444 9.34509 10.2774C8.56668 9.91042 7.87934 9.37533 7.33251 8.71083L6.75168 12.0067L8.46918 13.4483L10.3217 18.5383L8.75501 19.1083L7.05501 14.4383L4.23 12.0675C3.99817 11.8803 3.82077 11.6343 3.71627 11.3553C3.61177 11.0763 3.58399 10.7742 3.63583 10.4808L4.06 8.07667L3.49583 8.48667L1.72333 10.9267L0.375 9.94667L2.33417 7.25L2.34833 7.26ZM7.25084 4.58333C6.80884 4.58333 6.38493 4.40774 6.07234 4.09517C5.75976 3.78262 5.58418 3.35869 5.58418 2.91667C5.58418 2.47464 5.75976 2.05072 6.07234 1.73816C6.38493 1.42559 6.80884 1.25 7.25084 1.25C7.69284 1.25 8.11676 1.42559 8.42934 1.73816C8.74193 2.05072 8.91751 2.47464 8.91751 2.91667C8.91751 3.35869 8.74193 3.78262 8.42934 4.09517C8.11676 4.40774 7.69284 4.58333 7.25084 4.58333ZM4.77418 15.5675L2.09583 18.7592L0.819167 17.6883L3.29917 14.7333L3.92083 12.9167L5.41334 14.1667L4.77418 15.5675Z"
                      fill="#E90002"
                    ></path>
                  </svg>
                  <div className={styles['pageCard-adress-lock-img-text']}>
                    15 мин.
                  </div>
                </div>
                <div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8346 16.6654H4.16797V17.4987C4.16797 17.7197 4.08017 17.9317 3.92389 18.0879C3.76761 18.2442 3.55565 18.332 3.33464 18.332H2.5013C2.28029 18.332 2.06833 18.2442 1.91204 18.0879C1.75577 17.9317 1.66797 17.7197 1.66797 17.4987V9.9987L3.76214 4.4137C3.88124 4.09594 4.09452 3.82211 4.37344 3.62882C4.65235 3.43553 4.98362 3.33199 5.32297 3.33203H14.6796C15.019 3.33199 15.3502 3.43553 15.6291 3.62882C15.9081 3.82211 16.1214 4.09594 16.2405 4.4137L18.3346 9.9987V17.4987C18.3346 17.7197 18.2468 17.9317 18.0906 18.0879C17.9343 18.2442 17.7223 18.332 17.5013 18.332H16.668C16.447 18.332 16.235 18.2442 16.0787 18.0879C15.9225 17.9317 15.8346 17.7197 15.8346 17.4987V16.6654ZM3.44797 9.9987H16.5546L14.6796 4.9987H5.32297L3.44797 9.9987ZM5.41797 14.1654C5.74949 14.1654 6.06744 14.0337 6.30185 13.7993C6.53627 13.5649 6.66797 13.2469 6.66797 12.9154C6.66797 12.5839 6.53627 12.2659 6.30185 12.0314C6.06744 11.797 5.74949 11.6654 5.41797 11.6654C5.08645 11.6654 4.7685 11.797 4.53409 12.0314C4.29967 12.2659 4.16797 12.5839 4.16797 12.9154C4.16797 13.2469 4.29967 13.5649 4.53409 13.7993C4.7685 14.0337 5.08645 14.1654 5.41797 14.1654ZM14.5846 14.1654C14.9161 14.1654 15.2341 14.0337 15.4686 13.7993C15.703 13.5649 15.8346 13.2469 15.8346 12.9154C15.8346 12.5839 15.703 12.2659 15.4686 12.0314C15.2341 11.797 14.9161 11.6654 14.5846 11.6654C14.2531 11.6654 13.9351 11.797 13.7007 12.0314C13.4663 12.2659 13.3346 12.5839 13.3346 12.9154C13.3346 13.2469 13.4663 13.5649 13.7007 13.7993C13.9351 14.0337 14.2531 14.1654 14.5846 14.1654Z"
                      fill="#E90002"
                    ></path>
                  </svg>
                  <div className={styles['pageCard-adress-lock-img-text']}>
                    11 мин.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.priceBlock}>
            <div className={styles.left}>
              <div className={styles.price}>
                {discountApplied ? '12 720 932 ₽' : '13 896 619 ₽'}
              </div>
              <div className={styles.priceSub}>
                {discountApplied ? '322 867 ₽/м²' : '352 706 ₽/м²'}
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.saleRow}>
                <span className={styles.saleLabel}>
                  {discountApplied ? 'Скидка применена:' : 'Акция:'}
                </span>
                <strong className={styles.saleValue}>
                  {discountApplied ? '8.46%' : 'Скидка 8.46%'}
                </strong>
              </div>

              <label className={styles.discountToggle}>
                <input
                  type="checkbox"
                  checked={discountApplied}
                  onChange={() => setDiscountApplied((v) => !v)}
                />
                <span
                  className={`${styles.toggleSlider} ${
                    discountApplied ? styles.toggleSliderActive : ''
                  }`}
                  aria-hidden
                />
                <span className={styles.toggleLabel}>Рассчитать скидку</span>
              </label>
              {discountApplied && (
                <div className={styles.discountNote}>
                  Скидка действительна при <br />
                  100% оплате и ипотеке
                </div>
              )}
            </div>
          </div>
          <div className={styles.det_bl_tab_contents}>
            <div className={styles.det_bl_tab_content}>
              <div
                className={`${styles.det_bl_plan} ${
                  activeKey === 'plan' ? 'reserve' : ''
                }`}
              >
                <img
                  src={activeMedia.src}
                  alt={activeMedia.label}
                  title="plan"
                />
                {activeKey === 'plan' && (
                  <div className={styles['icon-lock']}>
                    <img src="../assets/lock.svg" alt="lock.svg" />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={styles.det_bl_tabs}>
            {mediaOptions.map((option) => (
              <button
                key={option.key}
                type="button"
                className={`${styles.det_bl_tab} ${
                  activeKey === option.key ? styles.active : ''
                }`}
                onClick={() => setActiveKey(option.key)}
              >
                <span>{option.label}</span>
              </button>
            ))}
          </div>
          <div className={styles.det_bl_l_advs}>
            <div className={styles.det_bl_l_advs__label}>Особенности:</div>
            <div className={styles.det_bl_l_advs_in}>
              <div>без аукциона</div>
              <div>с отделкой</div>
            </div>
          </div>
          <div className={styles.det_bl_l_p}>
            <span>Ипотека:</span>
            <span>Стандартная, семейная</span>
          </div>
          <div className={styles.det_bl_l_p}>
            <span>Условия покупки:</span>
            <span>Забронировано</span>
          </div>
          <div className={styles.det_bl_l_p}>
            <span>Доступно для бронирования:</span>
            <span>до 15.02.2026</span>
          </div>
          <div className={styles.det_bl_l_p}>
            <span>Артикул:</span>
            <span>212926</span>
          </div>
          <div className={`no_det_print ${styles.det_bl_buy__btns}`}>
            <a
              href="https://msk.widget.hart-estate.ru/beta/?id=71869567-c940-4161-970f-0b6c49ee9b07"
              target="_blank"
              className={styles.det_bl_buy__btn}
            >
              <span>3D тур 360</span>
            </a>
          </div>
          <div className={`no_det_print ${styles.det_bl_buy__btns}`}>
            <a
              className={styles.det_bl_buy__btn}
              href="#"
              onClick={handleScrollClick}
            >
              Выбрать условия по ипотеке
              <span>
                <img src="/assets/forward.svg" alt="forward.svg" />
              </span>
            </a>
          </div>
          <div
            className={`no_det_print ${styles.det_bl_buy__btn} ${styles['-dis']}`}
          >
            <span>Забронировано</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlatCard;
