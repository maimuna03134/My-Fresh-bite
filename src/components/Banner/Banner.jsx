import React from 'react';
import './Banner.css'
import { Link } from 'react-router';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: "https://i.ibb.co.com/WNf0H0wg/fine-dining-restaurant-dish.webp",
    title: "Fresh Meals, Right at Your Door 🍕",
    subtitle: "Order your favorite dishes in minutes — hot, fresh, and fast!",
  },
  {
    image:
      "https://i.ibb.co.com/MDW5D69Y/beautiful-tasty-food-plate-romantic-dinner-restaurant-cozy-atmosphere-modern-326376822.jpg",
    title: "Taste the Magic of Local Chefs 👨‍🍳",
    subtitle: "From street food to gourmet — we deliver it all with love.",
  },
  {
    image: "https://i.ibb.co.com/VYCPs0Yx/OIP.webp",
    title: "Craving Something Sweet? 🍰",
    subtitle: "Cakes, pastries, and desserts — freshly baked for your delight!",
  },
  {
    image: "https://i.ibb.co.com/4R5pGsYz/header-img.png",
    title: "Healthy Eating Made Easy 🥗",
    subtitle: "Nutritious meals, balanced flavors — order smart, eat happy!",
  },
  {
    image: "https://i.ibb.co.com/1G6B8CQq/bg-img-1.jpg",
    title: "Late Night Hunger? We Got You 🌙",
    subtitle: "24/7 delivery — because good food never sleeps!",
  },
];


const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 6000 }}
      loop={true}
      className="h-[80vh] w-full my-10"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="h-[80vh] w-full bg-center bg-cover flex flex-col justify-center items-center text-white relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="hero-content text-neutral-content ">
              <div className="relative z-10 text-center px-4 lg:mt-30 py-10 lg:mr-36">
                <h1 className="animate-textPing mb-5 text-3xl sm:text-4xl md:text-5xl font-bold lg:leading-16 ">
                  {slide.title}
                </h1>
                <p className="typing-text text-sm md:text-base leading-5 md:leading-7 text-white my-4">
                  {slide.subtitle}
                </p>
                <Link to="/menu">
                  <button className=" btn bg-amber-200 hover:bg-amber-700 hover:text-amber-100 text-amber-700 fon rounded-full">
                    View Menu{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;











