import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
