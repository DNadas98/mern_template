import React, { useState } from "react";
import GitContent from "../components/git/GitContent";
import GitRepoData from "../components/git/GitRepoData";
import GitContentSelector from "../components/git/GitContentSelector";

function ProjectInfo() {
  const user = "DNadas98";
  const repo = "mern_template";
  const files = [
    { path: "README.md", language: "markdown" },
    { path: "server/server.js", language: "javascript" },
    {
      path: "client/src/pages/documents/Documents.jsx",
      language: "javascript"
    }
  ];
  const [selectedFile, setSelectedFile] = useState(files[0]);

  return (
    <div className="ProjectInfo column">
      <GitRepoData user={user} repo={repo} />
      <GitContentSelector
        files={files}
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
      />
      <GitContent
        user={user}
        repo={repo}
        filePath={selectedFile.path}
        language={selectedFile.language}
      />
    </div>
  );
}

export default ProjectInfo;
