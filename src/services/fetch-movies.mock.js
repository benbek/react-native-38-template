export default class MockMoviesService {

  getMoviesByName = async function(name) {};

  reset() {
    this.getMoviesByName = jest.fn();
  }

  addMoviesByNameReturn(value) {
    this.getMoviesByName.mockReturnValueOnce(value);
  }

}