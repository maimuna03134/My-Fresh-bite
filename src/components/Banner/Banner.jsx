import React from 'react';
import './Banner.css'
import banner_img from "../../assets/bg_img_1.jpg";

const Banner = () => {
    return (
      <div
        className="hero min-h-full mt-10 animate-bannerAnimation"
        style={{
          backgroundImage: `url(${banner_img})`,
          borderRadius: "20px",
        }}
      >
        <div className="hero-overlay rounded-2xl"></div>
        <div className=" text-neutral-content ">
          <div className=" lg:mt-30 py-10 lg:mr-36">
            <h1 className="animate-textPing mb-5 text-5xl font-bold lg:leading-16">
              Order your <br /> favourite food here
            </h1>
            <p className="typing-text sm:my-2 my-5 text-white text-sm leading-7">
              Why wait when your cravings can be satisfied instantly? <br />
              Order now and enjoy hot, fresh food without leaving your couch
            </p>
            <button className="btn bg-amber-200 hover:bg-amber-700 hover:text-amber-100 text-amber-700 fon rounded-full">
              View Menu{" "}
            </button>
          </div>
        </div>
      </div>
    );
};

export default Banner;











