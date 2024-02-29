import "./App.css";
import Home from "../src/components/Home";
import Contacts from "../src/components/Contacts";
import Projects from "../src/components/Projects";
import Skills from "../src/components/Skills";
import Navbar from "../src/components/Navbar";
import { ModeContext } from "./contexts/ModeContext";
import { useContext } from "react";

function App() {
  const { mode } = useContext(ModeContext);
  console.log(mode);

  return (
    <main id={mode}>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contacts />
    </main>
  );
}

export default App;
