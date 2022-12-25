import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import AboutInfo from '../../Pages/About/AboutInfo';
import Home from '../../Pages/Home/Home/Home';
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
                path: '/aboutinfo',
                element: <AboutInfo></AboutInfo>,
            },

        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

export default routes;