import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-white font-semibold bg-linear-to-br from-orange-400 to-orange-600 py-1 px-2 "
          : `${className} font-semibold`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
