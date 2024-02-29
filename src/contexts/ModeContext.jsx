import React, { createContext, useState } from "react";
import { PropTypes } from "prop-types";
export const ModeContext = createContext(null);

export function ModeProvider({ children }) {
  const [mode, setMode] = useState("light");
  const handleSetMode = () => {
    setMode((currMode) => (currMode === "light" ? "dark" : "light"));
  };
  return (
    <ModeContext.Provider value={{ mode, handleSetMode }}>
      {children}
    </ModeContext.Provider>
  );
}

ModeProvider.propTypes = {
  children: PropTypes.node,
};

export default ModeProvider;
