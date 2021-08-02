import '../assets/css/header.css'
import '../assets/css/general.css'
import Navigation from "./Navigation";
import Banner from "./Banner";
import ScrollDown from "./ScrollDown";

const Header = () => (
  <header id="home">
    <Navigation />
    <Banner />
    <ScrollDown />
  </header>
);

export default Header;
