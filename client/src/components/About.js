import '../assets/css/general.css'
import '../assets/css/about.css'
import { FaCloudDownloadAlt, FaTools, FaGlobe } from "react-icons/fa";

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
              <FaCloudDownloadAlt/>&nbsp;&nbsp; {t("about.download")}
            </button>  
            </p>
      </div>
  </div>
  <div className="w3-content w3-container w3-padding-32 " >
        <p className="w3-large w3-text-teal"><FaTools/><b className="w3-margin-left">Skills</b></p><br/>
          <p>Adobe Photoshop</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:'90%'}}>90%</div>
          </div>
          <p>Photography</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:'80%'}}>
              <div className="w3-center w3-text-white">80%</div>
            </div>
          </div>
          <p>Illustrator</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:'75%'}}>75%</div>
          </div>
          <p>Media</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:'50%'}}>50%</div>
          </div>
          <br/>  <br/>  

        <p className="w3-large w3-text-teal"><FaGlobe/><b className="w3-margin-left">Languages</b></p>
          <br/>
          <p>English</p>
          <div className="w3-light-grey w3-round-xlarge">
            <div className="w3-round-xlarge w3-teal" style={{height:'24px', width:'100%'}}></div>
          </div>
          <p>Spanish</p>
          <div className="w3-light-grey w3-round-xlarge">
            <div className="w3-round-xlarge w3-teal" style={{height:'24px', width:'55%'}}></div>
          </div>
          <p>German</p>
          <div className="w3-light-grey w3-round-xlarge">
            <div className="w3-round-xlarge w3-teal" style={{height: '24px', width:'25%'}}></div>
          </div>
  </div>
</section>
)
}
export default About;
