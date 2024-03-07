import React, { useState,useEffect } from 'react';
import Navbar from "./Navbar";
import axios from 'axios';
import Eachshow from './Eachshow';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import checkAuth from '../auth/checkAuth';


function Show(){
    const {movieId} = useParams();
    var[shows,setShows]=useState([]);
    var navigate=useNavigate();
    var user = useSelector(store=>store.auth.user);
    function fetchShows(){
        if (!user || !user.token) {
            return (
                navigate('/login')
            )
        }
        const headers = {
            'Authorization': `Token ${user.token}`
        };
        axios.get('http://127.0.0.1:8000/book_my_movies_api/shows/'+movieId,{headers})
        .then(response=>{
            setShows(response.data)
        })
    };
    useEffect(()=>{
        fetchShows()
    },[]);
    return(
        <><Navbar/>
        <br/>
        <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3><strong>Available shows</strong></h3>
                    </div>
                </div>
                <div className="row">
                    {shows.map(show => (
                        <Eachshow key={show.id} show={show} refresh={fetchShows} />
                    ))}
                </div>
            </div>
        </>
    )
}
export default checkAuth(Show);