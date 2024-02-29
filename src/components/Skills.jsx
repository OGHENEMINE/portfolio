import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  // faHtml5,
  // faCss3,
  // faJs,
} from "@fortawesome/free-brands-svg-icons";
import CustomHook from "../hooks/CustomHook";
import { useRef } from "react";
function Skills() {
  const refTab = useRef()
  CustomHook(refTab)
  const skillList = [
    {
      name: "React",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et sequi quia corrupti quam asperiores hic aperiam beatae cumque aut?",
      icon: faReact,
    },
    {
      name: "React",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et sequi quia corrupti quam asperiores hic aperiam beatae cumque aut?",
      icon: faReact,
    },
    {
      name: "React",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et sequi quia corrupti quam asperiores hic aperiam beatae cumque aut?",
      icon: faReact,
    },
    {
      name: "React",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et sequi quia corrupti quam asperiores hic aperiam beatae cumque aut?",
      icon: faReact,
    },
    {
      name: "React",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et sequi quia corrupti quam asperiores hic aperiam beatae cumque aut?",
      icon: faReact,
    },
    {
      name: "React",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et sequi quia corrupti quam asperiores hic aperiam beatae cumque aut?",
      icon: faReact,
    }
  ];
  return <section className="Skills" ref={refTab}>
    <h2 className="title">
      These Are My Skills
    </h2>
    <div className="des">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum itaque perspiciatis provident voluptas magnam quod quas ipsa modi optio illo?
    </div>
    <div className="list">
      {
        skillList.map(({name, icon, desc}, index) => (
          <div key={index} className="item">
          <FontAwesomeIcon className="svg" icon={icon}/>
          <h3>{name}</h3>
          <div className="des">{desc}</div>
         </div>
        ))
      }
    </div>
  </section>
}

export default Skills;
