import React from "react";
import "./Home.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import Resume from "../../Files/Zenf-resume - ONLINE.docx";

function Home() {
  return (
    <div className='home'>
      <h1 className='home__header'>Zen F</h1>
      <h2 className='home__subheader'>Web Dev</h2>
      <div className='icon__container'>
        <a href='https://github.com/ZenFarhat' target='_blank' rel='noreferrer'>
          <GitHubIcon fontSize='large' className='home-icon' />
        </a>
        <a
          href='https://www.linkedin.com/in/zeneff/'
          target='_blank'
          rel='noreferrer'
        >
          <LinkedInIcon fontSize='large' className='home-icon' />
        </a>
        <a href={Resume} target='_blank' rel='noreferrer'>
          <FolderOpenIcon fontSize='large' className='home-icon' />
        </a>
      </div>
      <button className='contact__button'>Contact Me</button>
    </div>
  );
}

export default Home;
