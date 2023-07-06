import React from "react";

function Home() {
  return (
    <div className="Home column">
      <h1>MERN Template Project</h1>
      <p>
        This project serves as a template for MERN stack (
        <a
          href="https://www.mongodb.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="blue"
        >
          MongoDB
        </a>
        {", "}
        <a
          href="https://expressjs.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="blue"
        >
          Express.js
        </a>
        {", "}
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="blue"
        >
          React
        </a>
        {", "}
        <a
          href="https://nodejs.org/en"
          target="_blank"
          rel="noopener noreferrer"
          className="blue"
        >
          Node.js
        </a>
        ) applications, providing a backend and frontend implementation for creating,
        reading, updating, and deleting simple text documents. The template is based on
        the{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Glossary/MVC"
          target="_blank"
          rel="noopener noreferrer"
          className="blue"
        >
          MVC
        </a>{" "}
        (Model View Controller) design pattern.
      </p>
      <p>
        The aim of this template is to shorten the initial setup time and provide a clean,
        consistent and relatively secure base for MERN projects.
      </p>

      <p>
        This is a public project. Check out the{" "}
        <a
          href="https://github.com/DNadas98/mern_template"
          target="_blank"
          rel="noopener noreferrer"
          className="blue"
        >
          GitHub page
        </a>{" "}
        to clone the repo and start working on something new in minutes!
      </p>
    </div>
  );
}

export default Home;
