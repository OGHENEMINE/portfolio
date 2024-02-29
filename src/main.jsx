import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ActiveTabContextProvider from "./contexts/ActiveTabContext.jsx";
import ModeProvider from "./contexts/ModeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ActiveTabContextProvider>
      <ModeProvider>
        <App />
      </ModeProvider>
    </ActiveTabContextProvider>
  </React.StrictMode>
);
