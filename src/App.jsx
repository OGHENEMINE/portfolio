import "./App.css";
import Home from "../src/components/Home";
import Contacts from "../src/components/Contacts";
import Projects from "../src/components/Projects";
import Skills from "../src/components/Skills";
import Navbar from "../src/components/Navbar";

function App() {

  return (
    <main>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contacts />
    </main>
  );
}

export default App;
