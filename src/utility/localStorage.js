import Swal from "sweetalert2";

// get carted items
export const loadCartItems = () => {
  try {
    const data = localStorage.getItem("cartedItems");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

// add/update an item in cart
export const addToCart = (item, quantity = 1) => {
  const cartedItems = loadCartItems();

  try {
    const existingItem = cartedItems.find((a) => a._id === item._id);

    if (existingItem) {
      // Increase quantity
      const updatedItems = cartedItems.map((a) =>
        a._id === item._id ? { ...a, quantity: a.quantity + quantity } : a
      );
      localStorage.setItem("cartedItems", JSON.stringify(updatedItems));

      Swal.fire({
        title: `${item.name} quantity updated!`,
        text: `Now ${existingItem.quantity + quantity} in cart.`,
        icon: "success",
        confirmButtonColor: "#00D390",
      });
      return;
    }

    // Add new item with quantity
    const updatedItems = [...cartedItems, { ...item, quantity }];
    localStorage.setItem("cartedItems", JSON.stringify(updatedItems));

    Swal.fire({
      title: `${item.name} added to cart! 😍`,
      text: "You can adjust quantity in the cart.",
      icon: "success",
      confirmButtonColor: "#00D390",
    });
  } catch (err) {
    console.log(err);
  }
};

// remove an item from cart
export const removeFromCart = (_id) => {
  const cartedItems = loadCartItems();
  try {
    const updatedItems = cartedItems.filter((a) => a._id !== _id);
    localStorage.setItem("cartedItems", JSON.stringify(updatedItems));

    Swal.fire({
      toast: true,
      position: "top-center",
      icon: "success",
      title: "Item removed from cart ☺️",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  } catch (err) {
    console.log(err);
  }
};
