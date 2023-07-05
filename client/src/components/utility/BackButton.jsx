import React from "react";
import { useNavigate } from "react-router-dom";

function BackButton({ path }) {
  const navigate = useNavigate();

  return (
    <button type="button" onClick={() => navigate(path ? path : -1)}>
      Back
    </button>
  );
}

export default BackButton;
