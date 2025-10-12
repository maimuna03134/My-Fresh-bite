import React from "react";
import wbLogo from "../../assets/food_api_logo.png";
import {
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-6 py-10 mt-14">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="mb-6 md:mb-0">
            <a className="flex items-center gap-2 mb-2">
              <img src={wbLogo} alt="Logo" className="w-[40px] h-[40px]" />
              <span className="text-lg text-green-800 font-bold">
                Fresh<span className="text-amber-700">Bite</span>
              </span>
            </a>
            <p className="text-sm hover:text-amber-600">
              FreshBite delivers fresh and delicious meals straight to your
              doorstep.
            </p>
          </div>

          {/* Company */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-white font-semibold mb-2 hover:text-amber-400">
              Company
            </h4>
            <ul className="space-y-1 text-sm">
              <li className="hover:text-amber-600">About Us</li>
              <li className="hover:text-amber-600">Our Mission</li>
              <li className="hover:text-amber-600">Contact Us</li>
            </ul>
          </div>

          {/* Services */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-white font-semibold mb-2 hover:text-amber-400">
              Services
            </h4>
            <ul className="space-y-1 text-sm">
              <li className="hover:text-amber-600">Menu</li>
              <li className="hover:text-amber-600">Order Online</li>
              <li className="hover:text-amber-600">Special Offers</li>
            </ul>
          </div>

          {/* Information */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-white font-semibold mb-2 hover:text-amber-400">
              Information
            </h4>
            <ul className="space-y-1 text-sm">
              <li className="hover:text-amber-600">Privacy Policy</li>
              <li className="hover:text-amber-600">Terms & Conditions</li>
              <li className="hover:text-amber-600">FAQ</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-2 hover:text-amber-400">
              Follow Us
            </h4>
            <ul className="space-y-1 text-sm cursor-pointer ">
              <li className="flex items-center gap-2 text-gray-300 hover:text-amber-600">
                <FaTwitter
                  className="text-white hover:text-amber-600"
                  size={14}
                />
                <span>@FreshBite</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300 hover:text-amber-600">
                <FaLinkedinIn
                  className="text-white hover:text-amber-600"
                  size={14}
                />
                <span>@FreshBite</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300 hover:text-amber-600">
                <FaFacebookF
                  className="text-white hover:text-amber-600"
                  size={14}
                />
                <span>@FreshBite</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300 hover:text-amber-600">
                <FaEnvelope
                  className="text-white hover:text-amber-600"
                  size={14}
                />
                <a
                  href="mailto:contact@freshbite.com"
                  className="hover:underline"
                >
                  contact@freshbite.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-left md:text-center text-gray-500 text-sm mt-8 hover:text-amber-400">
          © 2025 FreshBite. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
