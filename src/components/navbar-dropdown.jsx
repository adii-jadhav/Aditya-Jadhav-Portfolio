import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { FcAbout } from 'react-icons/fc';
import { GiSkills } from 'react-icons/gi'
import { MdConnectWithoutContact, MdOutlineMiscellaneousServices } from 'react-icons/md';

export default function NavDropdown({ show }) {
  return (
    <div className='absolute top-12  bg-white shadow p-4 w-[24rem] border  left-[-20rem]'>

      <div className="grid grid-cols-2 gap-10 text-gray-600">
        <a href="/">
          <div className='flex gap-5'>
            <AiOutlineHome size={25} className="text-gray-500" />
            <p>Home</p>
          </div>
        </a>

        <a href="#about">
          <div className='flex gap-5'>
            <FcAbout size={25} className="text-gray-500" />
            <p>About me</p>
          </div>
        </a>

        <a href="#skills">
          <div className='flex gap-5'>
            <GiSkills size={25} className="text-gray-500" />
            <p>Skills</p>
          </div>
        </a>

        <a href="#contact">
        <div className='flex gap-5'>
        <MdConnectWithoutContact size={25} className="text-gray-500" />
        <p>Contact Me</p>
        </div>
        </a>

        <div className='flex gap-5'>
          <MdOutlineMiscellaneousServices size={25} className="text-gray-500" />
          <p>Services</p>
        </div>

      </div>

    </div>
  )
}
