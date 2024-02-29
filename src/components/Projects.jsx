import {
  faEarthAfrica,
  faPersonCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomHook from "../hooks/CustomHook";
import { useRef } from "react";

function Projects() {
  const refTab = useRef()
  CustomHook(refTab)
  const projectList = [
    {
      name: "Project 1",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem minima voluptatibus, veniam quibusdam esse impedit libero provident ab quam aliquam assumenda illo quas ad odit blanditiis eius quasi reprehenderit. Enim?",
      mission: "Front-end",
      language: "HTML5, CSS, React",
    },
    {
      name: "Project 1",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem minima voluptatibus, veniam quibusdam esse impedit libero provident ab quam aliquam assumenda illo quas ad odit blanditiis eius quasi reprehenderit. Enim?",
      mission: "Front-end",
      language: "HTML5, CSS, React",
    },
    {
      name: "Project 1",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem minima voluptatibus, veniam quibusdam esse impedit libero provident ab quam aliquam assumenda illo quas ad odit blanditiis eius quasi reprehenderit. Enim?",
      mission: "Front-end",
      language: "HTML5, CSS, React",
    },
    {
      name: "Project 1",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem minima voluptatibus, veniam quibusdam esse impedit libero provident ab quam aliquam assumenda illo quas ad odit blanditiis eius quasi reprehenderit. Enim?",
      mission: "Front-end",
      language: "HTML5, CSS, React",
    },
    {
      name: "Project 1",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem minima voluptatibus, veniam quibusdam esse impedit libero provident ab quam aliquam assumenda illo quas ad odit blanditiis eius quasi reprehenderit. Enim?",
      mission: "Front-end",
      language: "HTML5, CSS, React",
    },
  ];
  return (
    <section className="Projects" ref={refTab}>
      <h2 className="title">PROJECTS</h2>
      <div className="list">
        {projectList.map(({ name, des, language, mission }, index) => (
          <div key={index} className="item">
            <div className="image">
              <img src="../myPortfolio.png" alt="a project image" />
            </div>
            <div className="content">
              <h3 className="name">{name}</h3>
              <div className="des">{des}</div>
              <div className="mission">
                <div className="svg">
                  <FontAwesomeIcon
                    icon={faPersonCircleQuestion}
                  ></FontAwesomeIcon>
                </div>
                <div>
                  <h4>Mission</h4>
                  <div className="misson-des">{mission}</div>
                </div>
              </div>
              <div className="mission">
                <div className="svg">
                  <FontAwesomeIcon icon={faEarthAfrica}></FontAwesomeIcon>
                </div>
                <div>
                  <h4>Language</h4>
                  <div className="misson-des">{language}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
