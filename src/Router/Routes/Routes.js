import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import AboutInfo from '../../Pages/About/AboutInfo';
import AddService from '../../Pages/AddService/AddService';
import AllServices from '../../Pages/AllServices/AllServices';
import Blog from '../../Pages/Blog/Blog';
import FQA from '../../Pages/FQA/FQA';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login/Login';
import SignUp from '../../Pages/Login/SignUp/SignUp';
import NotFound from '../../Pages/NotFoundedPage/NotFound';
import Profile from '../../Pages/Profile/Profile';
import Reviews from '../../Pages/Reviews/Reviews';
import ServiceDetails from '../../Pages/ServiceDetails/ServiceDetails';
import UpdateUser from '../../Pages/UpdateUser/UpdateUser';
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
                path: '/services',
                element: <AllServices></AllServices>,
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>,
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
                loader: ({ params }) => fetch(`https://service-review-server-side-three.vercel.app/services/${params.id}`)
            },

            {
                path: '/review',
                element: <PrivateRoute><Reviews></Reviews></PrivateRoute>,

            },
            {
                path: '/update/:id',
                element: <PrivateRoute> <UpdateUser></UpdateUser></PrivateRoute>,
                loader: ({ params }) => fetch(`https://service-review-server-side-three.vercel.app/reviews/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/fqa',
                element: <FQA></FQA>,
            },

        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

export default routes;