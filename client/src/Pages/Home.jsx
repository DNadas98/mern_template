import React, { useState } from "react";
import GitContent from "../components/git/GitContent";
import GitRepoData from "../components/git/GitRepoData";

function Home() {
  const user = "DNadas98";
  const repo = "mern_template";
  const [file, setFile] = useState({ path: "README.md", language: "markdown" });
  /*const filePath = "server/server.js";
  const language = "javascript";*/
  return (
    <div className="Home column">
      <GitRepoData user={user} repo={repo} />
      <div className="row">
        <button
          disabled={file?.path === "README.md"}
          onClick={() => {
            setFile({ path: "README.md", language: "markdown" });
          }}
        >
          readme
        </button>
        <button
          disabled={file?.path === "server/server.js"}
          onClick={() => {
            setFile({ path: "server/server.js", language: "javascript" });
          }}
        >
          server.js
        </button>
        <button
          disabled={file?.path === "client/src/style/git.css"}
          onClick={() => {
            setFile({ path: "client/src/style/git.css", language: "css" });
          }}
        >
          git.css
        </button>
      </div>
      <GitContent user={user} repo={repo} filePath={file.path} language={file.language} />
    </div>
  );
}

export default Home;
