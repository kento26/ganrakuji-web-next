import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, SwiperOptions, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';

import styles from 'styles/components/organisms/Mainvisual.module.scss';

type Props = {
  mainvisualImageUrlList: Array<string>;
};

export const Mainvisual = ({ mainvisualImageUrlList }: Props) => {
  const params: SwiperOptions = {
    modules: [Autoplay, EffectFade],
    slidesPerView: 1,
    speed: 2000,
    loop: true,
    effect: 'fade',
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };

  return (
    <section className={styles.mainvisual}>
      <div className={styles.swiper_container}>
        <Swiper {...params}>
          {/* 要素の数が少ないとフェードインのエフェクトカクつくので倍にしている */}
          {[...mainvisualImageUrlList, ...mainvisualImageUrlList].map(
            (imageUrl, index) => (
              <SwiperSlide key={index}>
                <div className={styles.image}>
                  <img className="zoomUpslideImg" src={imageUrl} alt="願楽寺" />
                </div>
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </div>

      <div className={styles.title_container}>
        <div className={`${styles.title} is-pc`}>
          <img
            src="/image/mainvisual/title_black.svg"
            alt="願楽寺「こころ」に楽しいひと時"
          />
        </div>
        <div className={`${styles.title} is-sp`}>
          <img
            src="/image/mainvisual/title_white.svg"
            alt="願楽寺「こころ」に楽しいひと時"
          />
        </div>
      </div>
    </section>
  );
};
