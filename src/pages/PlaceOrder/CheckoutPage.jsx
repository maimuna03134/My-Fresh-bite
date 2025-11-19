import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Container from "../../components/Container/Container";
import {
  loadCartItems,
  getCartTotal,
  clearCart,
} from "../../utility/localStorage";
import { IoCheckmarkCircle, IoTimeOutline, IoFastFood } from "react-icons/io5";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import Swal from "sweetalert2";

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const [preparingOrder, setPreparingOrder] = useState(false);
  const [orderId] = useState(Math.floor(Math.random() * 100000));
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const navigate = useNavigate();

  // Load cart items on mount
  useEffect(() => {
    const items = loadCartItems();
    if (items.length === 0) {
      navigate("/cart");
    }
    setCartItems(items);
  }, [navigate]);

  // Countdown timer effect
  useEffect(() => {
    if (orderPlaced && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setPreparingOrder(true);
    }
  }, [orderPlaced, countdown]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    // Validate form
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      Swal.fire({
        icon: "error",
        title: "Missing Information",
        text: "Please fill in all required fields",
        confirmButtonColor: "#00D390",
      });
      return;
    }

    if (cartItems.length > 0) {
      Swal.fire({
        icon: "success",
        title: "Order Placed Successfully!",
        text: `Order #${orderId} has been confirmed`,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });

      setOrderPlaced(true);
      // Clear cart after order is placed
      setTimeout(() => {
        clearCart();
      }, 1000);
    }
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Order Confirmation View with Countdown
  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
        <Container>
          <div className="max-w-2xl mx-auto">
            {!preparingOrder ? (
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                {/* Success Icon */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6 animate-bounce">
                    <IoCheckmarkCircle className="w-16 h-16 text-green-600" />
                  </div>
                  <h1 className="text-4xl font-bold text-gray-800 mb-3">
                    Order Confirmed! 🎉
                  </h1>
                  <p className="text-gray-600 text-lg">
                    Thank you for your order,{" "}
                    <span className="font-semibold text-[#00D390]">
                      {customerInfo.name}
                    </span>
                    !
                  </p>
                </div>

                {/* Countdown Timer */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <IoTimeOutline className="w-7 h-7 text-blue-600" />
                    <span className="text-lg text-gray-700 font-medium">
                      Estimated Delivery Time
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                      {formatTime(countdown)}
                    </div>
                    <p className="text-gray-600">minutes remaining</p>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-3 mt-6 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-linear"
                      style={{ width: `${((30 - countdown) / 30) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="bg-blue-50 rounded-2xl p-6 mb-6">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <FiPackage className="text-blue-600" />
                    Delivery Information
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-700">
                      <span className="font-semibold">Name:</span>{" "}
                      {customerInfo.name}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Phone:</span>{" "}
                      {customerInfo.phone}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Address:</span>{" "}
                      {customerInfo.address}
                    </p>
                  </div>
                </div>

                {/* Order Details */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">
                    Order Details
                  </h2>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600">Order ID:</span>
                      <span className="font-bold text-gray-800">
                        #{orderId}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600">Total Items:</span>
                      <span className="font-bold text-gray-800">
                        {getTotalItems()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-t pt-3">
                      <span className="text-lg text-gray-700">
                        Total Amount:
                      </span>
                      <span className="text-2xl font-bold text-[#00D390]">
                        ${(getCartTotal() * 1.1).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Order Items Preview */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Your Items:
                  </h3>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {cartItems.map((item) => (
                      <div
                        key={item._id}
                        className="flex items-center gap-4 bg-white p-3 rounded-lg border border-gray-200"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            Qty: {item.quantity || 1}
                          </p>
                        </div>
                        <span className="font-bold text-gray-800">
                          $
                          {((item.price || 0) * (item.quantity || 1)).toFixed(
                            2
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Info Message */}
                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    📱 You'll receive notifications about your order status
                  </p>
                </div>
              </div>
            ) : (
              // Preparing Order View
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-yellow-100 rounded-full mb-6 animate-pulse">
                    <IoFastFood className="w-16 h-16 text-yellow-600" />
                  </div>
                  <h1 className="text-4xl font-bold text-gray-800 mb-3">
                    Preparing Your Order
                  </h1>
                  <p className="text-gray-600 text-lg mb-6">
                    Our chef is working magic in the kitchen! 👨‍🍳
                  </p>

                  {/* Animated Dots */}
                  <div className="flex justify-center gap-3 mb-8">
                    <div
                      className="w-4 h-4 bg-yellow-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0s" }}
                    ></div>
                    <div
                      className="w-4 h-4 bg-yellow-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-4 h-4 bg-yellow-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <FiPackage className="text-2xl text-gray-600" />
                    <h2 className="text-xl font-bold text-gray-800">
                      Order #{orderId}
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Your order will be ready shortly and delivered to:
                  </p>
                  <p className="text-gray-800 font-semibold">
                    {customerInfo.address}
                  </p>
                </div>

                <button
                  onClick={() => navigate("/")}
                  className="bg-[#00D390] hover:bg-[#00b378] text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  Back to Home
                </button>
              </div>
            )}
          </div>
        </Container>
      </div>
    );
  }

  // Checkout Form View (Before Order Placed)
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#001931] mb-2">Checkout</h1>
            <p className="text-gray-600">
              Complete your order in just a few steps
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - Delivery Information Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <FiPackage className="text-[#00D390]" />
                  Delivery Information
                </h2>
                <form onSubmit={handlePlaceOrder} className="space-y-5">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={customerInfo.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D390] transition"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={customerInfo.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D390] transition"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Delivery Address <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="address"
                      value={customerInfo.address}
                      onChange={handleInputChange}
                      placeholder="Enter your full delivery address"
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D390] transition resize-none"
                      required
                    ></textarea>
                  </div>
                </form>
              </div>

              {/* Order Items */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <FiShoppingBag className="text-[#00D390]" />
                  Order Items ({getTotalItems()})
                </h2>
                <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                  {cartItems.map((item) => (
                    <div
                      key={item._id}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg text-gray-800 truncate">
                          {item.name}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          ${item.price} × {item.quantity || 1}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="font-bold text-lg text-gray-800">
                          $
                          {((item.price || 0) * (item.quantity || 1)).toFixed(
                            2
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Order Summary
                </h2>

                {/* Pricing Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal:</span>
                    <span className="font-semibold">
                      ${getCartTotal().toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery Fee:</span>
                    <span className="font-semibold text-[#00D390]">Free</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (10%):</span>
                    <span className="font-semibold">
                      ${(getCartTotal() * 0.1).toFixed(2)}
                    </span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-800">
                        Total:
                      </span>
                      <span className="text-3xl font-bold text-[#00D390]">
                        ${(getCartTotal() * 1.1).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handlePlaceOrder}
                    className="w-full bg-[#00D390] hover:bg-[#00b378] text-white font-bold py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg"
                  >
                    Place Order
                  </button>
                  <button
                    onClick={() => navigate("/cart")}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 rounded-xl transition-all"
                  >
                    Back to Cart
                  </button>
                </div>

                {/* Security Info */}
                <div className="mt-6 pt-6 border-t text-center">
                  <p className="text-sm text-gray-500">🔒 Secure Checkout</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Your information is safe with us
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

export default CheckoutPage;
