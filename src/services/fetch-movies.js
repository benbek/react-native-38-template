import mdbp from '../clients/tmdb-client';

class MoviesService {

  getMoviesByName(name) {
    return mdbp.searchMovie({ query: name });
  }
}

export default new MoviesService();