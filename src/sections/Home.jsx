import React from "react";
import Scroller from "./Scroller";
import Skills from "./Skills";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiOutlineGoogle } from "react-icons/ai";

import './home.css'
import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { modeContext } from "../ModeContext";

function Home() {

  const { darkMode } = useContext(modeContext);

  return (
    <>
     <div id="mainelements">
                <div id="leftglobe">
                    <h1>Located in<br/>Pune, India</h1>
                    <div id="globec">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle-hor"></div>
                        <div className="circle-hor-middle"></div>
                    </div>
                </div>
                <div id="freelance " className="text-white">
                    <i className="ri-arrow-right-down-line"></i>
                    <h1 className="text-white " >Freelance</h1>
                    <h1 className="text-white" >Web Developer | Data Enthusiast</h1>
                </div>
            
            </div>
    <div id="back">
    <img src="images\myself.jpg" alt="hero"/>

    <div id="mainelements">
        <div id="leftglobe">
            <h1>Located in<br/>Pune, India</h1>
            <div id="globec">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle-hor"></div>
                <div className="circle-hor-middle"></div>
            </div>
        </div>
        <div id="freelance">
            <i className="ri-arrow-right-down-line"></i>
            <h1>Freelance</h1>
            <h1>Web Developer | Data Enthusiast</h1>
        </div>
        
    </div>
</div>
    </>
  );
}

export default Home;
