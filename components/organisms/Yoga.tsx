import { TitleUnderLine, Text } from 'components/atoms';
import { ScrollAnimationObserver } from 'components/providers';

import styles from 'styles/components/organisms/Yoga.module.scss';

type Props = {
  yogaImageUrl: string;
  yogaText: string;
};

export const Yoga = ({ yogaImageUrl, yogaText }: Props) => {
  return (
    <section id="yoga" className={styles.container}>
      <div className={styles.container__title}>
        <ScrollAnimationObserver effect="fadeIn">
          <TitleUnderLine>
            <h2>お寺でヨガ体験</h2>
          </TitleUnderLine>
        </ScrollAnimationObserver>
      </div>

      <div className={styles.container__detail}>
        <ScrollAnimationObserver effect="fadeIn">
          <Text>
            <div dangerouslySetInnerHTML={{ __html: yogaText }}></div>
          </Text>
        </ScrollAnimationObserver>

        <div className={styles.image}>
          <ScrollAnimationObserver effect="fadeIn">
            <img src={yogaImageUrl} alt="お寺でヨガ体験" />
          </ScrollAnimationObserver>
        </div>
      </div>
    </section>
  );
};
