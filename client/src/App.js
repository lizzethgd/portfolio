import logo from './logo.svg';
import {useState, useEffect} from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';

const App = () => {
  
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message))
  }, []); 

  return (
    <BrowserRouter>
      <p>{!data ? "Loading..." : data}</p> 
      <Route exact path="/" component={Home} />
      </BrowserRouter>
  )
}

export default App;
