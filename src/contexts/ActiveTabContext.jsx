import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

export const TabContext = createContext("");

export function ActiveTabContextProvider({ children }) {
  const [ActiveTab, setActiveTab] = useState("Home");

  const handleActiveTab = (data) => {
    setActiveTab(data);
  };

  return (
    <TabContext.Provider value={{ ActiveTab, handleActiveTab }}>
      {children}
    </TabContext.Provider>
  );
}

ActiveTabContextProvider.propTypes = {
    children: PropTypes.node
}
export default ActiveTabContextProvider;
