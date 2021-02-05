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
            Hello, I'm Zen. <br /> I am a self-taught Web Dev. Please feel free
            to take a look at my projects page, I am currently doing a Bachelor
            degree in IT. My hobbies include playing the guitar, web dev,
            fishing & gaming.
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
