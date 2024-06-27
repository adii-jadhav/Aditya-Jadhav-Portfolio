import React from 'react'
import { BsBraces } from 'react-icons/bs'
import { AiOutlineArrowRight } from 'react-icons/ai'
import {GrServerCluster} from 'react-icons/gr'
import { useState } from 'react'
import ServiceBoxPopup from './service-box-popup';

export default function ServiceCard({service}) {

    const [openPopup, setopenPopup] = useState(false);

    return (
        <div className=' p-3 shadow-2xl rounded'>
        {
            openPopup && <ServiceBoxPopup setopenPopup={setopenPopup} dos={service.dos}/>
        }
            <div className=" p-2 mt-12">
            {
                service.name==="Backend Developer"?<GrServerCluster size={25} className="my-4"/>:<BsBraces size={25} className="my-4" />
            }
                
                <p className="text-2xl font-bold w-1/2 mb-6">{service.name}</p>
                <div className='flex items-center gap-2'>

                    <div className='text-purple-400 cursor-pointer ' onClick={()=>setopenPopup(!openPopup)}>view more</div>
                    <AiOutlineArrowRight className='text-purple-400 mt-1'/>
                </div>
            </div>
        </div>
    )
}
