import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Header/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeLayouts = () => {
  const location = useLocation();
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location]);

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayouts;
