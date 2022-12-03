import { memo } from 'react';

import styles from 'styles/components/atoms/Button.module.scss';

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

export const HamburgerButton = memo(({ isOpen = false, onClick }: Props) => {
  return (
    <button
      className={styles.hamburger_button}
      onClick={onClick}
      aria-label="ハンバーガーボタン"
    >
      <span className={`${isOpen ? styles.open : ''}`}></span>
      <span className={`${isOpen ? styles.open : ''}`}></span>
      <span className={`${isOpen ? styles.open : ''}`}></span>
    </button>
  );
});
