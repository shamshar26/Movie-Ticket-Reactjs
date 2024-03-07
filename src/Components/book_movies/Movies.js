import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Eachmovie from './Eachmovie';

function Movies() {
    const [movies, setMovies] = useState([]);

    function fetchMovies() {
        axios.get('http://127.0.0.1:8000/book_my_movies_api/movies').then(response => {
            setMovies(response.data);
        });
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3>
                            <strong>Currently Playing</strong>
                        </h3>
                    </div>
                </div>
                <div className="row">
                    {movies.map(movie => (
                        <Eachmovie key={movie.id} movie={movie} refresh={fetchMovies} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Movies;
