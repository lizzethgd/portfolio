import {useContext} from 'react'
import {useHistory, NavLink } from "react-router-dom";
import {logOut} from '../services/AuthService'
import {AuthContext} from '../Context/AuthContext';

const NavAdmin = props => {

  const {isAuthenticated,user,setIsAuthenticated,setUser} = useContext(AuthContext);

  const history = useHistory()  
  
  const onClickLogoutHandler = async ()=>{
   await logOut().then(data=>{
      console.log(data)
        if(data.success){
            setUser(data.user);
            setIsAuthenticated(false);
        }
    });
    history.push('/')
    }

   /*  const logOut = () => {
      onClickLogoutHandler()
      history.push('/')
    } */
  
  let mySidebar = document.getElementById("mySidebar");

  const openMenu = () => {
    if (mySidebar.style.display === 'block') {
      mySidebar.style.display = 'none';
    } else {
      mySidebar.style.display = 'block';
    }
  }
  
  // Close the sidebar with the close button
  const closeMenu = () => {
      mySidebar.style.display = "none"
  }

  const adminNavLinksTop = (
    <>
    <NavLink to="/contactsList" className="w3-bar-item w3-button">Contacts</NavLink>
    <NavLink to="/usersList" className="w3-bar-item w3-button">Users</NavLink>
    </>
  )

  const adminNavLinksSideBar = (
    <>
    <NavLink to="/contactsList" onClick={closeMenu} className="w3-bar-item w3-button">Contacts</NavLink>
  <NavLink to="/usersList" onClick={closeMenu} className="w3-bar-item w3-button">Users</NavLink>
    </>
  )

 const topNavBar = (
  <div className="w3-top">
    <div className="w3-bar w3-white w3-wide w3-padding w3-card" id="myNavbar">
      <NavLink to="/admin" className="w3-bar-item w3-button">Lizzeth<b>GD</b></NavLink>
      <div className="w3-left w3-hide-small">
        <NavLink to="/testimonialsList" className="w3-bar-item w3-button">Testimonials</NavLink>       
        { (user===undefined || user.role !== "admin")  ? null  : adminNavLinksTop }
      </div>
      <div className="w3-right w3-hide-small">
        <div className="w3-bar-item w3-button" onClick={onClickLogoutHandler}>LogOut</div>
      </div>
      <div className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onClick={openMenu}>
        <i className="fa fa-bars"></i>
      </div>
    </div>
  </div>
  )

  const sideNavBar = (
  <nav className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" style={{display: 'none'}} id="mySidebar">
    <button onClick={closeMenu} className="w3-bar-item w3-button w3-large w3-padding-16">Close ×</button>
    <NavLink to="/testimonialsList" onClick={closeMenu} className="w3-bar-item w3-button">Testimonials</NavLink>
    { (user===undefined  || user.role !== "admin") ?  null : adminNavLinksSideBar }
    <button onClick={onClickLogoutHandler} className="w3-bar-item w3-button w3-large w3-padding-16">LogOut</button>
  </nav>
  )

return (
  <>
  { (isAuthenticated === false ) ?  null : topNavBar }
  { (isAuthenticated === false  ) ?  null : sideNavBar }
  </>
 )}


export default NavAdmin;

/* {
  <div className="w3-top">
  <div className="w3-bar w3-white w3-wide w3-padding w3-card" id="myNavbar">
  <NavLink to="/admin" className="w3-bar-item w3-button">Lizzeth<b>GD</b></NavLink>
      <div className="w3-left w3-hide-small">
        <NavLink to="/testimonialsList" className="w3-bar-item w3-button">Testimonials</NavLink>       
        { (user.role === "admin" ) ?  adminNavLinksTop : null }
      </div>
      <div className="w3-right w3-hide-small">
        <div className="w3-bar-item w3-button" onClick={onClickLogoutHandler}>LogOut</div>
      </div>
      <div className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onClick={openMenu}>
        <i className="fa fa-bars"></i>
      </div>
  </div>
</div>

<nav className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" style={{display: 'none'}} id="mySidebar">
  <button onClick={closeMenu} className="w3-bar-item w3-button w3-large w3-padding-16">Close ×</button>
  <NavLink to="/testimonialsList" onClick={closeMenu} className="w3-bar-item w3-button">Testimonials</NavLink>
  { (user.role === "admin" ) ?  adminNavLinksSideBar : null }
</nav>
}

const logout = () => {
    logoutUser()
    history.push("/");
  }
*/