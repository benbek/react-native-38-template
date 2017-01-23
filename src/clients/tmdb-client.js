const mdbp = require('./tmdb-promise.js')('5744f2873eac61f2f09b42038c398c85');

mdbp.BASE_IMAGE_URL = 'https://image.tmdb.org/t/p';

export default mdbp;