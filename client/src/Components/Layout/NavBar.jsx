import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul className="NavBar">
      <li className="menuButton">
        <button>
          <Link to="/">Home</Link>
        </button>
      </li>
    </ul>
  );
}

export default NavBar;
