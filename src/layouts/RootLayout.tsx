import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
const RootLayout = () => {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
