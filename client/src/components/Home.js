import Header from './Header'
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Skills from './Skills';
import Footer from './Footer';
import Timeline from './Timeline';
import Timeline01 from './Timeline01';
import Timeline02 from './Timeline02';
import Testimonials from './Testimonials';

const Home = () => {


  return (
    <>
      <Header />
       <About />
       <Timeline/>
       <Skills />
       <Timeline01/>
       <Timeline02/>
       <Portfolio />
       <Contact /> 
       <Testimonials/>
       <Footer />
    </>
  )
}

export default Home;
