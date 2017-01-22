var MovieDB = require('moviedb');
var endpoints = require('moviedb/lib/endpoints.json');
var limits = require('limits.js');

// rate limiting
var queue = limits();
queue.within(1000, 4);

function MovieDBP(api_key, base_url) {
  this.moviedb = MovieDB(api_key, base_url);
  return this;
}

Object.keys(endpoints.methods).forEach(function(method) {
  var met = endpoints.methods[method];
  Object.keys(met).forEach(function(m) {
    MovieDBP.prototype[method + m] = function(params) {
      var self = this;
      if (typeof params == "function") {
        params = {};
      }

      return new Promise(function(resolve, reject) {
        queue.push(function() {
          self.moviedb[method + m](params, function(err, res) {
            if (err) return reject(err);
            resolve(res);
          });
        });
      });
    };
  });
});

module.exports = function(api_key, base_url) {
  return new MovieDBP(api_key, base_url);
};