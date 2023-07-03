import React from "react";
import { useLocation } from "react-router-dom";
import NavButton from "./NavButton";

function NavBar() {
  const current = useLocation().pathname;
  return (
    <nav>
      <NavButton path="/" text="Home" current={current} />
      <NavButton path="/documents" text="Documents" current={current} />
    </nav>
  );
}

export default NavBar;
