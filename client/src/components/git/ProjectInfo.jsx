import React, { useState } from "react";
import GitContent from "./GitContent";
import GitRepoData from "./GitRepoData";
import GitContentSelector from "./GitContentSelector";

function ProjectInfo({ user, repo, files }) {
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
