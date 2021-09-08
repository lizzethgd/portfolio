import '../assets/css/footer.css'
import '../assets/css/general.css'
import SocialLinks from "./SocialLinks";
import { FaChevronCircleUp } from "react-icons/fa";

const Footer = () => (
  <footer >
    <div className="row">
      <div className="twelve columns">
        <SocialLinks />

        <ul className="copyright">
          <li>&copy; Copyright {new Date().getFullYear()}</li>
          <li>
            Design by{" "}
            <a title="Styleshout" href="http://www.styleshout.com/"> 
            Styleshout
            </a>
          </li> <span>
            Developed in React ⚛️ by{" "}
            <a href="http://www.amanhimself.me">Lizzeth Garcia</a>
          </span>
        </ul>
      </div>

      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <FaChevronCircleUp />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
