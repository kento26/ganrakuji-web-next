import { TitleUnderLine, Text } from 'components/atoms';
import { ScrollAnimationObserver } from 'components/providers';

import styles from 'styles/components/organisms/Introduction.module.scss';

type Props = {
  introductionText: string;
  introductionName: string;
};

export const Introduction = ({ introductionText, introductionName }: Props) => {
  return (
    <section id="introduction" className={styles.container}>
      <div className={`${styles.container__item} ${styles.center}`}>
        <ScrollAnimationObserver effect="fadeIn">
          <TitleUnderLine>
            <h2>ご挨拶</h2>
          </TitleUnderLine>
        </ScrollAnimationObserver>
      </div>

      <div className={styles.container__item}>
        <ScrollAnimationObserver effect="fadeIn">
          <Text>
            <div dangerouslySetInnerHTML={{ __html: introductionText }}></div>
          </Text>

          <div className={styles.name_text_container}>
            <Text textAlign="right">
              {/* Error: Hydration failed because the initial UI does not match what was rendered on the server. */}
              {/* <p dangerouslySetInnerHTML={{ __html: name }}></p> */}
              <div dangerouslySetInnerHTML={{ __html: introductionName }}></div>
            </Text>
          </div>
        </ScrollAnimationObserver>
      </div>
    </section>
  );
};
