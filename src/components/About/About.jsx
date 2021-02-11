import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGuitar } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

function About() {
  const guitarIcon = <FontAwesomeIcon icon={faGuitar} className='hobby-icon' />;
  const laptopIcon = (
    <FontAwesomeIcon icon={faLaptopCode} className='hobby-icon' />
  );
  const fishIcon = <FontAwesomeIcon icon={faFish} className='hobby-icon' />;
  const gamePadIcon = (
    <FontAwesomeIcon icon={faGamepad} className='hobby-icon' />
  );
  return (
    <div className='about'>
      <div className='about__container'>
        <div className='about__text'>
          <p>
            Hello, I'm Zen. <br /> I'm a dedicated & motivated Web Developer
            known for designing, developing, and delivering custom web
            applications and software solutions. I currently apply my MERN stack
            knowledge and front-end/back-end tools in diverse website
            development projects. I am extremely open to learning new
            technologies as I have a strong interest in programming. My hobbies
            include playing the guitar, web dev, fishing & gaming.
          </p>
        </div>
        <div className='about__icons'>
          {guitarIcon}
          {laptopIcon}
          {fishIcon}
          {gamePadIcon}
        </div>
      </div>
    </div>
  );
}

export default About;
