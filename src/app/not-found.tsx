import Link from 'next/link';
import styles from '@/common/styles/not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.notFoundtitle}>404 - Sayfa Bulunamadı</h1>
      <p className={styles.notFoundmessage}>Aradığınız sayfa mevcut değil.</p>
      <Link href="/" className={styles.notFoundlink}>Ana Sayfaya Dön</Link>
    </div>
  );
}