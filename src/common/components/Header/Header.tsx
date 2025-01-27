'use client'
import { useSelector, useDispatch } from 'react-redux';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { RootState } from '@/store';
import type { MovieState } from '@/common/types/movieTypes';
import { setSearchQuery } from '@/store/features/movieSlice';
import styles from '@/common/components/Header/Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const { favorites, searchQuery } = useSelector((state: RootState) => state.movie as MovieState);
  const isMoviesPage = pathname === '/movies';

  return (
    <header className={styles.header}>
      <div className={styles.headerActions}>
        <Link href="/movies" className={styles.logo}>
          Movies App
        </Link>
        {isMoviesPage && (
          <div className={styles.searchWrapper}>
            <input
              type="text"
              placeholder="What do you want to watch?"
              value={searchQuery}
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
              className={styles.searchInput}
            />
            <Image 
              src="/icons/search.svg" 
              alt="Search" 
              width={20} 
              height={20}
              className={styles.searchIcon}
            />
          </div>
        )}
        <div className={styles.favorites}>
          Favoriler <span className={styles.favCount}>{favorites.length}</span>
        </div>
      </div>
    </header>
  );
} 