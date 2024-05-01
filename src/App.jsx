import { useState } from "react";
import Navbar from "./components/Navbar";
import NameCard from "./components/NameCard";
import ProjectCard from "./components/ProjectCard";
import AboutCard from "./components/AboutCard";
import FooterCard from "./components/FooterCard";
import ProjectContainer from "./components/ProjectContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main">
        <Navbar />
        <NameCard />
        <AboutCard />
        {/* <div className="rowBox">
          <ProjectCard />
          <ProjectCard />
        </div> */}
        <ProjectContainer />

        <FooterCard />
      </div>
    </>
  );
}

export default App;
