import React from "react";

export default function ProjectCard(props) {
  const { projDetails } = props;
  function isliveLink(projDetails) {
    if (projDetails.liveLink) {
      return (
        <a className="" arget="_blank" href={projDetails.liveLink}>
          <div className="projLinkItem mainColorText">
            <i className="fa-solid fa-bolt"></i>
            <p className="">Live</p>
          </div>
        </a>
      );
    }
  }
  function isGitHubLink(projDetails) {
    if (projDetails.gitHubLink) {
      return (
        <a target="_blank" href={projDetails.gitHubLink}>
          <div className="projLinkItem mainColorText">
            <i className="fa-brands fa-github"></i>
            <p className="">GitHub</p>
          </div>
        </a>
      );
    }
  }
  return (
    <div className="projectCard">
      <h3 className="projectEntry accentColorText">
        -{projDetails.projectName}-
      </h3>
      <p className="projectEntry">{projDetails.projDesc}</p>
      <div className="projTagContainer projectEntry">
        {projDetails.stack.map((type, index) => {
          return (
            <tag key={index} className="accentColorText projStackTag">
              {type}
            </tag>
          );
        })}
      </div>

      <div className="projPublishContainer">
        <div className="projLinkContainer projectEntry">
          {isliveLink(projDetails)}
          {isGitHubLink(projDetails)}
        </div>
        <p className="projectEntry">{projDetails.date}</p>
      </div>

      <div className="projImgContainer projectEntry">
        <img src={projDetails.picLink} />
      </div>
    </div>
  );
}
