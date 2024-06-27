import React from "react";
import { BiCode } from 'react-icons/bi';
import { AiOutlineDown } from 'react-icons/ai';
import SkillBox from "../components/skill-box";
import { data } from '../data/skills_data'

function Skills() {
  return (
    <section id="skills" className="" >
      <div className="my-16">
        <p className="text-center text-4xl font-bold">Skills</p>
        <p className="font-semibold text-center text-gray-400 mt-5 ">My Technical Levels</p>
      </div>

      <div className="w-3/4 gap-10 mx-auto  md:grid grid-cols-2 ">
        {
          data.map((ele) => {
            return (
              <SkillBox ele={ele} />

            )
          })
        }

      </div>

    </section>
  );
}


export default Skills;
