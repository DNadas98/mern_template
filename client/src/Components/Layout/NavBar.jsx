import React from "react";
import { useLocation } from "react-router-dom";
import NavButton from "./NavButton";

function NavBar() {
  const current = useLocation().pathname;
  return (
    <ul className="NavBar">
      <NavButton path="/" text="Home" current={current} />
      <NavButton path="/documents" text="Documents" current={current} />
      <NavButton path="/asdfg" text="Test 404" current={current} />
      <NavButton path="/test-error" text="Test Error" current={current} />
    </ul>
  );
}

export default NavBar;
