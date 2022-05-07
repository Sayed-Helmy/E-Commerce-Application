import React from "react";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import { useLocation, useNavigate } from "react-router-dom";
import AdminNavigation from "../admin/AdminNavigation";
import { useSelector } from "react-redux";

const Layout = (props) => {
  const location = useLocation();
  const navigator = useNavigate();
  const user = useSelector((state) => state.user);
  if (
    user &&
    location.pathname.startsWith("/admin") &&
    !user.roles.includes("ADMIN")
  )
    navigator("/notauth");
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
