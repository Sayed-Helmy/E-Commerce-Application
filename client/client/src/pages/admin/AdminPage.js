import React from "react";
import { Route, Routes } from "react-router-dom";
import Categories from "../../components/admin/category/Categories";
import Dashboard from "../../components/admin/Dashboard";
import Orders from "../../components/admin/Orders";
import Products from "../../components/admin/Products";
import Users from "../../components/admin/Users";
import UserPage from "./UserPage";
import ProductPage from "../ProductPage";
import CategoryPage from "./category/CategoryPage";
import NewCategory from "./category/NewCategory";
import NewCoupon from "./coupon/NewCoupon";
import NewProduct from "./products/NewProduct";

const AdminPage = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="products" element={<Products />} />
      <Route path="users" element={<Users />} />
      <Route path="userPage" element={<UserPage />} />
      <Route path="orders" element={<Orders />} />
      <Route path="categories" element={<Categories />} />
      <Route path="/categories/:id" element={<CategoryPage />} />
      <Route path="/products/:id" element={<ProductPage />} />
      <Route path="/categories/addnew" element={<NewCategory />} />
      <Route path="products/addnew" element={<NewProduct />} />
      <Route path="coupons/addnew" element={<NewCoupon />} />
    </Routes>
  );
};

export default AdminPage;
