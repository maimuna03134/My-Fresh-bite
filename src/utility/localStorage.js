import Swal from "sweetalert2";

const CART_KEY = "cartedItems";

export const loadCartItems = () => {
  try {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const addToCart = (item, quantity = 1) => {
  const cartedItems = loadCartItems();
  const existingItem = cartedItems.find((i) => i._id === item._id);

  if (existingItem) {
    updateCartItem(item, quantity);
    return;
  }

  const updatedItems = [...cartedItems, { ...item, quantity }];
  localStorage.setItem(CART_KEY, JSON.stringify(updatedItems));

  // Dispatch event for reactive updates
  window.dispatchEvent(new Event("cartUpdated"));

  Swal.fire({
    toast: true,
    position: "top-end",
    icon: "success",
    title: `You added ${item.name} to cart`,
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });
};

export const updateCartItem = (item, quantityChange = 1) => {
  const cartedItems = loadCartItems();
  const existingItem = cartedItems.find((i) => i._id === item._id);

  if (!existingItem) return addToCart(item, 1);

  const newQuantity = existingItem.quantity + quantityChange;

  if (newQuantity <= 0) {
    removeFromCart(item._id, "decrease");
    return;
  }

  const updatedItems = cartedItems.map((i) =>
    i._id === item._id ? { ...i, quantity: newQuantity } : i
  );
  localStorage.setItem(CART_KEY, JSON.stringify(updatedItems));

  window.dispatchEvent(new Event("cartUpdated"));

  Swal.fire({
    toast: true,
    position: "top-end",
    icon: "success",
    title:
      quantityChange > 0
        ? `Quantity of ${item.name} updated to ${newQuantity}`
        : `You decreased ${item.name} quantity`,
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });
};

export const removeFromCart = (_id, type = "remove") => {
  const cartedItems = loadCartItems();
  const updatedItems = cartedItems.filter((i) => i._id !== _id);
  localStorage.setItem(CART_KEY, JSON.stringify(updatedItems));

  window.dispatchEvent(new Event("cartUpdated"));

  Swal.fire({
    toast: true,
    position: "top-end",
    icon: "success",
    title:
      type === "remove"
        ? "Item removed from cart"
        : "Item quantity decreased to 0",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });
};

export const clearCart = () => {
  localStorage.removeItem(CART_KEY);
  window.dispatchEvent(new Event("cartUpdated"));

  Swal.fire({
    toast: true,
    position: "top-end",
    icon: "success",
    title: "Cart cleared",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });
};
