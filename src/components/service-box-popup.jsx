import React from 'react'
import { useContext } from 'react';
import { TiTickOutline } from 'react-icons/ti';
import { modeContext } from '../ModeContext';

export default function ServiceBoxPopup({ setopenPopup, dos }) {

    const { darkMode } = useContext(modeContext);

    return (
        <div className=' popup-box '>
            <div className={`${!darkMode ? "bg-white" : "bg-[#203356]"} p-5 md:w-[30%] w-[95%] rounded bg-white shadow-lg`}>
                <div className="flex justify-between my-3 mb-8">
                    <p className="font-semibold text-xl w-1/5">Frontend Developer</p>
                    <p className="font-semibold text-xl cursor-pointer" onClick={() => setopenPopup(false)}>x</p>


                </div>
                <div className="services grid grid-cols-1 gap-4 mt-5">

                    {
                        dos.map((ele) => {
                            return (
                                <div className=" flex gap-3">
                                    <TiTickOutline />
                                    <p>{ele}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
