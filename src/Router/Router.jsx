import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import App from "../App";
import CartDropdown from "../pages/CartDropdown/CartDropdown";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/menu",
        Component: Menu,
      },
      {
        path: "/cart",
        Component: CartDropdown,
      },
    ],
  },
]);
