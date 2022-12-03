import { TitleUnderLine, Text } from 'components/atoms';
import { ScrollAnimationObserver } from 'components/providers';

import styles from 'styles/components/organisms/Cleaning.module.scss';

type Props = { tombText: string };

export const Cleaning = ({ tombText }: Props) => {
  return (
    <section id="cleaning" className={styles.container}>
      <div className={styles.container__title}>
        <ScrollAnimationObserver>
          <TitleUnderLine>
            <h2>墓掃除代行</h2>
          </TitleUnderLine>
        </ScrollAnimationObserver>
      </div>

      <ScrollAnimationObserver>
        <Text>
          <div dangerouslySetInnerHTML={{ __html: tombText }}></div>
        </Text>
      </ScrollAnimationObserver>
    </section>
  );
};
