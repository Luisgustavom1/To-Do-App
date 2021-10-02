import React, { useContext } from 'react'
import { Redirect, Route } from "react-router-dom";
import PropTypes from 'prop-types'
import AppContext from '../context/appContext';

export default function MyRoute({component: Component, isClosed, ...rest}){
    const { isLoggedIn } = useContext(AppContext)
    if(isClosed && !isLoggedIn){
        return(
            <Redirect 
                to={{ pathname: '/', state: { prevPath: rest.location.pathname } }} 
            />
        )
    }
    return <Route {...rest} component={Component}/>
};

MyRoute.defaultProps = {
    isClosed: false,
};

MyRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
        .isRequired,
    isClosed: PropTypes.bool
};