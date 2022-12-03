import { memo } from 'react';
import Link from 'next/link';

import { useLocationChange } from 'hooks/useLocationChange';
import { navigationList } from 'router/navigationList';

import styles from 'styles/components/molecules/Modal.module.scss';

type Props = { isOpen: boolean; onClick: () => void };

export const Modal = memo(({ isOpen = false, onClick }: Props) => {
  const { transitionPage } = useLocationChange({ callback: onClick });

  return (
    <div className={`${styles.modal} ${isOpen ? styles.open : ''}`}>
      <div className={styles.modal__inner}>
        <div className={styles.modal__list}>
          <nav>
            <ul>
              {navigationList.map(({ name, href, id }) => (
                <li key={id}>
                  <Link href={href} scroll={false}>
                    <a onClick={(e) => transitionPage(e, href, id)}>{name}</a>
                  </Link>
                </li>
              ))}

              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/toyama_ganrakuji/"
                >
                  <div className={styles.sns_icon}>
                    <img src="/image/icon/icon_instagram.svg" alt="instagram" />
                  </div>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
});
