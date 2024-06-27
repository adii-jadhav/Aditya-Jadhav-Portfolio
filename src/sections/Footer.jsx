import React from 'react'
import { FaFacebookF, FaGithub, FaInstagram } from 'react-icons/fa';
// import logo from '../'
export default function Footer() {
    return (
        <div className='footer-container mt-12 bg-purple-500 relative h-64'>
            <div className=" mx-auto absolute md:top-12 top-5 md:flex  right-0 left-0 justify-center gap-32">

                <div className="text-white">
                    <img src="images/logo.gif" className='w-24 h-24 rounded-full' alt="" />
                </div>

                <div className="text-white">
                    <p className="text-3xl font-bold ">Aditya Jadhav</p>
                    <p className="text-sm font-semibold mt-4">Freelance | web Developer | Data Enthusiast</p>
                </div>

                <ul className="md:flex my-2 gap-6 font-semibold text-white">
                    <li>Projects </li>
                    <li>Contact Me</li>
                    <li>About me</li>
                </ul>

                <div className="icons flex gap-3">
                
                    <FaFacebookF color='white' />
                    <FaInstagram color='white' />
                    <FaGithub color='white' />

                </div>
            </div>
        </div>
    )
}
