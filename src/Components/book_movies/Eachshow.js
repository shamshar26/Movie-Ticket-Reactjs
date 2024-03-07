import React from 'react';
import { Link } from 'react-router-dom';
import checkAuth from '../auth/checkAuth';

function Eachshow(props) {
    const showDate = new Date(props.show.show_date);
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const formattedDate = showDate.toLocaleDateString('en-US', options);
    return (
        <div className="col-md-4 mb-3 d-flex">
            <div className="card flex-fill">
                    <img
                        src={`http://127.0.0.1:8000${props.show.movie_image}`}
                        className="card-img-top"
                        alt={props.show.movie_name}
                        style={{ objectFit: 'cover', height: '350px' }}
                    />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{props.show.movie_name}</h5>
                    <p className="card-text">{formattedDate}</p>
                    <p className="card-text">{props.show.show_time}</p>
                    <Link to={`/bookshow/${props.show.id}/${encodeURIComponent(props.show.movie_name)}/${encodeURIComponent(props.show.show_date)}/${encodeURIComponent(props.show.show_time)}/${encodeURIComponent(props.show.movie_image)}`}
                    className="btn btn-primary mt-auto stretched-link">Book Show</Link>

                </div>
            </div>
        </div>
    );
}

export default checkAuth(Eachshow);