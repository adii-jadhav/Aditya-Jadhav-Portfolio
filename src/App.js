import { useRef ,useContext } from "react";
import Home from "./sections/Home";
import "./App.css";
import Scroller from "./sections/Scroller";
import Skills from "./sections/Skills";

import { modeContext } from './ModeContext';
import Projects from "./sections/Projects";
import Navbar from "./sections/Navbar";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Services from "./sections/services";
import ServiceBoxPopup from "./components/service-box-popup";
import About from "./sections/About";
import PromoteBox from "./components/PromoteBox";

function App() {
  
  const {darkMode ,setdarkMode} = useContext(modeContext);


  // const scrollToSection = (eleref) => {
  //  // console.log(home.current);
  //   window.scrollTo({ top: eleref.current.offsetTop, behavior: "smooth" });
  // };
  return (
    <div className="App" style={darkMode?{color:"white" ,backgroundColor:"#203354"}:{color:"black" ,backgroundColor:"white"}}>
      <Navbar/>
        <Home />
        <About/>
        <PromoteBox/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Services/>
        <Footer/>
    </div>
  );
}

export default App;
