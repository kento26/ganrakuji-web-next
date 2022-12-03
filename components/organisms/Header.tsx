import { useState, useCallback, memo } from 'react';
import Link from 'next/link';

import { HamburgerButton } from 'components/atoms';
import { Modal } from 'components/organisms';

import styles from 'styles/components/organisms/Header.module.scss';

export const Header = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <>
      <header className={styles.container}>
        <Link href="/">
          <a>
            <h1 className={styles.title}>願楽寺</h1>
          </a>
        </Link>
        <HamburgerButton isOpen={isOpen} onClick={toggleOpen} />
      </header>

      <Modal isOpen={isOpen} onClick={toggleOpen} />
    </>
  );
});
