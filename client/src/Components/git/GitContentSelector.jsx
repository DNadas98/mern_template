import React from "react";
import GitContentSelectorButton from "./GitContentSelectorButton";

function GitContentSelector({ files, selectedFile, setSelectedFile }) {
  return (
    <div className="row">
      {files.map((file, i) => (
        <GitContentSelectorButton
          key={i}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          path={file.path}
          language={file.language}
        />
      ))}
    </div>
  );
}

export default GitContentSelector;
