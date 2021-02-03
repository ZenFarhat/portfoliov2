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
            Hello, I'm Zen. <br /> I am a biomedicine graduate who found my true
            home to be within the IT industry. I am currently enrolled in a
            Bachelor of Information Technology and found myself wanting to
            explore more fields in the world of IT during my summer break, which
            eventually lead me to loving web development. I am a self-driven
            learner and currently am supplementing my studies by researching
            concepts and doing extra-curricular courses involving Web Dev. My
            primary focus at the moment is front-end, however, I am steadily
            dabbling into the realm of back-end technologies and how they work
            :)
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
