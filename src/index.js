const $ = require ('jQuery');

const movie = require('./api');

movie.movieListing();

$('#add-movie-btn').click(movie.addMovie);
