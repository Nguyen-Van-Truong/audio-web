import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import ProductsPage from "./products/ProductsPage";
import ServicesPage from "./services/ServicesPage";
import AboutPage from "./about/AboutPage";
import ContactPage from "./contact/ContactPage";
import CartPage from "./cart/CartPage";
import WishlistPage from "./wishlist/WishlistPage";
import CategoryPage from "./categories/CategoryPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Product routes */}
      <Route path="/products" element={<ProductsPage />} />

      {/* Category routes */}
      <Route
        path="/products/speakers"
        element={<CategoryPage category="speakers" />}
      />
      <Route
        path="/products/speakers/bluetooth"
        element={<CategoryPage category="speakers" subcategory="bluetooth" />}
      />
      <Route
        path="/products/speakers/soundbars"
        element={<CategoryPage category="speakers" subcategory="soundbars" />}
      />
      <Route
        path="/products/speakers/home-theater"
        element={
          <CategoryPage category="speakers" subcategory="home-theater" />
        }
      />

      <Route path="/products/tvs" element={<CategoryPage category="tvs" />} />
      <Route
        path="/products/tvs/oled"
        element={<CategoryPage category="tvs" subcategory="oled" />}
      />
      <Route
        path="/products/tvs/led"
        element={<CategoryPage category="tvs" subcategory="led" />}
      />
      <Route
        path="/products/tvs/smart"
        element={<CategoryPage category="tvs" subcategory="smart" />}
      />

      <Route path="/products/fans" element={<CategoryPage category="fans" />} />
      <Route
        path="/products/fans/ceiling"
        element={<CategoryPage category="fans" subcategory="ceiling" />}
      />
      <Route
        path="/products/fans/table"
        element={<CategoryPage category="fans" subcategory="table" />}
      />
      <Route
        path="/products/fans/tower"
        element={<CategoryPage category="fans" subcategory="tower" />}
      />

      <Route
        path="/products/cookers"
        element={<CategoryPage category="cookers" />}
      />
      <Route
        path="/products/cookers/rice"
        element={<CategoryPage category="cookers" subcategory="rice" />}
      />
      <Route
        path="/products/cookers/pressure"
        element={<CategoryPage category="cookers" subcategory="pressure" />}
      />
      <Route
        path="/products/cookers/slow"
        element={<CategoryPage category="cookers" subcategory="slow" />}
      />

      {/* Service routes */}
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/tv-repair" element={<ServicesPage />} />
      <Route path="/services/speaker-repair" element={<ServicesPage />} />
      <Route path="/services/fan-repair" element={<ServicesPage />} />
      <Route path="/services/cooker-repair" element={<ServicesPage />} />

      {/* Other pages */}
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />

      {/* Fallback route */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
