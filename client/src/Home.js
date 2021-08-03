import Header from './components/Header'
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Timeline from './components/Timeline';
import Timeline01 from './components/Timeline01';
import Timeline02 from './components/Timeline02';
import Testimonials from './components/Testimonials';

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
