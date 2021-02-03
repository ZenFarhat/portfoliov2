import React from "react";
import "./Project.css";

function Project(props) {
  return (
    <div className='project'>
      <img src={props.img} alt='project-img' />
      <div className='project-text'>
        <p>{props.title}</p>
        <a target='_blank' rel='noreferrer' href={props.deployment}>
          <button>View deployment</button>
        </a>
        <a target='_blank' rel='noreferrer' href={props.codeLink}>
          <button>View code</button>
        </a>
      </div>
    </div>
  );
}

export default Project;
