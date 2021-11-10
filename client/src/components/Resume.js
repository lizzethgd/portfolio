import { useTranslation} from 'react-i18next'; 
import TimelineResume from './TimelineResume';


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

   <div className="w3-content w3-container w3-padding-small" >
    <TimelineResume/>
    <br/>
   </div> 

</section> 
)
}

export default Resume
