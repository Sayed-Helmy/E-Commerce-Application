import React from "react";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const Layout = (props) => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      {!location.pathname.startsWith("/admin") && <MainNavigation />}
      <main className="container mx-auto min-h-[80vh]">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
