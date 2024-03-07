import React from 'react';
import bookmymovieImage from '../../Images/bookmymovie.jpg'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import { removeUser } from '../../Store/authSlice';

function Navbar(){
  var user=useSelector(store=>store.auth.user);
  console.log(user)
  const dispatch=useDispatch();
  const navigate=useNavigate();
  function logout(){
    const headers = {
      'Authorization': `Token ${user.token}`
    }
    if(user){
      axios.post('http://127.0.0.1:8000/book_my_movies_api/logout',{},{headers});
      dispatch(removeUser());
      navigate('/login');
    }
  };
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
        <img src={bookmymovieImage} width="60" height="60" alt=""/></Link>
    <button className="navbar-toggler"
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
  {user?
        <><li className="nav-item">
          <Link className="nav-link" to='/mybookings'>My Bookings</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" onClick={logout}>Logout</Link>
        </li></>:
        <><li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li></>
      } 
      </ul>
    </div>
  </nav>
};
export default Navbar;