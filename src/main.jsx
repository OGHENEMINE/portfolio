import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ActiveTabContextProvider from "./contexts/ActiveTabContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ActiveTabContextProvider>
      <App />
    </ActiveTabContextProvider>
  </React.StrictMode>
);
