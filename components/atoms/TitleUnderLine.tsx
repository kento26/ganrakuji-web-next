import { ReactNode } from 'react';

import styles from 'styles/components/atoms/TitleUnderLine.module.scss';

type Props = { children: ReactNode };

export const TitleUnderLine = ({ children }: Props) => {
  return (
    <div className={styles.title}>
      {children}
      <span></span>
    </div>
  );
};
