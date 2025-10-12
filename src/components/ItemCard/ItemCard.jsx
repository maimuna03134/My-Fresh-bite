// import React, { useState, useEffect } from "react";
// import {
//   addToCart,
//   removeFromCart,
//   loadCartItems,
// } from "../../utility/localStorage";
// import { assets } from "../../assets/assets";
// import { IoStarHalf } from "react-icons/io5";

// const ItemCard = ({ item }) => {
//   const { image, name, rating, description, price, _id } = item || {};

//   const [isAdded, setIsAdded] = useState(false);

//   // Check if item is in cart on load
//   useEffect(() => {
//     const cartItems = loadCartItems();
//     const exists = cartItems.some((i) => i._id === _id);
//     setIsAdded(exists);
//   }, [_id]);

//   const handleToggle = () => {
//     if (isAdded) {
//       // Remove from cart
//       removeFromCart(_id);
//       setIsAdded(false);
//     } else {
//       // Add to cart
//       addToCart(item, 1);
//       setIsAdded(true);
//     }
//   };

//   return (
//     <div className="food-item card shadow-md pb-4 relative">
//       <figure>
//         <img
//           className="cursor-pointer object-cover w-[350px] h-[200px] rounded-lg p-1 shadow-2xl bg-amber-100"
//           src={image}
//           alt={name}
//         />
//       </figure>

//       {/* Add / Remove Button */}
//       <div className="absolute bottom-4 right-4">
//         <img
//           className="w-8 cursor-pointer shadow-md"
//           onClick={handleToggle}
//           src={isAdded ? assets.add_icon_green : assets.add_icon_white}
//           alt="Add"
//         />
//       </div>

//       {/* Food Details */}
//       <div className="card-body">
//         <div className="flex justify-between items-center mb-2">
//           <h2 className="card-title text-amber-600 hover:text-amber-700 text-base lg:text-xl font-semibold cursor-pointer">
//             {name}
//           </h2>
//           <span className="flex items-center gap-x-1 text-amber-700">
//             {rating} <IoStarHalf />
//           </span>
//         </div>
//         <p className="text-sm text-gray-600">{description}</p>
//         <p className="text-base text-amber-600 font-semibold">
//           ৳ <span>{price}</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ItemCard;

import React from "react";

import { IoStarHalf } from "react-icons/io5";
import { addToCart } from "../../utility/localStorage";
import Swal from "sweetalert2";

const ItemCard = ({ item }) => {
  const { image, name, rating, description, price, _id } = item || {};

  const handleAddToCart = () => {
    addToCart(item, 1); // quantity = 1
    Swal.fire({
      title: `${item.name} to cart!😍`,
      text: "Thanks for adding the item🤗 Please confirm your order quickly ☺️",
      icon: "info",
      confirmButtonColor: "#00D390",
    });
  };

  const handleOrderNow = () => {
    alert(`Ordering ${name} now...`);
  };

  return (
    <div className="food-item card shadow-md pb-4 relative rounded-xl bg-white">
      <figure>
        <img
          className="object-cover w-[350px] h-[200px] rounded-t-xl cursor-pointer"
          src={image}
          alt={name}
        />
      </figure>

      {/* Food Details */}
      <div className="card-body p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-amber-600 hover:text-amber-700 text-lg font-semibold cursor-pointer">
            {name}
          </h2>
          <span className="flex items-center gap-x-1 text-amber-700">
            {rating} <IoStarHalf />
          </span>
        </div>

        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <p className="text-base text-amber-600 font-semibold mb-4">৳ {price}</p>

        {/* Buttons */}
        <div className="flex gap-2 justify-center">
          <button
            onClick={handleAddToCart}
            className="btn btn-outline bg-gradient-to-br from-[#DC5F3F] to-[#D8B8B1] text-white font-bold"
          >
            Add to Cart
          </button>

          <button
            onClick={handleOrderNow}
            className="btn btn-outline bg-gradient-to-br from-green-300 to-amber-700 text-white font-bold "
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
