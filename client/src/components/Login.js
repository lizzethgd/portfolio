import {useState, useContext} from 'react'
import AuthService from '../services/AuthService';
import {AuthContext} from '../Context/AuthContext';
import { CgClose } from "react-icons/cg";
import { useHistory } from "react-router-dom";
import '../assets/css/login.scss'

const Login = props => {

    const [userLogin, setUserLogin] = useState({username: '', password: ''}) 
    const authContext = useContext(AuthContext);
    const [message,setMessage] = useState();

    const history = useHistory()  

    const handleChange = e => {
        e.preventDefault();
        setUserLogin({ ...userLogin, [e.target.name]: e.target.value })
      }

    const handleSubmitLogin =  (e) => {
        e.preventDefault();
            AuthService.logIn(userLogin).then(data=>{
                console.log(data);
                const { isAuthenticated,user} = data;
                if(isAuthenticated){
                    authContext.setUser(user);
                    authContext.setIsAuthenticated(isAuthenticated);
                    history.push('/admin');
                }
                else
                    setMessage('no auth');
            })
    }


    const handleSubmitSignup = e => {
        e.preventDefault();
      }   

     
    const signupShow = e => {
        e.preventDefault(); 
        let parent = e.target.parentNode.parentNode;
        let loginDiv = document.getElementById('login');
        Array.from(e.target.parentNode.parentNode.classList).find((element) => {
            if(element !== 'slide-up') {
                return parent.classList.add('slide-up')
            }else{
                loginDiv.parentNode.classList.add('slide-up')
                parent.classList.remove('slide-up')
            }
        });
    }
    
    const loginShow = e => {
        e.preventDefault();
        AuthService.logIn(userLogin).then(data=>{
            console.log(data);
            const { isAuthenticated,user} = data;
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                history.push('/admin');
           
        });
    }


    const onClouseFullSizeImage = () => {
        document.getElementById("log-container").style.display='none'
        history.push("/");
      }
  
    return (
         
<div id="log-container" className="w3-modal" style={{display: 'block'}}>
    <button className="w3-button w3-red w3-large  w3-display-topright" title="Close Modal Image" onClick={onClouseFullSizeImage} ><CgClose /></button>
    <div className="w3-modal-content w3-animate-zoom log-form-structor ">
   
        
        <div className="login ">
        {message ? <p>{message}</p>: null}
            <h2 className="log-form-title" id="login" onClick={e => loginShow(e)}><span>or</span>Log in </h2>
            <form onSubmit={handleSubmitLogin} target="_self">
                <div className="log-form-holder">
                    <input type="text" className="log-input" placeholder="Username" required name="username"  onChange={handleChange}/>
                    <input type="password" className="log-input" placeholder="Password" required name="password"  onChange={handleChange}/>
                </div>
                <button className="log-submit-btn"  type='submit'>Log in</button>
            </form> 
        </div>

        <div className="signup slide-up">
        {message ? <p>{message}</p>: null}
            <div className="log-center">
                <h2 className="log-form-title" id="signup" onClick={e => signupShow(e)}><span>or</span>Sign up</h2>
                <form onSubmit={handleSubmitSignup} target="_self">
                    <div className="log-form-holder">
                        <input type="text" className="log-input" placeholder="Username" required name="username" onChange={handleChange}/>
                        <input type="email" className="log-input" placeholder="Email" required name="email" onChange={handleChange}/>
                        <input type="password" className="log-input" placeholder="Password" required name="password" onChange={handleChange}/>
                    </div>
                    <button className="log-submit-btn"type='submit'>Sign up</button>
                </form>
            </div>
        </div>
        
    </div>
</div> 
    
    )
}

export default Login

