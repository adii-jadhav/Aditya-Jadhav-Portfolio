import React from 'react'
import { BiCode } from 'react-icons/bi';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { useState } from 'react';
import { useContext } from 'react';
import { modeContext } from '../ModeContext';

export default function SkillBox({ ele }) {

    const [show, setshow] = useState(false);
    const {darkMode} = useContext(modeContext);
    
    return (
        <>

            <div className='mt-8'>
                <div className="skill-box flex justify-around cursor-pointer" onClick={() => setshow(!show)} >

                    <div className={`flex ${!darkMode ?"text-gray-600":"text-gray-200"}`}>
                        <BiCode size={35} className="mr-3" />
                        <div>
                            <p className="text-2xl font-bold ">{ele.name}</p>
                            <p className=" font-semibold mt-1">More than 4 years</p>
                        </div>
                    </div>

                    {
                        show ? (<AiOutlineUp size={20} />) : (
                            <AiOutlineDown size={20} />

                        )

                    }

                </div>

                {
                    show &&

                    <div className={`drop-down grid grid-cols-1 `}>
                        {
                            ele.skills.map((skill) => {
                                return (
                                    <div>
                                        <div className="flex  justify-between">
                                            <p className="font-bold">{skill.skill_name}</p>
                                            <p>{skill.performance} </p>
                                        </div>

                                        <div className="range mt-3 relative rounded-xl bg-purple-200 h-2">
                                            <div style={{width:skill.performance}} className={`-top-[2px] absolute  rounded-lg bg-purple-500 h-3 mb-2 `}></div>
                                        </div>
                                    </div>
                                )
                            })
                        }



                    </div>
                }
            </div>


        </>
    )
}
