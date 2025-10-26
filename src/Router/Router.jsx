import React from "react";
import { createBrowserRouter } from "react-router";

import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import App from "../App";
import CartDropdown from "../pages/CartDropdown/CartDropdown";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import PlaceOrder from "../pages/PlaceOrder/PlaceOrder";
import About from "../pages/About/About";

import HomeLayouts from "../layouts/HomeLayouts";
import AuthLayouts from "../layouts/AuthLayouts";
import Login from "../pages/register&login/Login";
import Register from "../pages/register&login/Register";
import ForgotPassword from "../pages/register&login/ForgotPassword";
import PrivateRoute from "../provider/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayouts,
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
        element: (
          <PrivateRoute>
            <CartDropdown></CartDropdown>
          </PrivateRoute>
        ),
        
      },
      {
        path: "/menu/:id",
        element: (
          <PrivateRoute>
            <FoodDetails></FoodDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/order",
        element: (
          <PrivateRoute>
            <PlaceOrder />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayouts></AuthLayouts>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },
    ],
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);
