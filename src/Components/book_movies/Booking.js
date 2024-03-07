import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import checkAuth from "../auth/checkAuth";

function Booking() {
  const { showId, movieName, showDate, showTime,movie_image} = useParams();
  const navigate = useNavigate();
  var [numberOfTickets, setNumberOfTickets] = useState(1);
  const [loading, setLoading] = useState(false);
  const user = useSelector((store) => store.auth.user);
  const headers = user ? { Authorization: `Token ${user.token}` } : {};
  

  const handleInputChange = (e) => {
    setNumberOfTickets(e.target.value);
  };

  function bookTicket() {
    setLoading(true);
    axios
      .post(`http://127.0.0.1:8000/book_my_movies_api/booking/${showId}`,
      {number_of_tickets:numberOfTickets},{ headers })
      .then((response) => {
        const booking_id = response.data.id;
        navigate(`/bookshow/confirmation/${booking_id}`);
      })
      .catch((error) => {
        console.error("Error booking ticket:", error);
      })
      .finally(() => {
        setLoading(false); // Reset loading regardless of success or failure
      })
  };

  return (<>
    <Navbar />
    <div className="text-center">
      <h2>Book Your Tickets</h2>
      <div className="card mx-auto" style={{width: "18rem"}}>
        <img className="card-img-top" src={`http://127.0.0.1:8000/${movie_image}`} alt={movieName} style={{height:'200px'}} />
        <div className="card-body">
          <h5 className="card-title">{movieName}</h5>
          <p className="card-text">{showDate}</p>
          <p className="card-text">{showTime}</p>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Number of Tickets</label>
            <select className="form-control" id="exampleFormControlSelect1" onChange={handleInputChange}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        {loading ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>) :
            (<button className="card-link btn btn-primary" onClick={bookTicket}>
              Book
            </button>)}
    </div>
  </div>
 </>   
  );
}

export default checkAuth(Booking);
