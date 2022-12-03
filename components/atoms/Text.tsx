import { ReactNode } from 'react';

import styles from 'styles/components/atoms/Text.module.scss';

type Props = {
  children: ReactNode;
  textAlign?: 'center' | 'justify' | 'right';
};

export const Text = ({ children, textAlign = 'justify' }: Props) => {
  return (
    <div className={`${styles.text} ${styles[textAlign]}`}>{children}</div>
  );
};
