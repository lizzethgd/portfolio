import '../assets/css/portfolio.scss'
import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {CgClose} from "react-icons/cg";
import {FaTags} from "react-icons/fa";
import covidTracker from "../assets/images/covid-tracker.jpg";
import pharmalocator from "../assets/images/pharmalocator.jpg";
import ninjas from "../assets/images/ninjas.jpg";

const Portfolio = () => {

  const [t ] = useTranslation("global");

  const [www, setWww] = useState("")
 
 let title01 = t("portfolio.titles.title01")
  
    const content= [ 
      { id: '0',
        img: pharmalocator,
        tags : [' ReactJS', 'Mapbox', 'use-supercluster', 'MaterialUI', 'CSS', 'HTML'],
        www: 'https://pharmacies-locator.web.app/'
      },
      { id: '1', 
        img: covidTracker,
        tags : [' ReactJS', 'CSS', 'HTML'],
        www: 'https://covid-19-tracker-1e543.web.app/'
      },
      { id: '2',
        img: ninjas,
        tags : [' NODE', 'MongoDB', 'ReactJS', 'Mapbox', 'Bootstrap', 'CSS', 'HTML' ],
        www: 'https://mern-ninjas-mapbox.herokuapp.com/'
      }
      ]

    const Parallax = {
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    const onCardClick = (id) => {
        //e.preventDefault()
        document.getElementById("_imagen").src = content[id].img; 
        document.getElementById("_title").innerHTML = t("portfolio.titles.title0"+id);
        document.getElementById("_description").innerHTML = t("portfolio.descriptions.desc0"+id);
        document.getElementById("_tags").innerHTML = content[id].tags.join(',  ');
        document.getElementById("modal__card").style.display = "block";
        setWww(content[id].www)
    } 
      
    const onClouseFullSizeImage = () => {
        document.getElementById("modal__card").style.display='none'
        setWww("")
    }  
      
 const cards = content.map(card => (
              
        <div className="card__" key={card.id} onClick={() => onCardClick(card.id)} >
          <div className="card__image-holder">
          <img className="card__image" src={card.img} alt={t("portfolio.titles.title0"+card.id)} />
          </div>
          <div className="card__title"><h3>{t("portfolio.titles.title0"+card.id)}</h3></div>
          <div className="card__tags"><FaTags/><small>{card.tags.join(', ')}</small></div> 
        </div>
      
))   

return (   
<section id="portfolio" className="w3-light-grey">
{/* <!-- Second Parallax Image with Portfolio Text --> */}
<div className="bgimg-2 w3-display-container " style={Parallax}>
    <div className="w3-display-middle">
        <span className="w3-xxlarge w3-text-white w3-wide">{t("nav.portfolio")}</span>
    </div>
</div>

{/* <!-- Container (Portfolio Section) --> */}
<div id="w3-content w3-container w3-padding-16">
  <div id="cards__container">   
    {cards}
  </div>  
</div> 

{/* <!-- Modal for full size images on click--> */}
 <div id="modal__card" className="w3-modal w3-gray" >
 <button className="w3-button w3-red w3-large  w3-display-topright" title="Close Modal Image" onClick={onClouseFullSizeImage} ><CgClose /></button>
  <div className="w3-modal-content w3-animate-zoom w3-gray">
    <div className="_card ">
        <img id='_imagen' alt='#' src="" />
        <div className="_descriptions">
            <h3 id='_title'></h3>
            <span> <FaTags/>&nbsp;<b id='_tags'></b></span>
            <p id='_description'></p>
            < a href={www} >{t("portfolio.button")}</a> 
        </div>
    </div>   
  </div> 
</div>
&nbsp;
</section>       
)
}

export default Portfolio
