import React from 'react'

export default function PromoteBox() {
  return (
    <div>
    <div className="w-[60%] mx-auto rounded-lg md:flex p-5 mt-20 gap-8 text-white bg-[#674ada]">
        <div className="promote-box info md:w-3/4 mt-3 p-2">
            <p className="text-2xl font-bold">You have a new Project ?</p>
            <p className="font-semibold my-3">contact me now and get your project done with in time with 30% discount</p>
            <a href="#contactme">
            <button>Contact me</button>
            </a>
        </div>
    </div>
    </div>
  )
}
