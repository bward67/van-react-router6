import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* this <Outlet/> is like saying {children} this is where we want the route of /vans or /about or /home to appear */}
      <Footer />
    </>
  );
};

export default Layout;
