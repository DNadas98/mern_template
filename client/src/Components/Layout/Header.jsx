import React from "react";

function Header({ pageTitle }) {
  return (
    <h2>
      Welcome to <a href="/">{pageTitle}</a>!
    </h2>
  );
}

export default Header;
