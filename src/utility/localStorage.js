
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
export const addToCart = (item) => {
  const cartItems = loadCartItems();

  try {
    const isDuplicate = cartItems.some((i) => i._id === item._id);
    if (isDuplicate) {
      Swal.fire({
        title: "Already in Cart",
        text: `${item.name} is already in your cart.`,
        icon: "info",
        confirmButtonColor: "#00D390",
      });
      return;
    }

    const updatedCart = [...cartItems, item];
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
  } catch (err) {
    console.log(err);
  }
};

// Remove item from cart
export const removeFromCart = (item) => {
  const cartItems = loadCartItems(); // ✅ Fixed this line

  try {
    const updatedCart = cartItems.filter((i) => i._id !== item._id);
    localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));

    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: `${item.name} removed from cart!`,
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  } catch (err) {
    console.log(err);
  }
};

// Optional: clear entire cart
export const clearCart = () => {
  localStorage.removeItem(CART_KEY);
  Swal.fire({
    toast: true,
    position: "top-end",
    icon: "success",
    title: "Cart cleared!",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });
};
