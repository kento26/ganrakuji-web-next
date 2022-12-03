import { memo } from 'react';
import Link from 'next/link';

import { useLocationChange } from 'hooks/useLocationChange';
import { navigationList } from 'router/navigationList';

import styles from 'styles/components/organisms/Footer.module.scss';

export const Footer = memo(() => {
  const { transitionPage } = useLocationChange();

  return (
    <footer className={styles.container}>
      <div className={styles.container__inner}>
        <div className={styles.container__item}>
          <p className={styles.title}>願楽寺</p>
          <p className={styles.address}>
            〒938-0066
            <br />
            富山県黒部市生地185
          </p>

          <div className={styles.link_list}>
            <nav>
              <ul>
                {navigationList.map(({ name, href, id }) => (
                  <li key={id}>
                    <Link href={href} scroll={false}>
                      <a onClick={(e) => transitionPage(e, href, id)}>{name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className={styles.link_list}>
            <ul>
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
          </div>
        </div>

        <div className={styles.container__item}>
          <div className={styles.map}>
            <iframe
              title="願楽寺googleマップ"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.0264299881424!2d137.41423031529243!3d36.88971597993032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff7a91dda2aeeeb%3A0xc7f5e9e89cbb5cb0!2z6aGY5qW95a-6!5e0!3m2!1sja!2sjp!4v1621748620975!5m2!1sja!2sjp"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
});
