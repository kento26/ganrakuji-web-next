import { TitleUnderLine, Text } from 'components/atoms';
import { ScrollAnimationObserver } from 'components/providers';

import styles from 'styles/components/organisms/History.module.scss';

type Props = {
  historyText: string;
  historyImage01Url: string;
  historyImage02Url: string;
};

export const History = ({
  historyText,
  historyImage01Url,
  historyImage02Url,
}: Props) => {
  return (
    <section id="history" className={styles.container}>
      <div className={styles.container__item}>
        <div className={`${styles.container__title} is-sp`}>
          <ScrollAnimationObserver>
            <TitleUnderLine>
              <h2>歴史</h2>
            </TitleUnderLine>
          </ScrollAnimationObserver>
        </div>

        <div className={styles.image}>
          <ScrollAnimationObserver>
            <img src={historyImage01Url} alt="願楽寺 歴史 01" />
          </ScrollAnimationObserver>
        </div>

        <div className={styles.image}>
          <ScrollAnimationObserver>
            <img src={historyImage02Url} alt="願楽寺 歴史 02" />
          </ScrollAnimationObserver>
        </div>
      </div>

      <div className={styles.container__item}>
        <div className={`${styles.container__title} is-pc`}>
          <ScrollAnimationObserver>
            <TitleUnderLine>
              <h2>歴史</h2>
            </TitleUnderLine>
          </ScrollAnimationObserver>
        </div>

        <ScrollAnimationObserver>
          <Text>
            <div dangerouslySetInnerHTML={{ __html: historyText }}></div>
          </Text>
        </ScrollAnimationObserver>
      </div>
    </section>
  );
};
