import React from 'react';
import { Link } from 'react-router-dom';

function Eachmovie(props) {
    return (
        <div className="col-md-4 mb-3 d-flex">
            <div className="card flex-fill">
                    <img
                        src={`http://127.0.0.1:8000${props.movie.movie_image}`}
                        className="card-img-top"
                        alt=""
                        style={{ objectFit: 'cover', height: '350px' }}
                    />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{props.movie.movie_name}</h5>
                    <p className="card-text">{props.movie.description}</p>
                    <Link to={"/shows/"+props.movie.id} className="btn btn-primary mt-auto stretched-link">Book Now</Link>
                </div>
            </div>
        </div>
    );
}

export default Eachmovie;

