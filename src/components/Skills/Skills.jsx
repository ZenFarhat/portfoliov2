import React from "react";
import "./Skills.css";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

function Skills() {
  return (
    <div className='skills'>
      <h1 className='skills-header'>What do I bring you?</h1>
      <div className='skills-container'>
        <div className='row__1 row'>
          <FaReact className='skill-icon react-icon' />
        </div>
        <div className='row__2 row'>
          <FaCss3Alt className='skill-icon css-icon' />
          <AiFillHtml5 className='skill-icon html-icon' />
        </div>
        <div className='row__3 row'>
          <SiFirebase className='skill-icon firebase-icon' />
          <SiJavascript className='skill-icon js-icon' />
          <FaNodeJs className='skill-icon node-icon' />
          <FaSass className='skill-icon sass-icon' />
        </div>
        <div className='row__4 row'>
          <FaGithub className='skill-icon github-icon' />
          <DiMongodb className='skill-icon mongo-icon' />
        </div>
        <div className='row__5 row'>
          <FaJava className='skill-icon java-icon' />
        </div>
      </div>
    </div>
  );
}

export default Skills;
