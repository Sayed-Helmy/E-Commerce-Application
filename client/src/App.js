import Layout from "./components/layout/Layout";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";
import ContactUs from "./pages/ContactUs";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import ProfilePage from "./pages/ProfilePage";
import Success from "./pages/Success";
import Canceled from "./pages/Canceled";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import axios from "axios";
import { userActions } from "./store/userSlice";
import { cartActions } from "./store/cartSlice";
import { productsActions } from "./store/productsSlice";
import AdminPage from "./pages/admin/AdminPage";
import Faqs from "./pages/Faqs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ManageOrder from "./components/Profile/ManageOrder/ManageOrder";
import ForgetPass from "./components/auth/ForgetPass";
import ResetPassword from "./components/auth/ResetPassword";
import NotAuth from "./pages/NotAuth";

function App() {
  const user = useSelector((state) => state.user);
  const location = useLocation();
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
          dispatch(cartActions.setCart(result.data.cart));
        });
    axios
      .get("http://localhost:5000/api/v1/products", {
        withCredentials: true,
      })
      .then((result) => {
        dispatch(productsActions.setProducts(result.data));
      });
    axios
      .get("http://localhost:5000/api/v1/categories", {
        withCredentials: true,
      })
      .then((result) => {
        dispatch(productsActions.setCategories(result.data));
      });
  }, [dispatch, cookies.token]);
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/checkout"
            element={
              !user ? (
                <Navigate to="/SigninPage" replace state={{ from: location }} />
              ) : (
                <Checkout />
              )
            }
          />
          <Route path="/shop/:id" element={<ProductPage />} />
          <Route
            path="/SigninPage"
            element={user ? <Navigate to="/" replace /> : <SigninPage />}
          />
          <Route
            path="/SignupPage"
            element={
              user ? (
                <Navigate to="/profile" replace state={{ from: location }} />
              ) : (
                <SignupPage />
              )
            }
          />
          <Route
            path="/profile"
            element={
              !user ? (
                <Navigate to="/SigninPage" replace state={{ from: location }} />
              ) : (
                <ProfilePage />
              )
            }
          />
          <Route path="/forget-password" element={<ForgetPass />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/manage-order"
            element={
              !user ? (
                <Navigate to="/SigninPage" replace state={{ from: location }} />
              ) : (
                <ManageOrder />
              )
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/notauth" element={<NotAuth />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Canceled />} />
          {/* admin routers */}
          <Route path="admin/*" element={<AdminPage />} />
        </Routes>
        <ToastContainer />
      </Layout>
    </>
  );
}

export default App;
