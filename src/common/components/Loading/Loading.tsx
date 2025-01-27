import styles from './loading.module.css';

export default function GlobalLoading() {
  return (
    <div className={styles.loadingContainer}>
      <span className={styles.loader}></span>
    </div>
  );
}