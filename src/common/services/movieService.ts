import axios from 'axios';
import { Movie } from '@/common/types/movieTypes';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error('API_URL is not defined in environment variables');
}

export const movieService = {
  async getAllMovies(): Promise<Movie[]> {
    const response = await axios.get(`${API_URL}/movies`);
    return response.data;
  },

  async getMovieById(id: string): Promise<Movie> {
    const response = await axios.get(`${API_URL}/movies`);
    const movie = response.data.find((movie: Movie) => movie.id === id);
    
    if (!movie) {
      throw new Error('Movie not found');
    }
    
    return movie;
  }
}; 