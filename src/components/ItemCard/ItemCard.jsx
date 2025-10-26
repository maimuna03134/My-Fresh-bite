import React from "react";
import { addToCart } from "../../utility/localStorage";
import Swal from "sweetalert2";
import { Link } from "react-router";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const ItemCard = ({ item,index }) => {
  const { image, name, rating, description, price } = item || {};

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
    <div
      key={item._id}
      data-aos="fade-up"
      data-aos-delay={index * 100}

      className="food-item card pb-4 relative rounded-xl    hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="relative mt-4 md:mt-0 ">
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
      <div className="card-body p-4 text-center md:text-start">
        <div className="mb-2">
          <h2 className=" text-amber-600 hover:text-amber-700 text-lg font-semibold cursor-pointer">
            {name}
          </h2>
        </div>

        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <div className="flex flex-col md:flex-row items-center justify-between mb-2">
          <p className="text-base text-amber-600 font-semibold">৳ {price}</p>
          <div className="flex items-center gap-1 text-yellow-500">
            {/* 5 Stars */}
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < Math.round(rating) ? "text-yellow-500" : "text-gray-300"
                }
              />
            ))}
            <span className="ml-1 text-gray-700 font-semibold">
              {rating.toFixed(1)}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 justify-center">
          <button
            onClick={handleAddToCart}
            className="btn btn-outline bg-gradient-to-br from-[#DC5F3F] to-[#D8B8B1] text-white font-bold"
          >
            Add to Cart
          </button>

          <Link
            to="/order"
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
