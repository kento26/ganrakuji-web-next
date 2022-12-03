import { ReactNode } from 'react';

import styles from 'styles/components/atoms/ErrorText.module.scss';

type Props = { children: ReactNode };

export const ErrorText = ({ children }: Props) => {
  return <div className={styles.error_text}>{children}</div>;
};
