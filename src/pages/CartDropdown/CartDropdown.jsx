import React, { useEffect, useState } from "react";
import {
  loadCartItems,
  updateCartItem,
  removeFromCart,
  clearCart,
} from "../../utility/localStorage";

const CartDropdown = () => {
  const [cartItems, setCartItems] = useState(loadCartItems());

  const refreshCart = () => setCartItems(loadCartItems());

  useEffect(() => {
    window.addEventListener("cartUpdated", refreshCart);
    return () => window.removeEventListener("cartUpdated", refreshCart);
  }, []);

  const handleIncrease = (item) => updateCartItem(item, 1);
  const handleDecrease = (item) => updateCartItem(item, -1);
  const handleRemove = (id) => removeFromCart(id);
  const handleClear = () => clearCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!cartItems || cartItems.length === 0)
    return (
      <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded p-4 z-50">
        <p className="text-center text-gray-500">Your cart is empty 😢</p>
      </div>
    );

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white shadow-xl rounded-lg p-4 z-50">
      <h2 className="text-lg font-bold mb-4">Your Cart</h2>

      <div className="flex flex-col gap-3 max-h-72 overflow-y-auto">
        {cartItems.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div className="flex flex-col">
              <span className="font-semibold">{item.name}</span>
              <span className="text-gray-500 text-sm">
                ৳{item.price.toFixed(2)} x {item.quantity} = ৳
                {(item.price * item.quantity).toFixed(2)}
              </span>
              <div className="flex gap-2 mt-1">
                <button
                  onClick={() => handleDecrease(item)}
                  className="px-2 bg-red-200 rounded hover:bg-red-300"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleIncrease(item)}
                  className="px-2 bg-green-200 rounded hover:bg-green-300"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => handleRemove(item._id)}
              className="text-red-500 font-bold text-lg hover:text-red-600"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4 border-t pt-3">
        <div className="flex justify-between font-semibold text-gray-700">
          <span>Total:</span>
          <span>৳{totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mt-3">
          <button
            onClick={handleClear}
            className="w-full mr-2 bg-red-500 hover:bg-red-600 text-white rounded py-2 text-sm"
          >
            Clear Cart
          </button>
          <button className="w-full ml-2 bg-amber-500 hover:bg-amber-600 text-white rounded py-2 text-sm">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
