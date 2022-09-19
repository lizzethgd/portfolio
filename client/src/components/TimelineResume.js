import '../assets/css/timeline.scss'
import { useTranslation} from 'react-i18next'; 
import {useEffect} from 'react'
import { FaUniversity, FaLaptopCode, FaUserGraduate, FaChalkboardTeacher} from "react-icons/fa";
import {GiTeacher} from 'react-icons/gi'

const TimelineResume = () => {

  const { t } = useTranslation("global");   

    useEffect(() => {
      let items = document.querySelectorAll(".timeline li");
    
        const isElementInViewport = (el) => {
          let rect = el.getBoundingClientRect();
          return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
              (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
        }
      
        const callbackFunc = () => {
          for (let i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
              items[i].classList.add("in-view");
            }
          }
        }
      
        // listen for events
        window.addEventListener("load", callbackFunc);
        window.addEventListener("resize", callbackFunc);
        window.addEventListener("scroll", callbackFunc);
    } )
  
    return (
<section className="timeline">
  <ul>
    <li id="f">
      <div>
        <time>{t("resume.title.home")}</time>
        <i className="fa fa-laptop-house"/>{t("resume.resume.home")}
       
      </div>
    </li>
    <li id="e">
      <div>
        <time>{t("resume.title.integrify")}</time>
         Integrify
         <br/>
        <GiTeacher/> <small>{t("resume.resume.integrify")}</small>11/2019 - 05/2020
        </div>
    </li>
    <li id="d">
      <div>
        <time>{t("resume.title.sitelogic")}</time>
        Site Logic Oy <br/>
        <FaLaptopCode/>{t("resume.resume.sitelogic")}11/2016 - 01/2017 & 02/2018 - 05/2018 <br/>
      </div>
    </li>
    <li id="c">
      <div>
        <time><small>{t("resume.title.HBC")}</small></time> 
         {t("resume.schools.HBC")}<br/>
         <FaUserGraduate/> {t("resume.resume.HBC")}2018
      </div>
    </li>
    <li id="b">
      <div>
        <time>{t("resume.title.freelancer")}</time> 
        <FaChalkboardTeacher/>{t("resume.resume.freelancer")}2004 - 2007 
      </div>
    </li>
    <li id="a"  >
      <div >
      <time>{t("resume.title.PUCP")}</time> 
      {t("resume.schools.PUCP")}<br/>
       <FaUniversity/>{t("resume.resume.PUCP")}2004
      </div>
    </li>
  </ul>
</section>

    )
}

export default TimelineResume
