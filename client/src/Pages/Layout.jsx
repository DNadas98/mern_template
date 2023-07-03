import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";

function Layout() {
  const pageTitle = "MERN template";
  const name = "Daniel Nadas";
  const link = "https://github.com/DNadas98";

  return (
    <div className="Layout">
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer pageTitle={pageTitle} name={name} link={link} />
      </footer>
    </div>
  );
}

export default Layout;
