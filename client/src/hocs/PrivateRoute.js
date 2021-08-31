import {useContext} from 'react';
import {Route, Redirect, useHistory } from 'react-router-dom';
import {AuthContext} from '../Context/AuthContext';

const PrivateRoute = ({component : Component, roles, ...rest})=>{
    const { isAuthenticated, user} = useContext(AuthContext);
      const history = useHistory() 
    return(
        <Route {...rest} render={props =>{
            if(!isAuthenticated)
                return <Redirect to={{ pathname: '/login', 
                                       state : {from : props.location}}}/>
            
            if(!roles.includes(user.role))
                return <Redirect to={{ pathname: '/', 
                                 state : {from : props.location}}}/>
        return <Component {...props}/>
        }}/>
    )
}

export default PrivateRoute;