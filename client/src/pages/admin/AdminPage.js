import React from "react";
import { Route, Routes } from "react-router-dom";
import Categories from "../../components/admin/Categories";
import Dashboard from "../../components/admin/Dashboard";
import Orders from "../../components/admin/Orders";
import Products from "../../components/admin/Products";
import Users from "../../components/admin/Users";

const AdminPage = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="products" element={<Products />} />
      <Route path="users" element={<Users />} />
      <Route path="orders" element={<Orders />} />
      <Route path="categories" element={<Categories />} />
    </Routes>
  );
};

export default AdminPage;
