import { useEffect, useState} from 'react';
import '../assets/css/navigation.css'
import {IoHomeSharp} from "react-icons/io5"
import {IoMdChatbubbles } from "react-icons/io"
import {BsPersonBoundingBox, BsGrid3X3GapFill, BsChatSquareQuoteFill} from "react-icons/bs"
import {FaEnvelope} from "react-icons/fa"
import {  GiFootprint } from "react-icons/gi";


const isCurrent = (anchor, pathname) => (
  pathname.endsWith(anchor)
  ? 'current'
  : ''
)
const Navigation = () => {

  const [pathname, setPathname] = useState('#home');

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setPathname(window.location.href);
    })
  })

    return (
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" />
      <ul id="nav" className="nav">
        <li className={isCurrent('#home', pathname)}>
          <a className="smoothscroll" href="#home">
            <IoHomeSharp/> Home
          </a>
        </li>
        <li className={isCurrent('#about', pathname)}>
          <a className="smoothscroll" href="#about">
          <BsPersonBoundingBox/> About
          </a>
        </li>
        <li className={isCurrent('#resume', pathname)}>
          <a className="smoothscroll" href="#contact">
          <FaEnvelope/> Contact
          </a>
        </li>
        <li className={isCurrent('#portfolio', pathname)}>
          <a className="smoothscroll" href="#portfolio">
          <BsGrid3X3GapFill/> Portfolio
          </a>
        </li>
        <li className={isCurrent('#testimonials', pathname)}>
          <a className="smoothscroll" href="#testimonials">
          <IoMdChatbubbles/> Testimonials
          </a>
        </li>
        <li className={isCurrent('#footer', pathname)}>
          <a className="smoothscroll" href="#footer">
          <GiFootprint/> Footer
          </a>
        </li>
      </ul>
    </nav>
  )}


export default Navigation;
