import React from "react";
import Project from "./Project/Project";
import "./Projects.css";

function Projects() {
  return (
    <div className='projects'>
      <Project
        title='Amazon clone'
        img='https://logos-world.net/wp-content/uploads/2020/04/Amazon-Symbol.jpg'
        deployment='https://challenge-f061e.web.app/'
        codeLink=''
      />
      <Project
        title='Tesla clone'
        img='https://www.logocentral.info/wp-content/uploads/2020/04/Tesla-Logo-640X590.jpg'
        deployment='https://tesla-clone-7faa4.web.app/'
        codeLink=''
      />
      <Project
        title='Portfolio V1'
        img=''
        deployment='https://zenfarhat.github.io/portfoliowebsite/'
        codeLink=''
      />
    </div>
  );
}

export default Projects;
