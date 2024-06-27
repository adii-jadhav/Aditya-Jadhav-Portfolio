import React from 'react'
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail ,AiOutlineSend } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';

export default function Contact() {
  return (
    <section id="contactme">
      <div className="w-3/4 mx-auto p-3  mt-8">
        <div className='mb-12'>
          <p className="text-3xl font-bold text-center">Contact Me</p>
          <p className="mt-3 text-center text-gray-500 font-semibold">Get in touch</p>
        </div>


        <div className="contact-form md:flex">

          <div className="md:w-[50%]">
            <div className="flex gap-2 items-center">
              <FiPhoneCall size={23} className="mr-2 text-purple-600 cursor-pointer" />
              <div >
                <p className="text-lg font-semibold">Call Me</p>
                <p className="text-gray-500">+91 8180999853</p>
              </div>
            </div>

            <div className="flex mt-6 gap-2 items-center">
              <AiOutlineMail size={23} className="mr-2 text-purple-600 cursor-pointer" />
              <div >
                <p className="text-lg font-semibold">Email Me</p>
                <p className="text-gray-500">adijadhav1920@gmail.com</p>
              </div>
            </div>

            <div className="flex mt-6 gap-2 items-center">
              <GoLocation size={23} className="mr-2 text-purple-600 cursor-pointer" />
              <div >
                <p className="text-lg font-semibold">location</p>
                <p className="text-gray-500">Pune, Maharshtra, India</p>
              </div>
            </div>


          </div>

          <div className="form">
            <div className="md:grid grid-cols-2  gap-4">
              <input type="text" placeholder='name' name="" className='mt-4 w-full outline-none p-2 rounded-md h-16 bg-purple-100' id="" />
              <input type="email" name="" placeholder='Email' className='mt-4 w-full outline-none p-2 rounded-md h-16 bg-purple-100' id="" />
              <input type="text" placeholder="project" name="" className='mt-4 w-full outline-none col-span-2 p-2 rounded-md h-16 bg-purple-100' id="" />
              <textarea name="" placeholder='Message' className='mt-4 w-full outline-none w-full col-span-2 p-2 rounded-md  bg-purple-100' id=""  rows="8"></textarea>

              <div className='send-msg-btn'>
              <p className='font-semibold'>Send Message</p>
              <AiOutlineSend/>
              </div>


            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
