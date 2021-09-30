import { useTranslation} from 'react-i18next'; import { GiTiedScroll, GiBriefcase, GiBrain } from "react-icons/gi";
import { MdSchool, MdWork } from "react-icons/md";
import { FaClipboardList, FaBriefcase, FaBlackTie } from "react-icons/fa"; 
import TimelineResume from './TimelineResume';
//import image from "../assets/images/parallax4.jpg"


const Resume = () => {

    const Parallax = {
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    const { t } = useTranslation("global");    

return (
<section id="resume" className="w3-light-grey">
    <div className="bgimg-1 w3-display-container " style={Parallax}>
        <div className="w3-display-middle">
            <span className="w3-xxlarge w3-text-white w3-wide">{t("nav.resume")}</span>
        </div>
    </div>

   <div className="w3-content w3-container w3-padding-16" >

   <TimelineResume/>

    <div className="w3-large w3-text-deep-orange"><GiTiedScroll/><b className="w3-margin-left">{t("resume.education")}</b></div><br/>
 
    <div className="w3-large w3-text-deep-orange"><FaBriefcase/><b className="w3-margin-left">{t("resume.experience")}</b></div><br/>

   </div> 

</section> 
)
}

export default Resume
