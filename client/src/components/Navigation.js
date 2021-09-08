import { useEffect, useState} from 'react';
import '../assets/css/navigation.css'
import {IoHomeSharp} from "react-icons/io5"
import {IoMdChatbubbles } from "react-icons/io"
import {BsPersonBoundingBox, BsGrid3X3GapFill} from "react-icons/bs"
import {FaEnvelope, FaGlobe } from "react-icons/fa"
import { useTranslation} from 'react-i18next';

const isCurrent = (anchor, pathname) => (
  pathname.endsWith(anchor)
  ? 'current'
  : ''
)

const Navigation = () => {

  const { t, i18n } = useTranslation("global");

  const [pathname, setPathname] = useState('#home');

  const [currentLang, setCurrentLang] = useState()

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setPathname(window.location.href);
    })
    setCurrentLang(i18n.language)
  })

  const langChange = e => {

    const lang = e.target.value
    i18n.changeLanguage(lang)
  
   }

    return (
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" />
      <ul id="nav" className="nav">
        <li className={isCurrent('#home', pathname)}>
          <a href="#home">
            <IoHomeSharp/> {t("nav.home")}
          </a>
        </li>
        <li className={isCurrent('#about', pathname)}>
          <a href="#about">
          <BsPersonBoundingBox/> {t("nav.about")}
          </a>
        </li>
        <li className={isCurrent('#resume', pathname)}>
          <a href="#contact">
          <FaEnvelope/> {t("nav.contact")}
          </a>
        </li>
        <li className={isCurrent('#portfolio', pathname)}>
          <a href="#portfolio">
          <BsGrid3X3GapFill/> {t("nav.portfolio")}
          </a>
        </li>
        <li className={isCurrent('#testimonials', pathname)}>
          <a href="#testimonials">
          <IoMdChatbubbles/> {t("nav.testimonials")}
          </a>
        </li>
        <li >
          <p >    
          &#127760;
          <select value={currentLang} onChange={langChange}>
            <option value="en" >🇬🇧 English</option>
            <option value="fi" >🇫🇮 Suomi</option>
            <option value="es" >🇪🇸 Espanol</option>
            <option value="de" >🇩🇪 Deutscht</option>
          </select>   
          </p>
        </li>
      </ul>
    </nav>
  )}


export default Navigation;
