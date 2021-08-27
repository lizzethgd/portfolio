import {useState} from 'react'
import {loginUser} from '../services/AuthService'
import { CgClose } from "react-icons/cg";
import { useHistory } from "react-router-dom";
import '../assets/css/login.scss'

const Login = () => {

    const [user, setUser] = useState({
        username: '',
        password: ''
      }) 

    const history = useHistory()  

    const handleChange = e => {
        e.preventDefault();
        setUser({ ...user, [e.target.name]: e.target.value })
      }

    const handleSubmitLogin = e => {
        e.preventDefault();
        console.log(user)
        loginUser(user)
        history.push("/admin");
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
        let parent = e.target.parentNode;
        let signupDiv = document.getElementById('signup');
        Array.from(e.target.parentNode.classList).find((element) => {
            if(element !== 'slide-up') {
                parent.classList.add('slide-up')
            }else{
                signupDiv.parentNode.parentNode.classList.add('slide-up')
                parent.classList.remove('slide-up')
            }
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
            <h2 className="log-form-title" id="login" onClick={e => loginShow(e)}><span>or</span>Log in </h2>
            <form onSubmit={handleSubmitLogin} target="_self">
                <div className="log-form-holder">
                    <input type="text" className="log-input" placeholder="Username" required name="username"  onChange={handleChange}/>
                    <input type="password" className="log-input" placeholder="Password" required name="password"  onChange={handleChange}/>
                </div>
                <button className="log-submit-btn"  onSubmit={handleSubmitLogin}>Log in</button>
            </form> 
        </div>

        <div className="signup slide-up">
            <div className="log-center">
                <h2 className="log-form-title" id="signup" onClick={e => signupShow(e)}><span>or</span>Sign up</h2>
                <form onSubmit={handleSubmitSignup} target="_self">
                    <div className="log-form-holder">
                        <input type="text" className="log-input" placeholder="Username" required name="username" onChange={handleChange}/>
                        <input type="email" className="log-input" placeholder="Email" required name="email" onChange={handleChange}/>
                        <input type="password" className="log-input" placeholder="Password" required name="password" onChange={handleChange}/>
                    </div>
                    <button className="log-submit-btn" onSubmit={handleSubmitSignup}>Sign up</button>
                </form>
            </div>
        </div>
        
    </div>
</div> 
    
    )
}

export default Login