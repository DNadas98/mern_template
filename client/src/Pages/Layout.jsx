import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import NavBar from "../Components/Layout/NavBar";

function Layout() {
  const pageTitle = "MERN template page";
  const name = "Daniel Nadas";
  const link = "https://github.com/DNadas98";

  return (
    <div className="Layout">
      <header>
        <Header pageTitle={pageTitle} />
      </header>
      <nav>
        <NavBar />
      </nav>
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
