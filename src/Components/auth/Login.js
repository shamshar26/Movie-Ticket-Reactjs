import React from 'react';
import { useState } from 'react';
import Navbar from '../book_movies/Navbar';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setUser } from '../../Store/authSlice';
import { useNavigate } from 'react-router-dom';
import checkGuest from './checkGuest';

function Login(){
    var [username, setUsername] = useState('');
    var [password, setPassword] = useState('');
    var [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const navigate=useNavigate();
    function attemptLogin() {
        axios.post('http://127.0.0.1:8000/book_my_movies_api/login',{
            username:username,
            password:password
        }).then(response=>{
            setErrorMessage('')
            var user = {
                username:username,
                token:response.data.token,
            }
            dispatch(setUser(user));
    navigate("/");
        }).catch(error=>{
            if (error.response && error.response.status === 401) {
                setErrorMessage('Invalid username or password. Please try again.');
            } else if (error.response && error.response.data.errors) {
                setErrorMessage(Object.values(error.response.data.errors).join(' '));
            } else if (error.response && error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('Failed to login user. Please contact admin');
            }
        });
    }
    return(<>
        <Navbar />
        <br/>
        <br/>
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className='card text-white bg-secondary my-5 px-4'>
                        <h1>Login</h1>
                        {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}
                        <div className="form-group">
                            <label>Username:</label>
                            <input type="text"
                            className="form-control"
                            value={username}
                            onInput={(event)=>setUsername(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password"
                            className="form-control"
                            value={password}
                            onInput={(event)=>setPassword(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                        <button className="btn btn-success float-right" onClick={attemptLogin}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default checkGuest(Login);