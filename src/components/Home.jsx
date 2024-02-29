import { useRef } from "react";
import CustomHook from "../hooks/CustomHook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHireAHelper } from "@fortawesome/free-brands-svg-icons";

function Home() {
  const refTab = useRef()
  CustomHook(refTab)
  return (
    <section className="Home" ref={refTab}>
      <div className="content">
        <div className="name">
          MY NAME IS <span>OGHENEMINE</span>
        </div>
        <div className="dev">Developer</div>
        <div className="des">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
          itaque delectus nihil inventore quaerat alias tempore, optio dicta
          odit, aliquam, illum fugit animi totam accusamus quod modi labore
          saepe. Voluptatem!
          <a href="#" target="_blank" rel="noopener noreferrer">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
