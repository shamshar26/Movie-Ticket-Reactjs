import React from 'react';
import { useState } from 'react';
import Navbar from '../book_movies/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Register() {
    var [username, setUsername] = useState('');
    var [email, setEmail] = useState('');
    var [password, setPassword] = useState('');
    var [passwordConf, setPasswordConf] = useState('');
    var [errorMessage, setErrorMessage] = useState('');
    var navigate = useNavigate();
    function registerUser(){
        var user = {
            username: username,
            email: email,
            password: password,
            confirm_password: passwordConf
        }
        axios.post('http://127.0.0.1:8000/book_my_movies_api/register',user).then(response=>{
            setErrorMessage('');
            navigate('/login');
        }).catch(error=>{
            if (error.response) {
                // The request was made and the server responded with a status code
                if (error.response.status === 400) {
                    setErrorMessage(Object.values(error.response.data).join(' '));
                } else {
                    setErrorMessage('Failed to connect to API');
                }
            } else if (error.request) {
                // The request was made but no response was received
                setErrorMessage('No response from the server. Please try again later.');
            } else {
                // Something happened in setting up the request that triggered an Error
                setErrorMessage('An unexpected error occurred. Please try again.');
            }
        })
    }
    return(<div>
        <Navbar />
        <br/>
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className='card text-white bg-secondary m-3 px-5'>
                        <h1>Register</h1>
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
                            <label>Email:</label>
                            <input type="text"
                            className="form-control"
                            value={email}
                            onInput={(event)=>setEmail(event.target.value)}
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
                            <label>Confirm Password:</label>
                            <input type="password"
                            className="form-control"
                            value={passwordConf}
                            onInput={(event)=>setPasswordConf(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-success float-right" onClick={registerUser}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Register;