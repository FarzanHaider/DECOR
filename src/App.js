import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginRegister from './pages/Auth/LoginRegister.js';
import ForgotPassword from './pages/Auth/ForgetPassword.js';
import Contact from './pages/Contact.js';
import './index.css';
import CreateCategory from './pages/admin/Create Category.js';
import CreateProduct from './pages/admin/CreateProduct.js';
import ViewProducts from './pages/admin/ViewProducts.js';
import UpdateProducts from './pages/admin/UpdateProducts.js';
import UserData from './pages/admin/UserData.js';
import ShippingPolicy from './pages/ShippingPolicy.js';
import RefundPolicy from './pages/RefundPolicy.js';
import PrivacyPolicy from './pages/PrivacyPolicy.js';
import TermsOfUse from './pages/TermsofUse.js';
import Categories from './pages/Categories.js';
import CategoryProduct from './pages/CategoryProduct.js';
import ProductDetails from './pages/ProductDetails.js';
import AboutUs from './pages/Aboutus.js';
import CartPage from './pages/CartPage.js';
import Profile from './pages/user/Profile.js';
import Orders from './pages/user/Orders.js';
import OrderAdmin from './pages/admin/OrderAdmin.js';
import Search from './pages/Search.js';



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<LoginRegister />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/create-category" element={<CreateCategory />} />
      <Route path="/create-product" element={<CreateProduct />} />
      <Route path="/products" element={<ViewProducts />} />
      <Route path="/update/update-product/:slug" element={<UpdateProducts />} />
      <Route path="/users" element={<UserData />} />
      <Route path="/shipping-policy" element={<ShippingPolicy />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/category/:slug" element={<CategoryProduct />} />
      <Route path="/product/:slug" element={<ProductDetails />} />
      <Route path="/user/profile" element={<Profile />} />
      <Route path="/user/orders" element={<Orders />} />
      <Route path="/admin/orders" element={<OrderAdmin />} />
      <Route path="/search" element={<Search />} />


    </Routes>
  );
};

export default App;
