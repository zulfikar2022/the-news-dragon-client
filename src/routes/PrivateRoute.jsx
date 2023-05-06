/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log('user in private route ',user );

    if(loading){
        return  <Spinner animation="border" variant="danger" />
    }


    if(user) {
        return children;
    }
    return <Navigate to={'/login'} state={{from:location}} replace ></Navigate>
};

export default PrivateRoute;




/*
 *-------------------- 
 *      STEPS
 * -------------------
 * 1. check user is logged in or not 
 * 2.if user is logged in, then allow then to visit the route
 * 3.else redirect the user to the log in page.
 * 4.setup the private router
 * 5.handle loading
 * 
 */