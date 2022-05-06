import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Categories from "../../components/admin/category/Categories";
import Brands from "../../components/admin/brand/brands";
import Dashboard from "../../components/admin/Dashboard";
import Orders from "../../components/admin/Orders/Orders";
import Products from "../../components/admin/products/Products";
import Users from "../../components/admin/Users";
import UserPage from "./UserPage";
import ProductPage from "../../components/admin/products/ProductDetails";
import CategoryPage from "./category/CategoryPage";
import NewCategory from "./category/NewCategory";
import NewCoupon from "./coupon/NewCoupon";
import NewProduct from "./products/NewProduct";
import BrandPage from "./brand/brandPage";
import NewBrand from "./brand/newBrand";

const AdminPage = () => {
   return (
      <Routes>
         <Route path="/" element={<Navigate to="dashboard" />} />
         <Route path="dashboard" element={<Dashboard />} />
         <Route path="products" element={<Products />} />
         <Route path="users" element={<Users />} />
         <Route path="userPage" element={<UserPage />} />
         <Route path="orders" element={<Orders />} />
         <Route path="categories" element={<Categories />} />
         <Route path="/categories/:id" element={<CategoryPage />} />
         <Route path="/categories/addnew" element={<NewCategory />} />
         <Route path="brands" element={<Brands />} />
         <Route path="/brands/:id" element={<BrandPage />} />
         <Route path="/brands/addnew" element={<NewBrand />} />
         <Route path="/products/:id" element={<ProductPage />} />
         <Route path="products/addnew" element={<NewProduct />} />
         <Route path="coupons/addnew" element={<NewCoupon />} />
      </Routes>
   );
};

export default AdminPage;
