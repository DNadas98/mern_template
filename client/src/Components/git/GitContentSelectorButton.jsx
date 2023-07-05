import React from "react";

function GitContentSelectorButton({ selectedFile, setSelectedFile, path, language }) {
  return (
    <button
      disabled={selectedFile?.path === path}
      onClick={() => {
        setSelectedFile({ path: path, language: language });
      }}
    >
      {path.split("/")[path.split("/").length - 1]}
    </button>
  );
}

export default GitContentSelectorButton;
