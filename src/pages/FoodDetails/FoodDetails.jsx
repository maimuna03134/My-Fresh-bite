import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import useItems from "../../hooks/useItems";
import ErrorPage from "../ErrorPage/ErrorPage";
import Loader from "../../components/Loader/Loader";
import ErrorItemsPath from "../ErrorItemsPath/ErrorItemsPath";
import Container from "../../components/Container/Container";
import { IoMdArrowBack } from "react-icons/io";

const FoodDetails = () => {
  const { id } = useParams();
  const { items, loading, error } = useItems();
  const [item, setItem] = useState(null);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setShowLoader(false);
    }, 500);
    return () => clearTimeout(timeOut);
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      const foundItem = items.find(
        (food) => food._id.toString() === id.toString()
      );
      setItem(foundItem || null);
    }
  }, [items, id]);

  if (error) {
    return <ErrorPage />;
  }
  if (loading || showLoader) {
    return <Loader />;
  }
  if (!item) {
    return <ErrorItemsPath></ErrorItemsPath>;
  }

  const {
    image,
    name,
    discountPrice,
    price,

    ingredients,
    description,
  } = item || {};
  console.log(item);
  return (
    <Container>
      <div className=" p-6 bg-[#FFF8F0] rounded-sm shadow-2xl my-20">
        <div className="flex flex-col md:flex-row gap-10" data-aos="fade-up">
          {/* Left: Image */}
          <div className="w-full md:w-[350px] h-[280px] flex justify-center transition-transform duration-500 hover:scale-105">
            <figure className="w-full h-full" data-aos="fade-up-right">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover shadow-md rounded-xl  "
              />
            </figure>
          </div>

          {/* Right: Details */}
          <div
            className="flex flex-col justify-between flex-1 text-center  lg:text-left"
            data-aos="fade-up-left"
          >
            <Link to="/menu">
              <span className="bg-[#FF9F1C33] text-[#FF6B35] px-3 py-1 rounded-full text-sm   mb-3 font-bold flex items-center justify-center lg:justify-start gap-1 bg-clip-text">
                <IoMdArrowBack />

                <span>See all Menu</span>
              </span>
            </Link>

            <h1 className="text-4xl font-extrabold text-gray-900">{name}</h1>
            <p className="text-xl text-[#D90429] font-bold">
              ৳ {discountPrice}{" "}
              <span className="line-through text-gray-400">৳ {price}</span>
            </p>

            <p className="text-gray-700 leading-relaxed">{description}</p>

            <div className="flex justify-center flex-wrap gap-2 mt-4">
              {ingredients?.map((ing, index) => (
                <span
                  key={index}
                  className="bg-[#FF9F1C33] text-[#FF6B35] px-3 py-1 rounded-full text-sm"
                >
                  {ing}
                </span>
              ))}
            </div>
            <Link to="/cart">
              <div className="flex justify-center lg:justify-start gap-4 mt-4">
                <button className="bg-[#FF6B35] hover:bg-[#D94F1B] text-white px-6 py-3 rounded-lg font-bold ">
                  Order Now
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FoodDetails;

// import React from 'react';
// import { useParams } from 'react-router';
// import useItems from '../../hooks/useItems';

// const FoodDetails = () => {

//     const { id } = useParams();
//     const {items,loading,error} = useItems();
//      const item = items.find((food) => food._id.toString() === id.toString());

//    if (loading) {
//      return <h2 className="text-center text-blue-500">Loading item...</h2>;
//    }

//    if (error) {
//      return <h2 className="text-center text-red-500">Error loading data!</h2>;
//     }

//     return (
//         <div>
//             <h1>{ item.name}</h1>
//         </div>
//     );
// };

// export default FoodDetails;
