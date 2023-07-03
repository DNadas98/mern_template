import React from "react";
import GitMarkdownContent from "../components/git/GitMarkdownContent";
import GitRepoData from "../components/git/GitRepoData";

function Home() {
  const user = "DNadas98";
  const repo = "mern_template";
  const filePath = "README.md";
  return (
    <div className="Home column">
      <GitRepoData user={user} repo={repo} />
      <h2>{filePath}</h2>
      <GitMarkdownContent user={user} repo={repo} filePath={filePath} />
    </div>
  );
}

export default Home;
