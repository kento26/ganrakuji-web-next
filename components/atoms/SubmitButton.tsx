import styles from 'styles/components/atoms/Button.module.scss';

export const SubmitButton = () => {
  return <input className={styles.submit_button} type="submit" value="送信" />;
};
