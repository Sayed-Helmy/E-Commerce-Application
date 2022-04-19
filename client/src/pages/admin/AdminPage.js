import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../../components/admin";
import Dashboard from "../../components/admin/Dashboard";
import Products from "../../components/admin/Products";
import Users from "../../components/admin/Users";

const AdminPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="products" element={<Products />} />
      <Route path="users" element={<Users />} />
    </Routes>
  );
};

export default AdminPage;
