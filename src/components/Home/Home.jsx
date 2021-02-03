import React from "react";
import "./Home.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";

function Home() {
  return (
    <div className='home'>
      <h1 className='home__header'>Zen F</h1>
      <h2 className='home__subheader'>Web Dev</h2>
      <div className='icon__container'>
        <GitHubIcon fontSize='large' className='home-icon' />
        <LinkedInIcon fontSize='large' className='home-icon' />
        <FolderOpenIcon fontSize='large' className='home-icon' />
      </div>
      <button className='contact__button'>Contact Me</button>
    </div>
  );
}

export default Home;
