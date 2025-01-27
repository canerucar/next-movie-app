import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Movie, MovieState } from '@/common/types/movieTypes';
import { movieService } from '@/common/services/movieService';
import { createMovieId } from '@/common/utils/movieHelpers';

const initialState: MovieState = {
  movies: [],
  favorites: [],
  loading: false,
  error: null,
  searchQuery: '',
  sortBy: null,
  filterByFavorites: false,
};

export const fetchMovies = createAsyncThunk(
  'movie/fetchMovies',
  async () => {
    return await movieService.getAllMovies();
  }
);

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Movie>) => {
      const uniqueId = createMovieId(action.payload);
      const index = state.favorites.indexOf(uniqueId);
      if (index === -1) {
        state.favorites.push(uniqueId);
      } else {
        state.favorites.splice(index, 1);
      }
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSortBy: (state, action: PayloadAction<'name' | 'year' | 'imdb' | null>) => {
      state.sortBy = action.payload;
    },
    setFilterByFavorites: (state, action: PayloadAction<boolean>) => {
      state.filterByFavorites = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<Movie[]>) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const { toggleFavorite, setSearchQuery, setSortBy, setFilterByFavorites } = movieSlice.actions;
export default movieSlice.reducer; 