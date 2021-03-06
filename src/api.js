const $ = require ('jQuery');

const movie = {

    // ADD MOVIE POST



    addMovie: (e) => {
        e.preventDefault();
        let movieTitle = $('#add-movie').val();
        let movieRating = $('#movie-rating').val();
        const movieData = {title: movieTitle, rating: movieRating};
        const url = '/api/movies';
        const addMovie = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(movieData),
            };

        return fetch(url, addMovie)
            .then(() => {
            })
            .catch(/* handle errors */);
    },



    // EDIT MOVIE
    editMovie: (j) => {
        j.preventDefault();
        let editTitle = $('#title-edit').val();
        let editRating = $('#edit-movie-rating').val();
        let movie_id = $('#movie-id').val();
        const editData = {title: editTitle, rating: editRating};
        const url = `/api/movies/${movie_id}`;
        const addMovieEdit = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editData),
        };

        return fetch(url, addMovieEdit)
            .then(() => {
            })
            .catch(/* handle errors */);
    },


// DELETE MOVIE

    // EDIT MOVIE
    deleteMovie: (delete_id) => {

        const url = `/api/movies/${delete_id}`;
        const deleteMovies = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify(deleteData),
        };

        return fetch(url, deleteMovies)
            .then(() => {
            })
            .catch(/* handle errors */);
    },




    //Get movie


    movieListing: () => {
        fetch('/api/movies', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                let movieTitle = '';
                let html = '';
                data.forEach((movies) => {
                    html += (`<div class="card text-center ml-5" style="height: 30rem; width: 18rem;">
                                <div class="card-header">
                                     </div>
                                    <h2 class="mt-3 mb-2">${movies.title}</h2>
                                    <h5 class="mb-3">Rating: ${movies.rating}</h5> 
                                     
                                    <div>
                                    <button data-id=${movies.id} class="movie_edit btn btn-primary btn-sm mx-0 mb-2" style="width: 6rem;" >edit</button>
                                    <button data-id=${movies.id} class="delete_movie btn btn-primary btn-sm mx-0 mb-2" style="width: 6rem;">delete</button>
                                    </div>
                                </div>
                    `);

                    movieTitle = `${movies.title}`
                });
                // add movie
                $('#movie-list').html(html);

                // edit movie
                $('.movie_edit').click(function () {
                    let movie_id = $(this).attr("data-id");
                    console.log(movie_id);
                    $('#movie-id').val(movie_id);
                });
                // delete movie
                $('.delete_movie').click(function () {
                    let delete_id = $(this).attr('data-id');
                    console.log(delete_id);
                    movie.deleteMovie(delete_id);
                    movie.movieListing();
                });

            })
            .catch(error => console.error(error));
    }
};

module.exports = movie;



// load movies into choose movie dropdown


//get from value from edit inputs on form
//target and store .val() of inputs in variable
// javascript code should make an ajax request when the form is submitted
