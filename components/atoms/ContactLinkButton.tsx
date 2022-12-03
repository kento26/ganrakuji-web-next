import Link from 'next/link';

import styles from 'styles/components/atoms/Button.module.scss';

export const ContactLinkButton = () => {
  return (
    <Link href="/contact">
      <a className={styles.contact_button}>
        <img src="/image/contact/pic_contact_button.svg" alt="contact link" />
      </a>
    </Link>
  );
};
