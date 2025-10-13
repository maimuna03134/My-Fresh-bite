

import React from "react";

import { IoStarHalf } from "react-icons/io5";
import { addToCart } from "../../utility/localStorage";
import Swal from "sweetalert2";
import {  Link } from "react-router";
import { BsFillInfoCircleFill } from "react-icons/bs";

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

  // const handleOrderNow = () => {
  //   alert(`Ordering ${name} now...`);
  // };

  return (
    <div className="food-item card shadow-lg pb-4 relative rounded-xl bg-white hover:scale-105 transition ease-in-out border border-[#D8B8B1]">
      <div className="relative">
        <figure>
          <img
            className="object-cover w-[350px] h-[200px] rounded-t-xl cursor-pointer "
            src={image}
            alt={name}
          />
        </figure>
        <Link
          to={`/menu/${item._id}`}
          className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all duration-300 hover:scale-110"
          title="View Details"
        >
          <BsFillInfoCircleFill className="text-[#FF6B35]" size={20} />
        </Link>
      </div>

      {/* Food Details */}
      <div className="card-body p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className=" text-amber-600 hover:text-amber-700 text-lg font-semibold cursor-pointer">
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

          <Link to='/order'
            // onClick={handleOrderNow}
            className="btn btn-outline bg-gradient-to-br from-green-300 to-amber-700 text-white font-bold "
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
