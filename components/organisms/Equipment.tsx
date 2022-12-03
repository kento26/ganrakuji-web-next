import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';

import { TitleUnderLine, Text } from 'components/atoms';

import styles from 'styles/components/organisms/Equipment.module.scss';

type Props = {
  facilitiesAndEquipmentList: Array<{
    facilitiesAndEquipmentText: string;
    facilitiesAndEquipmentTitle: string;
    facilitiesAndEquipmentImageUrl: string;
  }>;
};

export const Equipment = ({ facilitiesAndEquipmentList }: Props) => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <section id="equipment" className={styles.container}>
      <div className={styles.container__title}>
        <TitleUnderLine>
          <h2>施設・設備</h2>
        </TitleUnderLine>
      </div>

      <article className={styles.slider}>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          speed={800}
          pagination={{ type: 'fraction', el: '#pagination' }}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper: SwiperCore) => {
            if (typeof swiper.params.navigation !== 'boolean') {
              const navigation = swiper.params.navigation;
              navigation!.prevEl = prevRef.current;
              navigation!.nextEl = nextRef.current;
            }
          }}
        >
          {facilitiesAndEquipmentList.map(
            ({
              facilitiesAndEquipmentText,
              facilitiesAndEquipmentTitle,
              facilitiesAndEquipmentImageUrl,
            }) => (
              <SwiperSlide key={facilitiesAndEquipmentTitle}>
                <div className={styles.slider_item}>
                  <div className={styles.slider_image}>
                    <img
                      src={facilitiesAndEquipmentImageUrl}
                      alt={facilitiesAndEquipmentTitle}
                    />
                  </div>
                  <div className={styles.slider_sentence}>
                    <h3 className={styles.slider_title}>
                      {facilitiesAndEquipmentTitle}
                    </h3>
                    <Text>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: facilitiesAndEquipmentText,
                        }}
                      ></div>
                    </Text>
                  </div>
                </div>
              </SwiperSlide>
            ),
          )}

          <div className={styles.slider_navigation_container}>
            <div ref={prevRef} className={styles.slider_button}>
              <img src="/image/slider/icon_prev_arrow.svg" alt="logo" />
            </div>

            <div id="pagination" className={styles.slider_pagination}></div>

            <div ref={nextRef} className={styles.slider_button}>
              <img src="/image/slider/icon_next_arrow.svg" alt="logo" />
            </div>
          </div>
        </Swiper>
      </article>
    </section>
  );
};
