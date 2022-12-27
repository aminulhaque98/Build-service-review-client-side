import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import AboutInfo from '../../Pages/About/AboutInfo';
import AllServices from '../../Pages/AllServices/AllServices';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login/Login';
import NotFound from '../../Pages/NotFoundedPage/NotFound';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allservices',
                element: <AllServices></AllServices>,
            },
            {
                path: '/aboutinfo',
                element: <AboutInfo></AboutInfo>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },

        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

export default routes;