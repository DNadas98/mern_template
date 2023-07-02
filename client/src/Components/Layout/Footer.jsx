import React from "react";

function Footer({ pageTitle, name, link }) {
  const year = new Date().getFullYear();
  return (
    <h2>
      {pageTitle} | {year} ©{" "}
      <a rel="noreferrer" target="_blank" href={link}>
        {name}
      </a>
    </h2>
  );
}

export default Footer;
