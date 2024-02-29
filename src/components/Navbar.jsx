import { useContext, useEffect, useState } from "react";
import { TabContext } from "../contexts/ActiveTabContext";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { ModeContext } from "../contexts/ModeContext";

function Navbar() {
  const { ActiveTab, handleActiveTab } = useContext(TabContext);
  const { mode, handleSetMode } = useContext(ModeContext);
  const listNav = ["Home", "Skills", "Projects", "Contacts"];
  const [mobileNav, setMobileNav] = useState(false);

  const handleSetActiveTab = (item) => {
    handleActiveTab(item);
    return setMobileNav(!mobileNav);
  };

  return (
    <header>
      <div className="logo">
        <div>LOGO.</div>
        <div className="mode-toggle">
          <div className={mode === "dark"? "active" : ""} onClick={handleSetMode}>
            <FontAwesomeIcon icon={faSun}/>
          </div>
          <div className={mode === "light"? "active" : ""} onClick={handleSetMode}>
            <FontAwesomeIcon icon={faMoon}/>
          </div>
        </div>
      </div>
      <nav className={mobileNav ? "active" : ""}>
        {listNav.map((item, index) => (
          <span
            key={index}
            onClick={() => handleSetActiveTab(item)}
            className={ActiveTab === item ? "active" : ""}
          >
            {item}
          </span>
        ))}
      </nav>
      <div className="icon-bars" onClick={() => setMobileNav(!mobileNav)}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
}

export default Navbar;
