import React from "react";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main className="container">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
