'use client'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import { AppDispatch, RootState } from '@/store';
import { fetchMovies, toggleFavorite, setSortBy, setFilterByFavorites } from '@/store/features/movieSlice';
import type { MovieState } from '@/common/types/movieTypes';
import { filterMovies, sortMovies, createMovieId } from '@/common/utils/movieHelpers';
import Header from '@/common/components/Header/Header';
import Footer from '@/common/components/Footer/Footer';
import styles from './page.module.css';
import Select from '@/common/components/Select/Select';
import Checkbox from '@/common/components/Checkbox/Checkbox';

const sortOptions = [
  { value: 'name', label: 'Film Adı' },
  { value: 'year', label: 'Yayın Yılı' },
  { value: 'imdb', label: 'Imdb Puanı' }
];

export default function Movies() {
  const dispatch = useDispatch<AppDispatch>();
  const { 
    movies, 
    favorites, 
    error, 
    searchQuery, 
    sortBy, 
    filterByFavorites 
  } = useSelector((state: RootState) => state.movie as MovieState);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const filteredMovies = sortMovies(
    filterMovies(movies, searchQuery, favorites, filterByFavorites),
    sortBy
  );

  return (
    <div className={styles.moviesPageWrapper}>
      <Header />
      {error ? (
        <div className={styles.errorMessage}>Error: {error}</div>
      ) : (
        <div className={styles.moviesWrapper}>
          <div className={styles.filterActions}>
          <Select
              value={sortBy || ''}
              onChange={(value) => dispatch(setSortBy(value as any))}
              options={sortOptions}
              placeholder="Sırala"
              className={styles.sortSelect}
            />
            <label className={styles.filterLabel}>
            <Checkbox
              checked={filterByFavorites}
              onChange={(checked) => dispatch(setFilterByFavorites(checked))}
              label={`Show Favorites (${favorites.length})`}
              className={styles.filterLabel}
            />
            </label>
          </div>

          <div className={styles.moviesGrid}>
            {filterByFavorites && filteredMovies.length === 0 ? (
              <div className={styles.noFavorites}>
                <p>Henüz favorilere film eklemediniz.</p>
              </div>
            ) : (
              filteredMovies.map((movie) => (
                <div key={createMovieId(movie)} className={styles.movieCard}>
                  <Link href={`/movies/${movie.imdb}`}>
                    <Image
                      src={movie.cover}
                      alt={movie.name}
                      width={200}
                      height={300}
                      priority={filteredMovies.indexOf(movie) < 4}
                      className={styles.movieImage}
                    />
                  </Link>
                  {movie.isTvSeries && (
                    <span className={styles.tvBadge}>TV Series</span>
                  )}
                  <button
                    onClick={() => dispatch(toggleFavorite(movie))}
                    className={`${styles.favoriteButton} ${
                      favorites.includes(createMovieId(movie)) ? styles.favorited : ''
                    }`}
                  >
                    ♥
                  </button>
                  <div className={styles.movieInfo}>
                    <span>{movie.country}, {movie.year} {movie.isTvSeries ? 'Current' : ''}</span>
                    <h3>{movie.name}</h3>
                    <div className={styles.movieMeta}>
                      <span className={styles.imdb}>
                        <Image 
                          src="/icons/imdb.svg"
                          alt="IMDB"
                          width={35}
                          height={17}
                        /> 
                        {movie.imdb}
                      </span>
                    </div>
                    <span>{movie.category}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
} 