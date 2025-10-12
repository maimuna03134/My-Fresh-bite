import React from 'react';
import './Banner.css'
import banner_img from "../../assets/bg_img_1.jpg";
import { Link } from 'react-router';

const Banner = () => {
    return (
      <div
        className="hero relative min-h-full mt-10 animate-bannerAnimation"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${banner_img})`,
          borderRadius: "16px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-opacity-40 rounded-2xl"></div>
        <div className="hero-content text-neutral-content ">
          <div className=" lg:mt-30 py-10 lg:mr-36">
            <h1 className="animate-textPing mb-5 text-3xl sm:text-4xl md:text-5xl font-bold lg:leading-16">
              Order your <br /> favourite food here
            </h1>
            <p className="typing-text text-xs sm:text-sm md:text-base leading-5 md:leading-7 text-white lg:mb-2">
              Why wait when your cravings can be satisfied instantly? <br />
              Order now and enjoy hot, fresh food without{" "}
              <span className="block sm:block md:block lg:hidden mb-2 lg:mb-0 ">
                leaving your couch
              </span>
            </p>
            <Link to="/menu">
              <button className=" btn bg-amber-200 hover:bg-amber-700 hover:text-amber-100 text-amber-700 fon rounded-full">
                View Menu{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;











