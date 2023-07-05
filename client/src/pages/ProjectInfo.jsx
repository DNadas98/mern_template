import React, { useState } from "react";
import GitContent from "../components/git/GitContent";
import GitRepoData from "../components/git/GitRepoData";
import GitContentSelector from "../components/git/GitContentSelector";

function ProjectInfo() {
  const user = "DNadas98";
  const repo = "mern_template";
  const files = [
    { path: "readme.md", language: "markdown" },
    { path: "server/server.js", language: "javascript" },
    {
      path: "client/src/index.js",
      language: "javascript"
    },
    {
      path: "client/src/pages/documents/Documents.jsx",
      language: "javascript"
    }
  ];
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="ProjectInfo column">
      <GitRepoData user={user} repo={repo} />
      <p>Example files from this repository:</p>
      <GitContentSelector
        files={files}
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
      />
      {selectedFile ? (
        <GitContent
          user={user}
          repo={repo}
          filePath={selectedFile?.path}
          language={selectedFile?.language}
        />
      ) : (
        <p>Select a file to view its content!</p>
      )}
    </div>
  );
}

export default ProjectInfo;
