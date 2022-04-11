import React from "react";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main className="container mx-auto min-h-[80vh]">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
