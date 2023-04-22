import React from 'react';
import {createBrowserRouter} from "react-router-dom"
import Movies from "./pages/Movies";
import News from "./pages/News";
import MovieDetail from "./pages/MovieDetail";

const Router = createBrowserRouter([
    {
        path : "/",
        element : <Movies />
    },
    {
        path: "/news",
        element: <News />
    },
    {
        path: "/movies/:moviesid",
        element: <MovieDetail />
    }
])

export default Router;