import React from 'react'
import ServiceCard from '../components/service-card'
import services from '../data/services_data'

export default function Services() {
    return (
        <section id='services'>
        
            <div className="my-16">
                <p className="text-center text-4xl font-bold">Services</p>
                <p className="font-semibold text-center text-gray-500 mt-5 ">What I provide</p>
            </div>

            <div className="md:grid my-3 grid-cols-3 w-3/4 mx-auto gap-10">
            {
                services.map((ele)=>{
                    return (
                        <ServiceCard service={ele}/>
                    )
                })
            }

            </div>
        </section>
    )
}
