export interface Movie {
  id: string;
  name: string;
  year: number;
  country: string;
  imdb: string;
  category: string;
  isTvSeries: boolean;
  cover: string;
  coverDetail: string;
  summary: string;
}

export interface MovieDetailProps {
  params: Promise<{
    id: string;
  }>;
}

export interface MovieState {
  movies: Movie[];
  favorites: string[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  sortBy: 'name' | 'year' | 'imdb' | null;
  filterByFavorites: boolean;
} 