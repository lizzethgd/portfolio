import '../assets/css/general.css'
import '../assets/css/about.css'
import { FaCloudDownloadAlt } from "react-icons/fa";
import profilePic from "../assets/images/profilepic.jpg";
import { useTranslation} from 'react-i18next';

const About = () =>{
  const { t } = useTranslation("global");

return(
<section id="about">
  <div className="row">
    <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
    </div>
    <div className="nine columns main-col">
        <h2>{t("about.me")}</h2>
        <p>{t("about.description")}</p>
      </div>
      <div className="columns download">
            <p>
            <button type="button" className="w3-button w3-red w3-margin-bottom">
              <FaCloudDownloadAlt/>&nbsp;{t("about.download")}
            </button>  
            </p>
      </div>
  </div>
</section>
)
}
export default About;
