import '../assets/css/timeline.scss'
import {useEffect} from 'react'

const TimelineResume = () => {
    useEffect(() => {
      let items = document.querySelectorAll(".timeline li");
      
        // check if an element is in viewport
        // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
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
    <li id="a"  >
      <div >
        <time>Ingenieria Informatica</time> 
        Pontificia Universidad Catolica del Peru<br/>
        4 semestre
      </div>
    </li>
    <li id="b">
      <div>
        <time>Freelance</time> 
        Hice algunos trabajos como freelance, en htlm y algo de flash
      </div>
    </li>
    <li id="c">
      <div>
        <time>Datanomi</time> 
       Helsinki Business College<br/>
       program ohjelmisto valmisuin 2018 vuonna

      </div>
    </li>
    <li id="d">
      <div>
        <time>LogoTek</time>
       Trabajo de practicas<br/>
       Ayudante 
      </div>
    </li>
    <li id="e">
      <div>
        <time>Web developer</time>
        Integrify 
        <br/>
        <small>Curso de 9 veces cuyo contenido fue CSS, React, un poco de Node y MongoDB</small>
        </div>
    </li>
    <li id="f">
      <div>
        <time>Proyectos en casa</time>
        algunos proyectos hechos en casa a manera de practica.
      </div>
    </li>
  </ul>
</section>

    )
}

export default TimelineResume
