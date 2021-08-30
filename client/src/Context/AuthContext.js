import {createContext, useState, useEffect} from 'react';
import AuthService from '../services/AuthService';

export const AuthContext = createContext();

export default ({ children }) => {
 
    const [user,setUser] = useState({});
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const [isLoaded,setIsLoaded] = useState(false);

   useEffect(()=>{
    AuthService.getAuthentication().then(data =>{
            setUser(data.user);
           setIsAuthenticated(data.isAuthenticated);
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

/* const [data, setData ] = useState({
    user : {},
    isAuthenticated: false,
    isLoaded: false
}); 

const {user, isAuthenticated, isLoaded} = data 

    const getData = useCallback(() => { 
        const fetchData = async () => {
            await getAuthentication().then(data =>{
                setUser(data.user);
                setIsAuthenticated(data.isAuthenticated);
                setIsLoaded(true);
        });
    }
    fetchData()
    }, [])

 useEffect(()=>{ 
        getData()
    },[getData]);
    */