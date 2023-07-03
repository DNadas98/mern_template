import React from "react";

function Footer({ pageTitle, name, link }) {
  const year = new Date().getFullYear();
  return (
    <h3>
      {pageTitle} | {year} ©{" "}
      <a rel="noreferrer" target="_blank" href={link} className="fade">
        {name}
      </a>
    </h3>
  );
}

export default Footer;
