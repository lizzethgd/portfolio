import '../assets/css/general.css'
import '../assets/css/about.css'
//import {useEffect, useState, useRef} from 'react'
import { FaCloudDownloadAlt, FaTools, FaGlobe } from "react-icons/fa";
import ProgressBar from './ProgressBar'
import '../assets/css/progressBar.css'
import profilePic from "../assets/images/profilepic.jpg";
import { useTranslation} from 'react-i18next';
import {Link } from 'react-router-dom';

const About = () =>{
  const { t } = useTranslation("global");

return(
<section id="about">
  <div className="row">
    <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
    </div>
    <div className="nine columns main-col">
        <h2>{t("nav.about")}</h2>
        <p>{t("about.description")}</p>
      </div>
      <div className="columns download">
            <p>
            <Link to="/files/LGcv.docx" target="_blank" download className="w3-button w3-red w3-margin-bottom"> 
              <FaCloudDownloadAlt/>&nbsp;&nbsp; {t("about.download")}
            </Link>
            </p>
      </div>
  </div>
  <div className="w3-content w3-container w3-padding-32" >
        <div className="w3-large w3-text-deep-orange"><FaTools/><b className="w3-margin-left">{t("about.skills")}</b></div><br/>
          <ProgressBar  start={20} stop={80} name='REACT' />
          <ProgressBar  start={20} stop={80} name='NODE' />
          <ProgressBar  start={20} stop={60} name='CSS' />
          <ProgressBar  start={20} stop={70} name='HTML' />
          

        <div className="w3-large w3-text-deep-orange"><FaGlobe/><b className="w3-margin-left">{t("about.langs.title")}</b></div><br/>
          
        <ProgressBar  start={20} stop={70} name={t("about.langs.fi")} />
        <ProgressBar  start={20} stop={60} name={t("about.langs.en")} />
        <ProgressBar  start={20} stop={30} name={t("about.langs.ge")} />
        <ProgressBar  start={20} stop={100} name={t("about.langs.sp")} />

  </div>
</section>
)
}
export default About;
