import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";
import ContactUs from "./pages/ContactUs";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import ProfilePage from "./pages/ProfilePage";
// import { useSelector } from "react-redux";

function App() {
  // const user = useSelector((state) => state.user);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop/:id" element={<ProductPage />} />
        <Route path="/SigninPage" element={<SigninPage />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
