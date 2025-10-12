import React, { useState } from "react";

import { assets } from "../../assets/assets";
import { IoStarHalf } from "react-icons/io5";


const ItemCard = ({ item }) => {
    const { image, name, rating, description, price, _id } = item || {};
    console.log(item)
    const [itemCount, setItemCount] = useState(0);
  return (
    <div className="food-item card shadow">
      <div className="relative cursor-pointer">
        <figure>
          <img
            className="cursor-pointer object-cover w-[350px] h-[200px] rounded-lg p-1 shadow-2xl bg-amber-100"
            src={image}
            alt={name}
          />
        </figure>
        {!itemCount ? (
          <img
            className="w-8 absolute bottom-[15px] right-[15px] rounded-[50%]"
            onClick={() => setItemCount((prev) => prev + 1)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="absolute flex items-center gap-3 bottom-[15px] right-[15px] p-1 rounded-[50px] bg-white">
            <img
              className="w-6"
              onClick={() => setItemCount((prev) => prev - 1)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{itemCount}</p>
            <img
              className="w-6"
              onClick={() => setItemCount((prev) => prev + 1)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="card-body">
        <div className="flex justify-between items-center mb-3">
          <h2 className="card-title text-amber-600 hover:text-amber-700 text-base lg:text-xl font-semibold cursor-pointer">
            {name}
          </h2>
          <span className="flex justify-between items-center gap-x-1 text-amber-700">
            {rating} <IoStarHalf />
          </span>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-base text-amber-600 font-semibold">
          ৳ <span>{price}</span>
        </p>
        {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
      </div>
    </div>
  );
};

export default ItemCard;
