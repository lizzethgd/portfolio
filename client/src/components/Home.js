import Header from './Header'
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';
import Timeline01 from './Timeline01';
import Timeline02 from './Timeline02';
import Testimonials from './Testimonials';

const Home = () => {


  return (
    <>
      <Header />
       <About />
       <Resume />
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
