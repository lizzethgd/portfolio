import {useContext} from 'react';
import {Route, useHistory } from 'react-router-dom';
import {AuthContext} from '../Context/AuthContext';

const UnPrivateRoute = ({component : Component,...rest})=>{
    const { isAuthenticated } = useContext(AuthContext);
    console.log(isAuthenticated)
    const history = useHistory()
    return(
        <Route {...rest} render={props =>{
            if (isAuthenticated===false) { history.push("/login") }
        return <Component {...props}/>
        }}/>
    )
}

export default UnPrivateRoute;