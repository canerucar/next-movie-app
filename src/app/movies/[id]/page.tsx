'use client'
import { useEffect, useState, use } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { AppDispatch, RootState } from '@/store';
import { toggleFavorite } from '@/store/features/movieSlice';
import type { Movie, MovieState, MovieDetailProps } from '@/common/types/movieTypes';
import { movieService } from '@/common/services/movieService';
import { createMovieId } from '@/common/utils/movieHelpers';
import Header from '@/common/components/Header/Header';
import Footer from '@/common/components/Footer/Footer';
import styles from './page.module.css';

export default function MovieDetail({ params }: MovieDetailProps) {
  const resolvedParams = use(params);
  const dispatch = useDispatch<AppDispatch>();
  const { favorites } = useSelector((state: RootState) => state.movie as MovieState);
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const data = await movieService.getMovieById(resolvedParams.id);
        setMovie(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [resolvedParams.id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!movie) return <div>Movie not found</div>;

  const isFavorite = favorites.includes(createMovieId(movie));

  return (
    <div className={styles.detailPageWrapper}>
      <Header />
      <div className={styles.detailWrapper}>
        <div className={styles.detailHeader}>
          <h1>{movie.name}</h1>
        </div>

        <div className={styles.detailContent}>
          <div className={styles.imageSection}>
            <Image
              src={movie.coverDetail || movie.cover}
              alt={movie.name}
              width={400}
              height={600}
              priority
              className={styles.detailImage}
            />
            <button
              onClick={() => dispatch(toggleFavorite(movie))}
              className={`${styles.favoriteButton} ${isFavorite ? styles.favorited : ''}`}
            >
              ♥
            </button>
            {movie.isTvSeries && (
              <span className={styles.tvBadge}>TV Series</span>
            )}
          </div>

          <div className={styles.infoSection}>
            <div className={styles.summary}>
              <p>{movie.summary}</p>
            </div>

            <div style={{ 
              width: '100%', 
              height: '2px', 
              background: '#D9D9D9', 
              margin: '32px 0' 
            }} />

            <div className={styles.metaInfo}>
              <div className={styles.metaImdb}>
                <Image 
                  src="/icons/imdb.svg"
                  alt="IMDB"
                  width={35}
                  height={17}
                /> 
                <span>{movie.imdb} / 100</span>
              </div>
              <div className={styles.metaCategory}>
                <span>{movie.category}</span>
              </div>
              <div className={styles.metaCategory}>
                <span>{movie.country}, {movie.year}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 