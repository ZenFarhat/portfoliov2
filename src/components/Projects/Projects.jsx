import React from "react";
import Project from "./Project/Project";
import "./Projects.css";
import TeslaProject from "../../Images/tesla-project.jpg";
import AmazonProject from "../../Images/amazon-project.png";
import Portfoliov1 from "../../Images/portfoliov1.JPG";
import movieProject from "../../Images/movieproject.JPG";
import travelWebsite from "../../Images/travelco.JPG";
import realEstateProject from "../../Images/realestate-project.JPG";

function Projects() {
  return (
    <div className="projects">
      <Project
        title="Amazon clone"
        img={AmazonProject}
        deployment="https://challenge-f061e.web.app/"
        codeLink="https://github.com/ZenFarhat/amazon-clone"
        desc="Mobile responsive Amazon clone with a cart system"
      />
      <Project
        title="Tesla clone"
        img={TeslaProject}
        deployment="https://tesla-clone-7faa4.web.app/"
        codeLink="https://github.com/ZenFarhat/tesla-clone"
        desc="Mobile responsive Tesla front-end"
      />
      <Project
        title="ReviewTube"
        img={movieProject}
        deployment="https://reviewtube-867da.web.app/"
        codeLink="https://github.com/ZenFarhat/reviewTube"
        desc="Simple movie app that handles API calls & Searches"
      />
      <Project
        title="TravelCo"
        img={travelWebsite}
        deployment="https://travelcozenf.web.app/"
        codeLink="https://github.com/ZenFarhat/TravelCo"
        desc="Front-end for a travel agency website"
      />
      <Project
        title="Real Estate Website"
        img={realEstateProject}
        desc="Front end for a real estate agency, implementing back-end soon"
        deployment="https://realestatezf.web.app/"
        codeLink="https://github.com/ZenFarhat/realestate-project"
      />
      <Project
        title="Portfolio V1"
        img={Portfoliov1}
        deployment="https://zenfarhat.github.io/portfoliowebsite/"
        codeLink="https://github.com/ZenFarhat/portfoliowebsite"
        desc="First static page portfolio I hosted on gitHub pages"
      />
      <div className="projectsText project">
        <h1>More on the way...</h1>
      </div>
    </div>
  );
}

export default Projects;
