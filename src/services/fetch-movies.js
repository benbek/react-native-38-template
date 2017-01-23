import mdbp from '../clients/tmdb-client';

class MoviesService {

  async getMoviesByName(name) {
    const pagedMovieResults = await mdbp.searchMovie({ query: name });
    const movieList = pagedMovieResults.results.map(result => {
      return {
        title: result.title,
        posterPath: `${mdbp.BASE_IMAGE_URL}/w92${result.poster_path}`,
        releaseDate: result.release_date
      };
    });

    return movieList;
  }
}

export default new MoviesService();