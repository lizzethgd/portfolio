import '../assets/css/footer.css'
import '../assets/css/general.css'
import SocialLinks from "./SocialLinks";
import { FaChevronCircleUp } from "react-icons/fa";
import { useTranslation} from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation("global");
  
  return(
  <footer>
    <div className="row w3-padding-48" >

    <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <FaChevronCircleUp />
        </a>
      </div>

      <div className="twelve columns">
        <SocialLinks />

        <ul className="copyright ">
          <li>&copy; Copyright {new Date().getFullYear()}</li>
          <li>
          {t("footer.dev")} <a className="name" href="#home">Lizzeth Garcia</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);
}
export default Footer;
