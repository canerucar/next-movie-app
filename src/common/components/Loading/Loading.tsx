import styles from '@/common/components/Loading/Loading.module.css';

export default function GlobalLoading() {
  return (
    <div className={styles.loadingContainer}>
      <span className={styles.loader}></span>
    </div>
  );
}