import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  const location = useLocation();

  // Define paths where header/footer should be hidden
  const authRoutes = ["/signin", "/signup"];

  const shouldHideHeaderFooter = authRoutes.includes(location.pathname.toLowerCase());

  return (
    <>
      {!shouldHideHeaderFooter && <Header />}
      <main className={`min-h-screen ${!shouldHideHeaderFooter ? "pt-5" : ""}`}>
        {children}
      </main>
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
};

export default MainLayout;
