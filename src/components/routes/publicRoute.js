import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    const auth = useSelector(state => state.authReducer)
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            auth && restricted ?
                <Redirect to="/dashboard" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;