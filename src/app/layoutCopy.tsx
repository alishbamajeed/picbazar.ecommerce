"use client";

import { Provider as ReduxProvider } from "react-redux";
import { CartProvider } from "./components/CartContext"; // Correct path to CartContext
import store from "./redux/store"; // Correct path to your Redux store
import Navbar from "./components/Navbar"; // Correct path to Navbar
import React from "react";
import "./globals.css"; // Add global styles here
import Footer from "./components/Footer";

const LayoutCopy: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <CartProvider>
        <Navbar />
        <div className="content">{children}</div> {/* Render children inside the layout */}
      <Footer/>
      </CartProvider>
    </ReduxProvider>
  );
};

export default LayoutCopy;
