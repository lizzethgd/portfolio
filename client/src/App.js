import logo from './logo.svg';
import {useState, useEffect} from "react";
import './App.css';
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

const App = () => {
  
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <> 
      <p>{!data ? "Loading..." : data}</p>
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
  );
}

export default App;
