import '../assets/css/footer.css'
import '../assets/css/general.css'
import SocialLinks from "./SocialLinks";
import { FaChevronCircleUp } from "react-icons/fa";
import { useTranslation} from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation("global");
  
  return(
  <footer >
    <div className="row">
      <div className="twelve columns">
        <SocialLinks />

        <ul className="copyright">
          <li>&copy; Copyright {new Date().getFullYear()}</li>
          <li>
          {t("footer.dev")} <a href="#home">Lizzeth Garcia</a>
          </li>
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
}
export default Footer;
