
// import Swal from "sweetalert2";



// const CART_KEY = "cartedItems";

// export const loadCartItems = () => {
//   try {
//     const data = localStorage.getItem(CART_KEY);
//     return data ? JSON.parse(data) : [];
//   } catch (err) {
//     console.error(err);
//     return [];
//   }
// };

// export const addToCart = (item, quantity = 1) => {
//   const cartedItems = loadCartItems();
//   const existingItem = cartedItems.find((i) => i._id === item._id);

//   if (existingItem) {
//     updateCartItem(item, quantity);
//     return;
//   }

//   const updatedItems = [...cartedItems, { ...item, quantity }];
//   localStorage.setItem(CART_KEY, JSON.stringify(updatedItems));

//   // Dispatch event for reactive updates
//   window.dispatchEvent(new Event("cartUpdated"));

//   Swal.fire({
//     toast: true,
//     position: "top-end",
//     icon: "success",
//     title: `You added ${item.name} to cart`,
//     showConfirmButton: false,
//     timer: 2000,
//     timerProgressBar: true,
//   });
// };

// export const updateCartItem = (item, quantityChange = 1) => {
//   const cartedItems = loadCartItems();
//   const existingItem = cartedItems.find((i) => i._id === item._id);

//   if (!existingItem) return addToCart(item, 1);

//   const newQuantity = existingItem.quantity + quantityChange;

//   if (newQuantity <= 0) {
//     removeFromCart(item._id, "decrease");
//     return;
//   }

//   const updatedItems = cartedItems.map((i) =>
//     i._id === item._id ? { ...i, quantity: newQuantity } : i
//   );
//   localStorage.setItem(CART_KEY, JSON.stringify(updatedItems));

//   window.dispatchEvent(new Event("cartUpdated"));

//   Swal.fire({
//     toast: true,
//     position: "top-end",
//     icon: "success",
//     title:
//       quantityChange > 0
//         ? `Quantity of ${item.name} updated to ${newQuantity}`
//         : `You decreased ${item.name} quantity`,
//     showConfirmButton: false,
//     timer: 2000,
//     timerProgressBar: true,
//   });
// };

// export const removeFromCart = (_id, type = "remove") => {
//   const cartedItems = loadCartItems();
//   const updatedItems = cartedItems.filter((i) => i._id !== _id);
//   localStorage.setItem(CART_KEY, JSON.stringify(updatedItems));

//   window.dispatchEvent(new Event("cartUpdated"));

//   Swal.fire({
//     toast: true,
//     position: "top-end",
//     icon: "success",
//     title:
//       type === "remove"
//         ? "Item removed from cart"
//         : "Item quantity decreased to 0",
//     showConfirmButton: false,
//     timer: 2000,
//     timerProgressBar: true,
//   });
// };

// export const clearCart = () => {
//   localStorage.removeItem(CART_KEY);
//   window.dispatchEvent(new Event("cartUpdated"));

//   Swal.fire({
//     toast: true,
//     position: "top-end",
//     icon: "success",
//     title: "Cart cleared",
//     showConfirmButton: false,
//     timer: 2000,
//     timerProgressBar: true,
//   });
// };





import Swal from "sweetalert2";

const CART_KEY = "cartItems";

// Load cart items
export const loadCartItems = () => {
  try {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

// Add item to cart
export const addToCart = (item,quantity = 1) => {
  const cartItems = loadCartItems();
  try {
    const existingItemIndex = cartItems.findIndex((i) => i._id === item._id);
    
     if (existingItemIndex !== -1) {
      // Item already exists, update quantity
      cartItems[existingItemIndex].quantity += quantity;
      localStorage.setItem(CART_KEY, JSON.stringify(cartItems));

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: `${item.name} quantity updated!`,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    } else {
      // Add new item with quantity
      const updatedCart = [...cartItems, { ...item, quantity }];
      localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: `${item.name} added to cart!`,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    }

    // Dispatch custom event for cart updates
    window.dispatchEvent(new Event("cartUpdated"));
    return true;
  } catch (err) {
    console.error("Error adding to cart:", err);
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "error",
      title: "Failed to add item to cart",
      showConfirmButton: false,
      timer: 2000,
    });
    return false;
  }
}

// Update item quantity in cart
export const updateCartItemQuantity = (itemId, newQuantity) => {
  const cartItems = loadCartItems();

  try {
    if (newQuantity <= 0) {
      // Remove item if quantity is 0 or less
      const item = cartItems.find((i) => i._id === itemId);
      if (item) {
        removeFromCart(item);
      }
      return;
    }

    const updatedCart = cartItems.map((item) =>
      item._id === itemId ? { ...item, quantity: newQuantity } : item
    );

    localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));

    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "Quantity updated!",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
    return true;
  } catch (err) {
    console.error("Error updating quantity:", err);
    return false;
  }
};


// Increase item quantity by 1
export const increaseQuantity = (itemId) => {
  const cartItems = loadCartItems();
  const item = cartItems.find((i) => i._id === itemId);

  if (item) {
    updateCartItemQuantity(itemId, item.quantity + 1);
  }
};

// Decrease item quantity by 1
export const decreaseQuantity = (itemId) => {
  const cartItems = loadCartItems();
  const item = cartItems.find((i) => i._id === itemId);

  if (item) {
    if (item.quantity <= 1) {
      // Confirm before removing
      Swal.fire({
        title: "Remove Item?",
        text: "This will remove the item from your cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#ef4444",
        cancelButtonColor: "#6b7280",
        confirmButtonText: "Yes, remove it",
      }).then((result) => {
        if (result.isConfirmed) {
          removeFromCart(item);
        }
      });
    } else {
      updateCartItemQuantity(itemId, item.quantity - 1);
    }
  }
};



// Remove item from cart
export const removeFromCart = (item) => {
  const cartItems = loadCartItems();

  try {
    const updatedCart = cartItems.filter((i) => i._id !== item._id);
    localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));

    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: `${item.name} removed from cart!`,
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
    return true;
  } catch (err) {
    console.error("Error removing from cart:", err);
    return false;
  }
};

// Clear entire cart
export const clearCart = () => {
  Swal.fire({
    title: "Clear Cart?",
    text: "Are you sure you want to remove all items?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#ef4444",
    cancelButtonColor: "#6b7280",
    confirmButtonText: "Yes, clear cart",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem(CART_KEY);
      window.dispatchEvent(new Event("cartUpdated"));

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Cart cleared!",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    }
  });
};

// Get total items count
export const getCartItemsCount = () => {
  const cartItems = loadCartItems();
  return cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
};

// Get cart total price
export const getCartTotal = () => {
  const cartItems = loadCartItems();
  return cartItems.reduce((total, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = item.quantity || 1;
    return total + price * quantity;
  }, 0);
};


// Check if item exists in cart
export const isInCart = (itemId) => {
  const cartItems = loadCartItems();
  return cartItems.some((item) => item._id === itemId);
};

