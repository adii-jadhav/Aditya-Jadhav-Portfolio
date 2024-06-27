import React from 'react'
import ProjectBox from '../components/project-box'
import Project from '../components/project-box'
import projects from '../data/projects_data'


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";



// import required modules
import { Navigation } from "swiper";

export default function Projects() {
    return (
        <section id='projects'>

            <div className="md:w-3/4 mx-auto">
                <div className="my-16">
                    <p className="text-center text-4xl font-bold">Projects</p>
                    <p className="font-semibold text-center text-gray-400 mt-5 ">My Most Recent Work</p>
                </div>
                <div className="carasole">
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        projects.map((ele ,idx)=>{
                            return (

                                <SwiperSlide>
                                    <ProjectBox  {...ele} key={idx}/>
                                </SwiperSlide>
                            )
                        })
                    }                       

                    </Swiper>
                </div>
            </div>


        </section>
    )
}
