import React from "react";
import BackButton from "../Components/Utility/BackButton";

function NotFound() {
  return (
    <div className="NotFound">
      <h1>The page you are looking for does not exist.</h1>
      <BackButton />
    </div>
  );
}

export default NotFound;
