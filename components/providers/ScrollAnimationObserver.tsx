import { ReactNode, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

import styles from 'styles/components/providers/ScrollAnimationObserver.module.scss';

type Props = {
  children: ReactNode;
  effect?: 'extendedBackground' | 'fadeIn';
};

/**
 * TODO
 * <div className={styles.background}></div>はfadeInでは使用しない。
 * effectの数が増えていくと不要なHTMLが増えていくと思うので切り分けた方が良い？
 */

export const ScrollAnimationObserver = ({
  children,
  effect = 'extendedBackground',
}: Props) => {
  const { ref, inView } = useInView({
    rootMargin: '-15%',
    triggerOnce: true,
  });

  const selectedClassName = useMemo(() => {
    switch (effect) {
      case 'extendedBackground':
        return 'extended_background_container';

      case 'fadeIn':
        return 'fadeIn_container';
    }
  }, [effect]);

  return (
    <div
      className={`${styles[selectedClassName]} ${inView ? styles.active : ''}`}
      ref={ref}
    >
      <div className={styles.background}></div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
