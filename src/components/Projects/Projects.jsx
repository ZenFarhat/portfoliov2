import React from "react";
import Project from "./Project/Project";
import "./Projects.css";
import TeslaProject from "../../Images/tesla-project.jpg";
import AmazonProject from "../../Images/amazon-project.png";
import ResortProject from "../../Images/zresorts.jpg";
import Portfoliov1 from "../../Images/portfoliov1.JPG";

function Projects() {
  return (
    <div className='projects'>
      <Project
        title='Amazon clone'
        img={AmazonProject}
        deployment='https://challenge-f061e.web.app/'
        codeLink='https://github.com/ZenFarhat/amazon-clone'
      />
      <Project
        title='Tesla clone'
        img={TeslaProject}
        deployment='https://tesla-clone-7faa4.web.app/'
        codeLink=''
      />
      <Project
        title='Portfolio V1'
        img={Portfoliov1}
        deployment='https://zenfarhat.github.io/portfoliowebsite/'
        codeLink='https://github.com/ZenFarhat/portfoliowebsite'
      />
      <Project
        title='Resort Website'
        img={ResortProject}
        deployment=''
        codeLink='https://github.com/ZenFarhat/resort-website'
      />
    </div>
  );
}

export default Projects;
