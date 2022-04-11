import React from "react";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main className="container mx-auto">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
