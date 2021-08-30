import {useState,useContext,useEffect} from 'react';
import NavAdmin from "./NavAdmin"
import { AuthContext } from '../Context/AuthContext';
import AuthService from '../services/AuthService';

const Admin = props => {


  /*   useEffect(async()=>{
        const res =  AuthService.getAdmin()
        const data = await res.json();
         return data;
        }
    ,[]); */

    return (
       <>
    
      <div className="w3-container w3-text-white"  style={{padding:"64px"}}>Bienvenid@</div>
       </>
    )
}

export default Admin
