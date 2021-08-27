import {createContext, useState, useEffect, useCallback} from 'react';
import {getAuthentication} from '../services/AuthService';

export const AuthContext = createContext();

export default ({ children }) => {
 
    const [user,setUser] = useState(null);
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const [isLoaded,setIsLoaded] = useState(false);

    const getData = useCallback(() => { 
    const fetchData = async () => {
        await getAuthentication().then(data =>{
         setUser(data.user)
        console.log(data.user)
        setIsAuthenticated(data.isAuthenticated); 
        console.log(data.isAuthenticated)
        setIsLoaded(true);
        console.log(isLoaded)
     })
    }
    fetchData()
    }, [])
    
    useEffect(()=>{ 
        getData()
    },[getData]);

    return (
        <div>
            {isLoaded!==true? <h1>Loading... </h1> : 
            <AuthContext.Provider value={{user, setUser, isAuthenticated, setIsAuthenticated}}>
                { children }
            </AuthContext.Provider>}
        </div>
    )
}

/* const [data, setData ] = useState({
    user : {},
    isAuthenticated: false,
    isLoaded: false
}); 

const {user, isAuthenticated, isLoaded} = data */