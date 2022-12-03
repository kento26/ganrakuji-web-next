import styles from 'styles/components/atoms/Loading.module.scss';

export const Loading = () => {
  return (
    <div className={styles.loading_container}>
      <div className={styles.waveform}>
        <div className={styles.waveform__bar}></div>
        <div className={styles.waveform__bar}></div>
        <div className={styles.waveform__bar}></div>
        <div className={styles.waveform__bar}></div>
      </div>
    </div>
  );
};
