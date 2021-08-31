import {useState, useEffect} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import { CgClose } from "react-icons/cg";
import "slick-carousel/slick/slick-theme.css";
import TestimonialService from '../services/TestimonialService'
import '../assets/css/testimonials.css'

const onButtonClick = () => {
  document.getElementById("testimonial").style.display = "block";
} 

const onClouseFullSizeImage = () => {
  document.getElementById("testimonial").style.display='none'
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
  const [testimonials, setTestimonials] = useState();
  
  const [testimonial, setTestimonial] = useState({
    name: '',
    occupation: '',
    company: '',
    website: '',
    message: ''
  }) 

  const {name, occupation, company, website, message} = testimonial

  const handleChange = e => {
    setTestimonial({ ...testimonial, [e.target.name]: e.target.value })
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    TestimonialService.sendTestimonial(name, occupation, company, website, message)
    onClouseFullSizeImage()
  }

  useEffect(()=>{
    TestimonialService.getTestimonials().then(data =>{
       setTestimonials(data)
        });
    },[]);

  return (
  <section id="testimonials" >
  <div className="text-container" >
    <h1>Testimonials</h1>
        <ul>
          <Slider {...settings}>
            <li>
              <blockquote>
                <p>
                  Your work is going to fill a large part of your life, and
                  the only way to be truly satisfied is to do what you believe
                  is great work. And the only way to do great work is to love
                  what you do. If you haven't found it yet, keep looking.
                  Don't settle. As with all matters of the heart, you'll know
                  when you find it.
                </p>
                <cite>Steve Jobs</cite>
                <a href='#'>www.stewejobs.com</a>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p>
                  This is Photoshop's version of Lorem Ipsum. Proin gravida
                  nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                  quis bibendum auctor, nisi elit consequat ipsum, nec
                  sagittis sem nibh id elit. Duis sed odio sit amet nibh
                  vulputate cursus a sit amet mauris.
                </p>
                <cite>Mr. Adobe</cite>
                <a href='#'>www.abode.cpm</a>
              </blockquote>
            </li>
          </Slider> 
        </ul>
      <button className='w3-button w3-padding-small w3-medium w3-black w3-opacity w3-hover-opacity-off' style={{float: 'right'}} onClick={onButtonClick}>Leave your testimonial</button >
     </div>
     
<div id="testimonial" className="w3-modal  w3-gray">
<button className="w3-button w3-red w3-large  w3-display-topright" title="Close Modal Image" onClick={onClouseFullSizeImage} ><CgClose /></button>
  <div className="w3-modal-content w3-animate-zoom">
    <div className="w3-container w3-black">
      <h1>Testimonial</h1>
    </div>
    <div className="w3-container">
      <p>Leave your testimonial:</p>
      <form onSubmit={handleSubmit} target="_self">
        <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="name" onChange={handleChange}/></p>
        <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Occupation" required name="occupation" onChange={handleChange}/></p>
        <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Company (optional)" name="company" onChange={handleChange}/></p>
        <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Website (optional)" name="website" onChange={handleChange}/></p>
        <p><textarea className="w3-input w3-padding-16 w3-border" type="text" placeholder="Testimonial " required name="message" onChange={handleChange}/></p>
        <p><button className="w3-button w3-red" type="submit" >SEND</button></p>
      </form>
    </div>
  </div>
</div>
</section>
)};

export default Testimonials;