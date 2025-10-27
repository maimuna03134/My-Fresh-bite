import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import Container from "../../components/Container/Container";
import {
  loadCartItems,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  getCartTotal,
  getCartItemsCount,
} from "../../utility/localStorage";
import { IoStar, IoTrashOutline, IoAdd, IoRemove } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import ErrorPage from "../ErrorPage/ErrorPage";
import Loader from "../../components/Loader/Loader";

const CartDropdown = () => {
  const [cartedItems, setCartedItems] = useState([]);
  const [showLoader, setShowLoader] = useState(true);
  const [error, setError] = useState(false);

  // Load cart items on mount and listen for updates
  useEffect(() => {
    const timeOut = setTimeout(() => {
      try {
        const items = loadCartItems();
        setCartedItems(items);
      } catch (err) {
        console.error("Failed to load cart:", err);
        setError(true);
      } finally {
        setShowLoader(false);
      }
    }, 500);

    return () => clearTimeout(timeOut);
  }, []);

  // Listen for cart updates
  useEffect(() => {
    const handleCartUpdate = () => {
      try {
        const items = loadCartItems();
        setCartedItems(items);
      } catch (err) {
        console.error("Failed to update cart:", err);
      }
    };
    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, []);

  const handleRemove = (item) => {
    try {
      removeFromCart(item);
      setCartedItems(loadCartItems());
    } catch (err) {
      console.error("Failed to remove item:", err);
      setError(true);
    }
  };

  // Handle increase quantity
  const handleIncrease = (itemId) => {
    try {
      increaseQuantity(itemId);
    } catch (err) {
      console.error("Failed to increase quantity:", err);
    }
  };

  // Handle decrease quantity
  const handleDecrease = (itemId) => {
    try {
      decreaseQuantity(itemId);
    } catch (err) {
      console.error("Failed to decrease quantity:", err);
    }
  };

  // Handle clear cart
  const handleClearCart = () => {
    try {
      clearCart();
    } catch (err) {
      console.error("Failed to clear cart:", err);
    }
  };

  // Calculate item subtotal
  const calculateSubtotal = (item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = item.quantity || 1;
    return (price * quantity).toFixed(2);
  };

  // Handle proceed to checkout
  const handleCheckout = () => {
    navigate("/checkout");
  };

  if (error) return <ErrorPage />;
  if (showLoader) return <Loader />;
  if (!showLoader && cartedItems.length === 0) {
    return (
      <Container>
        <h2 className="text-center text-2xl mt-10">Your cart is empty!</h2>
      </Container>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Container>
        <div className="py-12">
          {/* Header */}
          <div className="text-center py-6 mb-8">
            <h1 className="text-4xl font-bold text-[#001931] mb-2">
              Shopping Cart
            </h1>
            <p className="text-gray-600 text-lg">
              Review and manage your selected items
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items Section */}
            <div className="lg:col-span-2">
              {/* Items Count and Clear Button */}
              <div className="flex justify-between items-center mb-6 px-2">
                <p className="text-xl font-semibold text-gray-800">
                  {getCartItemsCount()} Item(s) in Cart
                </p>
                <button
                  onClick={handleClearCart}
                  className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium transition-colors"
                >
                  <IoTrashOutline className="text-xl" />
                  Clear Cart
                </button>
              </div>

              {/* Cart Items List */}
              <div className="space-y-4">
                {cartedItems.map((item) => (
                  <div
                    key={item._id}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all"
                  >
                    <div className="flex gap-5">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-lg"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h2 className="font-bold text-xl text-[#001931] mb-1">
                              {item.name}
                            </h2>
                            <p className="text-gray-500 text-sm line-clamp-2">
                              {item.Description}
                            </p>
                          </div>
                          <button
                            onClick={() => handleRemove(item)}
                            className="text-red-500 hover:text-red-700 transition-colors ml-4"
                          >
                            <IoTrashOutline className="text-2xl" />
                          </button>
                        </div>

                        {/* Rating and Price Row */}
                        <div className="flex items-center gap-4 mb-4">
                          <span className="flex items-center gap-1 text-[#FF8811] font-medium">
                            <IoStar /> {item.rating}
                          </span>
                          <span className="text-2xl font-bold text-[#00D390]">
                            ৳{item.price}
                          </span>
                        </div>

                        {/* Quantity Controls and Subtotal */}
                        <div className="flex items-center justify-between">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3">
                            <span className="text-gray-600 font-medium">
                              Quantity:
                            </span>
                            <div className="flex items-center bg-gray-100 rounded-lg">
                              <button
                                onClick={() => handleDecrease(item._id)}
                                className="p-2 hover:bg-gray-200 rounded-l-lg transition-colors"
                              >
                                <IoRemove className="text-xl text-gray-700" />
                              </button>
                              <span className="px-6 py-2 font-semibold text-lg">
                                {item.quantity || 1}
                              </span>
                              <button
                                onClick={() => handleIncrease(item._id)}
                                className="p-2 hover:bg-gray-200 rounded-r-lg transition-colors"
                              >
                                <IoAdd className="text-xl text-gray-700" />
                              </button>
                            </div>
                          </div>

                          {/* Subtotal */}
                          <div className="text-right">
                            <p className="text-sm text-gray-500">Subtotal</p>
                            <p className="text-2xl font-bold text-[#001931]">
                              ৳{calculateSubtotal(item)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sticky top-6">
                <h2 className="text-2xl font-bold text-[#001931] mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal:</span>
                    <span className="font-semibold">
                      ৳{getCartTotal().toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping:</span>
                    <span className="font-semibold text-[#00D390]">Free</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (10%):</span>
                    <span className="font-semibold">
                      ৳{(getCartTotal() * 0.1).toFixed(2)}
                    </span>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-[#001931]">
                        Total:
                      </span>
                      <span className="text-3xl font-bold text-[#00D390]">
                        ৳{(getCartTotal() * 1.1).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-[#00D390] hover:bg-[#00b378] text-white font-bold py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg mb-3"
                >
                  Proceed to Checkout
                </button>
                <Link to="/menu">
                  <button
                    onClick={() => navigate("/")}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 rounded-lg transition-all"
                  >
                    Continue Shopping
                  </button>
                </Link>

                {/* Additional Info */}
                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-gray-500 text-center">
                    🔒 Secure Checkout
                  </p>
                  <p className="text-xs text-gray-400 text-center mt-2">
                    Your payment information is safe with us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartDropdown;
