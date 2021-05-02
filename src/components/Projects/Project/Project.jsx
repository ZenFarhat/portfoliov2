import React from "react";
import "./Project.css";

function Project(props) {
  return (
    <div
      className="project"
      style={{ backgroundImage: "url(" + props.img + ")" }}
    >
      <div className="project-text">
        <p>{props.title}</p>
        <p className="project-desc">{props.desc}</p>
        <div className="project-buttons">
          <a target="_blank" rel="noreferrer" href={props.deployment}>
            <button className="project-button">View deployment</button>
          </a>
          <a target="_blank" rel="noreferrer" href={props.codeLink}>
            <button className="project-button">View code</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
