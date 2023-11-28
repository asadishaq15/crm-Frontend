// PrivateRoute component
import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import DefaultLayout from '../../layout/defaultLayout';



const PrivateRoute = () => {
    const auth = true; // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <DefaultLayout>{<Outlet /> }</DefaultLayout>: <Navigate to="/" />;
}

export default PrivateRoute;
