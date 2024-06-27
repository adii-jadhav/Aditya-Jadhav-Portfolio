import React from 'react'
import { Link } from 'react-router-dom'
import { BsLink45Deg } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import { BiRightArrowAlt } from 'react-icons/bi';
import { FiLink2 } from 'react-icons/fi';

export default function ProjectBox({ title, description, repoLink, siteLink, poster, techStack }) {


    return (
        <div>
            <div className="md:flex w-[80%] mx-auto project-box gap-10 p-4 shadow-lg">
                <div >
                    <img src={poster} className='h-48 object-cover rounded-xl' alt="" />
                </div>
                <div className="mt-6 md:w-[60%]">
                    <p className="text-2xl font-bold ">{title}</p>
                    <p className="mt-3">{description}</p>

                    <div className="md:flex justify-between items-center">
                        <a href={siteLink}>
                            <div className="demo-btn">
                                <p>Demo</p>
                                <BiRightArrowAlt size={25} />
                            </div>
                        </a>

                        <a href={repoLink}>
                            <div className="flex gap-2 mt-5 ">
                                <p>Git Repo</p>
                                <FiLink2 size={25} />
                            </div>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
