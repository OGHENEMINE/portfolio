import { useContext, useEffect } from "react";
import { TabContext } from "../contexts/ActiveTabContext";
import {PropTypes} from "prop-types"

function CustomHook(refTab) {
  const { ActiveTab } = useContext(TabContext);
//   console.log(ActiveTab, refTab.current)
  useEffect(() => {
    if (refTab !== null && refTab.current.classList.contains(ActiveTab)) {
      return refTab.current.scrollIntoView({ behaviour: "smooth" });
    }
  }, [ActiveTab, refTab]);
}
CustomHook.propTypes = {
  refTab: PropTypes.node,
};

export default CustomHook;
