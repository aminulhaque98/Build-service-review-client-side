import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import AboutInfo from '../../Pages/About/AboutInfo';
import AllServices from '../../Pages/AllServices/AllServices';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login/Login';
import SignUp from '../../Pages/Login/SignUp/SignUp';
import NotFound from '../../Pages/NotFoundedPage/NotFound';
import Profile from '../../Pages/Profile/Profile';
import ServiceDetails from '../../Pages/ServiceDetails/ServiceDetails';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

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
                path: '/allservice',
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
            {
                path: '/signup',
                element: <SignUp></SignUp>,
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>,
            },
            {
                path: '/details/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },

        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

export default routes;