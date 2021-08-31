import {useContext} from 'react';
import {Route, Redirect, useHistory } from 'react-router-dom';
import {AuthContext} from '../Context/AuthContext';

const UnPrivateRoute = ({component : Component,...rest})=>{
    const { isAuthenticated } = useContext(AuthContext);
    console.log(isAuthenticated)
    const history = useHistory()
    return(
        <Route {...rest} render={props =>{
            if(isAuthenticated) 
            return <Redirect to={{ pathname: '/admin', 
                                        state : {from : props.location}}}/>
        return <Component {...props}/>
        }}/>
    )
}

export default UnPrivateRoute;