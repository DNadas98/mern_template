import React from "react";
import { Link } from "react-router-dom";

function NavButton({ path, text, current }) {
  return (
    <Link to={path}>
      <button disabled={current === path ? true : false}>{text}</button>
    </Link>
  );
}

export default NavButton;
