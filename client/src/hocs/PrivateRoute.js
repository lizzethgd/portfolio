import {useContext} from 'react';
import {Route, useHistory } from 'react-router-dom';
import {AuthContext} from '../Context/AuthContext';

const PrivateRoute = ({component : Component, roles, ...rest})=>{
    const {user, isAuthenticated} = useContext(AuthContext);
    console.log(roles)
    const history = useHistory()
  
    return(
        <Route {...rest} render={props =>{ 
            
            if (isAuthenticated===false)  {history.push("/login") }
        
             if (roles!==user.role) { history.goBack()}
        
        return <Component {...props}/>
        }}/>
    )
}

export default PrivateRoute;