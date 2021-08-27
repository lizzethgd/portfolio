import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Admin from './components/Admin';
import TestimonialsList from './components/TestimonialsList'
import ContactsList from './components/ContactsList'
import UsersList from './components/UsersList'
import UnPrivateRoute from './hocs/UnPrivateRoute';
import PrivateRoute from './hocs/PrivateRoute';
import NavAdmin from './components/NavAdmin'

const App = () => {
  
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route  path="/login" component={Login} />
    <NavAdmin />
      <Switch>
      <UnPrivateRoute  path="/admin" component={Admin} />
      <UnPrivateRoute  path="/testimonialsList" component={TestimonialsList} />
      <PrivateRoute path="/contactsList"  roles={["admin"]} component={ContactsList} />
      <PrivateRoute  path="/usersList" roles={["admin"]}  component={UsersList} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;

{/*  <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route  path="/login" component={Login} />
      <Route  path="/admin" component={Admin} />
      <Route  path="/testimonialsList" component={TestimonialsList} />
      <Route path="/contactsList"  component={ContactsList} />
      <Route  path="/usersList"  component={UsersList} />
    </BrowserRouter> 
  
  
  */}