import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import NavDropdown from '../components/navbar-dropdown';
import Toggle from '../components/Toggle';
import { modeContext } from '../ModeContext';

export default function Navbar() {

    const [openNavDropDown, setopenNavDropDown] = useState(false);
    const { darkMode } = useContext(modeContext);

    return (
        <div className={`sticky top-0 z-30 ${!darkMode ? "bg-white" : "bg-[#203356]"}  `}>

            <div className={`flex nav  items-center py-3 mt-3 w-3/4 mx-auto justify-between font-semibold ${!darkMode ? "text-gray-600" : "text-gray-200"}`}>
                <div className="logo text-xl">Aditya Jadhav</div>

                <div className="md:hidden block relative">
                    <CgMenuGridO size={25} onClick={() => setopenNavDropDown(!openNavDropDown)} />
                    {openNavDropDown && <NavDropdown />}
                </div>

                <ul className={` gap-7 md:flex items-center hidden `}>
                    <a href="#home">
                        <li>Home</li>
                    </a>
                    <a href="#skills">
                        <li>skills</li>
                    </a>
                    <a href="#projects">
                        <li>projects</li>
                    </a>
                    <a href="#contactme">
                        <li>contact me</li>
                    </a>
                    <a href="#services">
                        <li>services</li>
                    </a>
                    <li>
                    <Toggle className={`${!darkMode ? "text-gray-700" : "text-gray-200"}`}/>
                    </li>
                </ul>
            </div>
        </div>
    )
}
