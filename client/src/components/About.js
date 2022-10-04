import '../assets/css/general.css'
import '../assets/css/about.css'
import { FaCloudDownloadAlt, FaTools, FaGlobe } from "react-icons/fa";
import ProgressBar from './ProgressBar'
import '../assets/css/progressBar.css'
import lagd from "../assets/images/lagd.jpg";
import { useTranslation} from 'react-i18next';
import {Link } from 'react-router-dom';

const About = () =>{

  const { t, i18n } = useTranslation("global");

return(
<section id="about">
  <div className="row">
    <div className="three columns">
        <img className="profile-pic" src={lagd} alt="" />
    </div>
    <div className="nine columns main-col">
        <h2>{t("nav.about")}</h2>
        <p>{t("about.description")}</p>
      </div>
      <div className="columns download">
            <p>
            <Link to={i18n.language=="fi" ? "/files/LGcv.pdf" : "/files/LGcvEn.pdf" } target="_blank" download className="w3-button w3-red w3-margin-bottom"> 
              <FaCloudDownloadAlt/>&nbsp;&nbsp; {t("about.download")}
            </Link>
            </p>
      </div>
  </div>
  <div className="w3-content w3-container w3-padding-32" >
        <div className="w3-large w3-text-deep-orange"><FaTools/><b className="w3-margin-left">{t("about.skills")}</b></div><br/>
          <ProgressBar percent={70} name='REACT' />
          <ProgressBar percent={70} name='NODE' />
          <ProgressBar percent={65} name='CSS' />
          <ProgressBar percent={70} name='HTML' />     

        <div className="w3-large w3-text-deep-orange"><FaGlobe/><b className="w3-margin-left">{t("about.langs.title")}</b></div><br/>
          <ProgressBar percent={70} name={t("about.langs.fi")} />      
        <ProgressBar  percent={60} name={t("about.langs.en")} />
        <ProgressBar  percent={35} name={t("about.langs.ge")} />
        <ProgressBar  percent={100} name={t("about.langs.sp")} />

  </div>
</section>
)
}
export default About;
