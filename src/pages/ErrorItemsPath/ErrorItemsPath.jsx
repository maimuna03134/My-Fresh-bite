import React from 'react';
import itemPathErrorImg from '../../assets/Item_error.png'
const ErrorItemsPath = () => {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <img src={itemPathErrorImg} alt="" className="w-[400px] h-[300px]" />

        <div className="mt-5">
          <h1 className="text-4xl font-bold mb-2 text-gray-800">
            Item Not Found!
          </h1>

          <p className="text-lg text-gray-700 mb-4">
            Oops! Looks like this item doesn’t exist 😅
          </p>

          <p className="text-md text-gray-600">
            Maybe it ran out of stock or got lost in the kitchen 🍳 <br />
            Don’t worry, check other items or go back to the menu 🍔🍕
          </p>
        </div>
        <a
          href="/menu"
          className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition-all"
        >
          Back to Menu 🍽️
        </a>
      </div>
    );
};

export default ErrorItemsPath;