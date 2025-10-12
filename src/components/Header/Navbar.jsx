import React, { useState, useEffect } from "react";
import Container from "../Container/Container";
import wbLogo from "../../assets/Logo.png";
import { Link, NavLink } from "react-router";
import { FaCartPlus } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

import { loadCartItems } from "../../utility/localStorage";
import CartDropdown from "../../pages/CartDropdown/CartDropdown";

const menuItems = [
  { id: "home", label: "Home", path: "/" },
  { id: "menu", label: "Our Menu", path: "/menu" },
  { id: "about", label: "About Us", path: "/about" },
];

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    const items = loadCartItems();
    const total = items.reduce((sum, i) => sum + i.quantity, 0);
    setCartCount(total);
  };

  useEffect(() => {
    updateCartCount(); // initial load
    window.addEventListener("cartUpdated", updateCartCount);

    return () => window.removeEventListener("cartUpdated", updateCartCount);
  }, []);

  return (
    <div className="bg-gradient-to-br from-rose-100 to-amber-200 shadow-lg">
      <Container>
        <div className="navbar">
          {/* Left Side: Logo */}
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-amber-100 font-semibold rounded-box items-center z-10 mt-3 w-70 h-30 p-2 shadow text-amber-700 cursor-pointer"
              >
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logo */}
            <Link to="/" className="text-lg flex items-center gap-2">
              <img src={wbLogo} alt="Logo" className="w-[35px] h-[35px]" />
              <span className="bg-gradient-to-br from-green-700 to-amber-700 bg-clip-text text-transparent font-bold text-xl">
                FreshBite
              </span>
            </Link>
          </div>

          {/* Center Links */}
          <div className="navbar-center hidden lg:flex">
            <ul className="flex justify-between items-center space-x-3 px-1 text-amber-700 text-sm cursor-pointer">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "pb-1 border-b-2 border-b-amber-800" : ""
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Search, Cart, Sign In */}
          <div className="navbar-end cursor-pointer flex items-center space-x-3 relative">
            <IoSearchOutline size={18} color="#ed6002" strokeWidth={1.25} />

            <div className="relative">
              <FaCartPlus
                size={20}
                color="#ed6002"
                strokeWidth={1.25}
                onClick={() => setShowCart(!showCart)}
              />
              {/* Always show cart count, even if 0 */}
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
              {showCart && <CartDropdown />}
            </div>

     
              <button className="ml-3 btn btn-soft btn-warning rounded-full text-amber-800">
                Sign In
              </button>
            
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
