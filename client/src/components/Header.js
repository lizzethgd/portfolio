import '../assets/css/header.css'
import '../assets/css/general.css'
//import {useState, useEffect} from "react";
import Navigation from "./Navigation";
import Banner from "./Banner";
import ScrollDown from "./ScrollDown";

const Header = () => {

    
  const [data, setData] = useState(null)

 /*  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message))
  }, []); */

  return (
  <header id="home">
    <Navigation />
   {/*  <p>{!data ? "Loading..." : data}</p> */}
    <Banner />
    <ScrollDown />
  </header>
)

}

export default Header;
