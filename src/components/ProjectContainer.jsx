import React from "react";
import projData from "../data/projData.json";
import ProjectCard from "./ProjectCard";
export default function ProjectContainer() {
  return (
    <div className="projectContainer">
      {projData.projects.map((projDetails) => (
        <ProjectCard projDetails={projDetails} />
      ))}
    </div>
  );
}
{
  /* <div key={projDetails.projectName}>
<h2>{projDetails.projectName}</h2>
<p>{projDetails.projDesc}</p>
{projDetails.stack.map((type, index) => {
  return <h4 key={index}>{type}</h4>;
})}
<h3>{projDetails.date}</h3>
</div> */
}
