import React from "react";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import AdminNavigation from "../admin/AdminNavigation";

const Layout = (props) => {
  const location = useLocation();
  return (
    <>
      {!location.pathname.startsWith("/admin") ? (
        <MainNavigation />
      ) : (
        <AdminNavigation />
      )}
      <main className="container mx-auto min-h-[80vh]">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
