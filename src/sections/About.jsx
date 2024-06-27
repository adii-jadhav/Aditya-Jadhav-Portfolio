import React from "react";
import { useContext } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { modeContext } from "../ModeContext";

export default function About() {
  const { darkMode } = useContext(modeContext);

  const downloadResume = () => {
    fetch("../myResume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = " adityaresume.pdf";
        alink.click();
        window.alert("Thank you  !!");
      });
    });
  };

  return (
    <section id="about" className="mt-16">
      <div className="text-center ">
        <p className="text-3xl font-bold mb-1">About me</p>
        <p className="font-semibold text-gray-500">My Introduction</p>
      </div>

      <div className="w-3/4 mx-auto shadow p-4 mt-12 md:flex gap-12">
        <div className="profile md:h-fit h-52">
          <img
            className="object-cover mt-10 rounded-lg h-full w-full"
            src="images/about.jpg"
            alt=""
          />
        </div>

        <div className="info  p-1 mx-10 font-semibold mt-4">
          <p className={`${darkMode ? "text-white" : "text-gray-500"}`}>
            I'm a web developer and a programer with a focus on the MERN stack,
            but still exploring other technologies and frameworks that catch my
            interest! if you're looking for a developer to add to your team, I'd
            love to hear from you!

            <p className={`${darkMode ? "text-white" : "text-gray-500"} mt-6 font-light`}>
              currently pursuing B.tech degree from JSPM's Rajarshi Shahu College
              of Engineering, Pune in computer Science Engineering
            </p>

          </p>


          <div className="md:grid grid-cols-3  gap-6 mt-7">
            <div className="shadow-lg rounded-lg p-3 text-center">
              <p className="text-3xl  font-bold">2+</p>
              <p
                className={`${darkMode ? "text-white" : "text-gray-500"} mt-2`}
              >
                Years Experiance In web
              </p>
            </div>

            <div className="shadow-lg rounded-lg p-3 text-center">
              <p className="text-3xl  font-bold">8+</p>
              <p
                className={`${
                  darkMode ? "text-white" : "text-gray-500"
                } mt-2 font-sm`}
              >
                Web Dev Projects
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded w-fit p-2 mt-5 bg-purple-500 hover:bg-purple-600 text-white">
            <button className="font-bold" onClick={downloadResume}>
              Download Resume
            </button>
            <AiOutlineDownload size={25} />
          </div>
        </div>
      </div>
    </section>
  );
}
