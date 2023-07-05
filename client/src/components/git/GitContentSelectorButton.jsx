import React from "react";

function GitContentSelectorButton({ selectedFile, setSelectedFile, path, language }) {
  const isSelected = selectedFile?.path === path;
  return (
    <button
      className={isSelected ? "selected" : ""}
      onClick={() => {
        if (!isSelected) {
          setSelectedFile({ path: path, language: language });
        } else {
          setSelectedFile(null);
        }
      }}
    >
      {path.split("/")[path.split("/").length - 1]}
    </button>
  );
}

export default GitContentSelectorButton;
