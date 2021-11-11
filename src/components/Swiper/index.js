/**
 * 轮播
 */
import React, { useEffect, memo, useRef, useCallback } from 'react'
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import styles from './index.module.scss'

const classPrefix = 'components-swiper'

export default memo(function MySwiper({ list, title }) {
  const swiperRef = useRef()
  const mySwiper = useRef()

  useEffect(() => {
    initSwiper()
    return () => {
      destorySwiper()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    destorySwiper()
    initSwiper()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list])

  const initSwiper = useCallback(() => {
    mySwiper.current = new Swiper(swiperRef.current, {
      loop: true,
      speed: 1000,
      centeredSlides: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    })
  }, [])
  const destorySwiper = () => {
    if (!mySwiper.current) return
    if (swiperRef.current) {
      mySwiper.current.destroy(true, true)
    }
  }

  return (
    <div className={styles['components-swiper']}>
      <div ref={swiperRef} className={'swiper-container'}>
        {title && <div className={styles.title}>{title}</div>}
        <div className="swiper-wrapper">
          {list.map((item = {}, index) => {
            return (
              <div key={index} className={'swiper-slide'}>
                <span>{item}</span>
              </div>
            )
          })}
        </div>
      </div>
      {/* <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div> */}
    </div>
  )
})
