import {createContext, useState, useEffect} from 'react';
import {getAuthentication} from '../services/AuthService';

export const AuthContext = createContext();

export default ({ children }) => {
 
    const [user,setUser] = useState({ username: "", role: "" });
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const [isLoaded,setIsLoaded] = useState(false);

   useEffect(()=>{
    getAuthentication().then(data =>{
        if (data.user) setUser(data.user);
        if (data.isAuthenticated) setIsAuthenticated(data.isAuthenticated)
        setIsLoaded(true);
        });
    },[]);
   

    console.log(user, isAuthenticated, isLoaded )

    return (
        <div>
            {isLoaded===false? <h1>Loading... </h1> : 
            <AuthContext.Provider value={{user, setUser, isAuthenticated, setIsAuthenticated}}>
                { children }
            </AuthContext.Provider>}
        </div>
    )
}


