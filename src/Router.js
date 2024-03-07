import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./Components/auth/Login";
import Show from "./Components/book_movies/Show";
import Register from "./Components/auth/Register";
import Booking from "./Components/book_movies/Booking";
import Bookconfirmation from "./Components/book_movies/Bookconfirmation";
import Mybookings from "./Components/book_movies/Mybookings";


const Router=createBrowserRouter([
    {path: '/', element: <App />},
    {path: '/login', element: <Login />},
    {path: '/shows/:movieId', element:<Show />},
    {path: '/register', element: <Register />},
    {path: "/bookshow/:showId/:movieName/:showDate/:showTime/:movie_image", element:<Booking />},
    {path: '/bookshow/confirmation/:id', element: <Bookconfirmation /> },
    {path: '/mybookings', element: <Mybookings />},
])
export default Router;