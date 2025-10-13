import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import App from "../App";
import CartDropdown from "../pages/CartDropdown/CartDropdown";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import PlaceOrder from "../pages/PlaceOrder/PlaceOrder";
import About from "../pages/About/About";

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
        path: "/about",
        Component: About,
      },
      {
        path: "/cart",
        Component: CartDropdown,
      },
      {
        path: "/menu/:id",
        Component: FoodDetails,
      },
      {
        path: "/order",
        Component: PlaceOrder,
      },
    ],
  },
]);
