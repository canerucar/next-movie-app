import styles from '@/common/components/Footer/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import FacebookIcon from '@public/social/facebook.svg';
import InstagramIcon from '@public/social/instagram.svg';
import TwitterIcon from '@public/social/twitter.svg';
import YoutubeIcon from '@public/social/youtube.svg';

export default function Footer() {
  return (
    <section className={styles.footerWrapper}>
      <div className={styles.footerContents}>
        <Link href="#">
          <Image src={FacebookIcon} alt="Facebook" />
        </Link>
        <Link href="#">
          <Image src={InstagramIcon} alt="Instagram" />
        </Link>
        <Link href="#">
          <Image src={TwitterIcon} alt="Twitter" />
        </Link>
        <Link href="#">
          <Image src={YoutubeIcon} alt="Youtube" />
        </Link>
      </div>
      <div className={styles.footerContentsText}>
        <p>Conditions of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>
      <div className={styles.footerBottomText}>
        <p>&copy; 2025 Movies by Octet</p>
      </div>
    </section>
  );
}