import React, { useEffect} from 'react';
import Swiper from 'swiper/bundle';
import '../assets/css/swiper.min.css';
import '../assets/css/timeline.scss'
 
const bulletFunction = function ( index, className) {
  const year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
  return '<span class="' + className + '">' + year + '</span>'}

const Timeline = () => {
  
  useEffect(() => {
  const swiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    speed: 1600,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      bulletElement : 'span',
      clickable: true,
      renderBullet: bulletFunction
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    //mousewheel: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  });
});

    return (
     
  <div className="timeline w3-black">
    <div className="swiper-container" > 
      <div className="swiper-wrapper" >
        <div className="swiper-slide a"  data-year="2011" >
          <div className="swiper-slide-content"><span className="timeline-year" >2011</span>
            <h4 className="timeline-title">Our nice super title</h4>
            <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className="swiper-slide b"  data-year="2012" >
          <div className="swiper-slide-content"><span className="timeline-year" >2012</span>
            <h4 className="timeline-title">Our nice super title</h4>
            <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className="swiper-slide c" data-year="2013" >
          <div className="swiper-slide-content"><span className="timeline-year" >2013</span>
            <h4 className="timeline-title">Our nice super title</h4>
            <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className="swiper-slide d" data-year="2014" >
          <div className="swiper-slide-content"><span className="timeline-year" >2014</span>
            <h4 className="timeline-title">Our nice super title</h4>
            <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className="swiper-slide e"  data-year="2015" >
          <div className="swiper-slide-content"><span className="timeline-year" >2015</span>
            <h4 className="timeline-title">Our nice super title</h4>
            <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className="swiper-slide f"  data-year="2016" >
          <div className="swiper-slide-content"><span className="timeline-year" >2016</span>
            <h4 className="timeline-title">Our nice super title</h4>
            <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div> 
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-pagination"></div>
    </div>
  </div>


    )
}

export default Timeline


