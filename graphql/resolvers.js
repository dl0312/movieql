import { getMovies, getMovie, getSuggestions, getGenreMovies } from "./db";

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id),
    genres: (_, { genres, limit }) => getGenresMovies(limit, genres)
  }
};

export default resolvers;
