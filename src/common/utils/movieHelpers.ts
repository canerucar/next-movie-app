import { Movie } from '@/common/types/movieTypes';

export const createMovieId = (movie: Movie): string => `${movie.name}-${movie.imdb}`;

export const sortMovies = (movies: Movie[], sortBy: 'name' | 'year' | 'imdb' | null): Movie[] => {
  if (!sortBy) return movies;

  return [...movies].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'year') return b.year - a.year;
    return parseFloat(b.imdb) - parseFloat(a.imdb);
  });
};

export const filterMovies = (
  movies: Movie[], 
  searchQuery: string, 
  favorites: string[], 
  filterByFavorites: boolean
): Movie[] => {
  return movies.filter(movie => {
    const matchesSearch = movie.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFavorites = filterByFavorites ? favorites.includes(createMovieId(movie)) : true;

    return matchesSearch && matchesFavorites;
  });
}; 