import React from "react";
import GitContent from "../components/git/GitContent";
import GitRepoData from "../components/git/GitRepoData";

function Home() {
  const user = "DNadas98";
  const repo = "mern_template";
  const filePath = "README.md"; //"server/server.js";
  return (
    <div className="Home column">
      <GitRepoData user={user} repo={repo} />
      <h2>{filePath}</h2>
      <GitContent user={user} repo={repo} filePath={filePath} />
    </div>
  );
}

export default Home;
