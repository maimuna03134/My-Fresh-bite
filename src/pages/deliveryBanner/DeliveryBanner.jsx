import React from "react";
import { FaMotorcycle, FaBox, FaPhone } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import Container from "../../components/Container/Container";
import { Link } from "react-router";
const DeliveryBanner = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <Container>
        <div className="bg-linear-to-br from-[#d7c5c1] to-[#dcd6d9] rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-16">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Delivery Badge */}
              <div className="inline-block">
                <span className="text-red-500 font-bold text-lg italic">
                  Delivery
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-slate-800">A Moments Of</span>
                <br />
                <span className="text-slate-800">Delivered </span>
                <span className="text-red-500">On Right</span>
                <br />
                <span className="text-red-500">Time & Place</span>
              </h1>

              {/* Description */}
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-xl">
                FreshBite is a restaurant, bar and coffee roastery located on a
                busy corner site in Farringdon's Exmouth Market. With glazed
                frontage on two sides of the building, overlooking the market
                and a bustling London inteon.
              </p>

              {/* Order Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="bg-red-50 p-3 rounded-xl">
                    <FaMotorcycle className="w-8 h-8 text-red-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">
                      Delivery Order Num.
                    </p>
                    <p className="text-2xl font-bold text-red-500">
                      123-59794069
                    </p>
                  </div>
                </div>
                <Link to="/order">
                  <button className="btn btn-lg bg-red-500 hover:bg-red-600 text-white border-none rounded-xl px-8 shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative flex items-center justify-center">
              {/* Background Clouds */}
              <div className="absolute top-0 right-20 w-32 h-16 bg-blue-200 rounded-full opacity-30 blur-xl"></div>
              <div className="absolute top-10 right-40 w-24 h-12 bg-blue-200 rounded-full opacity-40 blur-lg"></div>
              <div className="absolute bottom-20 right-10 w-28 h-14 bg-blue-200 rounded-full opacity-30 blur-xl"></div>

              {/* Delivery Scooter Illustration */}
              <div className="relative w-full max-w-lg">
                <img src="https://i.ibb.co.com/spgLFM2F/R.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DeliveryBanner;
