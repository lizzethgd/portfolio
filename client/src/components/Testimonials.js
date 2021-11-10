import {useState, useEffect} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import { CgClose } from "react-icons/cg";
import "slick-carousel/slick/slick-theme.css";
import TestimonialService from '../services/TestimonialService'
import '../assets/css/testimonials.css'
import { useTranslation} from 'react-i18next';

const onButtonClick = () => {
  document.getElementById("testimonialForm").style.display = "block";
} 

const onClouseFullSizeImage = () => {
  document.getElementById("testimonialForm").style.display='none'
}


const settings = {
  //dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slideToShow: 1,
  slideToScroll: 1,
  swipeToSlide: true
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])
  
  const [testimonial, setTestimonial] = useState({
    name: '',
    occupation: '',
    company: '',
    website: '',
    message: ''
  }) 

  const {name, occupation, company, website, message} = testimonial

  useEffect(()=>{
    TestimonialService.getTestimonials().then(data =>{
       setTestimonials(data)
        });
    },[]);

  const handleChange = e => {
    e.preventDefault();
    setTestimonial({ ...testimonial, [e.target.name]: e.target.value })
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    TestimonialService.sendTestimonial(name, occupation, company, website, message)
    onClouseFullSizeImage()
  }

  const { t } = useTranslation("global");

  return (
  <section id="testimonials" >
  <div className="text-container" >
    <h1>{t("nav.testimonials")}</h1>
        <ul>
          <Slider {...settings}>
          {testimonials.map((testimonial) => (
          <li key={testimonial._id}>
             <blockquote>
                <p className="testimonial">{testimonial.testimonial} </p>
               <cite>{testimonial.name}</cite>
               <a href='#'><p>{testimonial.website}</p></a>
             </blockquote>
           </li>
          ))}  
          </Slider> 
        </ul>
      <button className='w3-button w3-padding-small w3-medium w3-black w3-opacity w3-hover-opacity-off' style={{float: 'right'}} onClick={onButtonClick}>{t("testimonial.leave")}</button >
  </div>
     
<div id="testimonialForm" className="w3-modal w3-blue-grey">
<button className="w3-button w3-red w3-large  w3-display-topright" title="Close Modal Image" onClick={onClouseFullSizeImage} ><CgClose /></button>
  <div className="w3-modal-content w3-animate-zoom">
    <div className="w3-container w3-black">
      <h1>{t("nav.testimonials")}</h1>
    </div>
    <div className="w3-container">
      <p className="w3-text-indigo">{t("testimonial.leave")}:</p>
      <form onSubmit={handleSubmit} target="_self">
      <div className="w3-row-padding" >
       <input className="w3-input w3-border" type="text" placeholder={t("testimonial.form.name")} required name="name" value={name} onChange={handleChange}/>
       <input className="w3-input w3-border" type="text" placeholder={t("testimonial.form.occupation")} required name="occupation" value={occupation} onChange={handleChange}/>
       <input className="w3-input w3-border" type="text" placeholder={t("testimonial.form.company")} name="company" value={company} onChange={handleChange}/>
       <input className="w3-input w3-border" type="text" placeholder={t("testimonial.form.website")} name="website" value={website} onChange={handleChange}/>
       <textarea className="w3-input w3-border" type="text" placeholder={t("testimonial.form.testimonial")} required name="message" value={message} onChange={handleChange}/>
        <p><button className="w3-button w3-red" type="submit" ><i className="fa fa-paper-plane" /> {t("send")}</button></p>
        </div>
      </form>
    </div>
  </div>
</div>

</section>
)};

export default Testimonials;