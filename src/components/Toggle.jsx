import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { modeContext } from '../ModeContext';
import { BsMoon } from "react-icons/bs";
import {FiSun} from'react-icons/fi';

export default function Toggle() {

    const [first, setfirst] = useState("");
    const { darkMode, setdarkMode } = useContext(modeContext)

    const handleToggleChange = () => {
        setdarkMode(!darkMode);
    }


    return (
        <div className='toggle-box  cursor-pointer' onClick={handleToggleChange}>
            {
                darkMode ? <FiSun/>:<BsMoon/>
            }

            </div>
        
    )
}
