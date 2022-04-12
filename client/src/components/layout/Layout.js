import React, { useEffect } from "react";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";
import { useCookies } from "react-cookie";

const Layout = (props) => {
  const dispatch = useDispatch();
  const [cookies] = useCookies(["token"]);
  useEffect(() => {
    if (cookies.token)
      axios
        .get("http://localhost:5000/api/v1/auth/validate", {
          withCredentials: true,
        })
        .then((result) => {
          dispatch(userActions.setUser(result.data));
        });
  }, [dispatch, cookies.token]);
  return (
    <>
      <MainNavigation />
      <main className="container mx-auto min-h-[80vh]">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
