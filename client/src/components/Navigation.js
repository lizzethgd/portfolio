import { useEffect, useState} from 'react';
import '../assets/css/navigation.scss'
import {IoHomeSharp, IoLanguageSharp} from "react-icons/io5"
import {IoMdChatbubbles } from "react-icons/io"
import {BsPersonBoundingBox, BsGrid3X3GapFill, BsFillChatSquareQuoteFill} from "react-icons/bs"
import {FaMailBulk, FaClipboardList, FaEnvelope, FaBriefcase } from "react-icons/fa"
import { VscReferences } from "react-icons/vsc";
import { RiClipboardFill } from "react-icons/ri";
import { useTranslation} from 'react-i18next';

const isCurrent = (anchor, pathname) => (
  pathname.endsWith(anchor) ? 'current' : ''
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
      <a  href="#nav-wrap" className="ham-btn" />
      <a  href="#x" className="x-btn" />
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
          <a href="#resume">
          <RiClipboardFill/> {t("nav.resume")}
          </a>
        </li>
        <li className={isCurrent('#portfolio', pathname)}>
          <a href="#portfolio">
          <BsGrid3X3GapFill/> {t("nav.portfolio")}
          </a>
        </li>
        <li className={isCurrent('#contact', pathname)}>
          <a href="#contact">
          <FaMailBulk/> {t("nav.contact")}
          </a>
        </li>
        <li className={isCurrent('#testimonials', pathname)}>
          <a href="#testimonials">
          <BsFillChatSquareQuoteFill/> {t("nav.testimonials")}
          </a>
        </li>
        <li >
         <p >   
         <IoLanguageSharp />:<select value={currentLang} onChange={langChange}>
            <option value="en" >🇬🇧 English</option>
            <option value="fi" >🇫🇮 Suomi</option>
            <option value="es" >🇪🇸 Español</option>
            <option value="de" >🇩🇪 Deutscht</option>
          </select>   
         </p>
        </li>
      </ul>
    </nav>
  )}


export default Navigation;
