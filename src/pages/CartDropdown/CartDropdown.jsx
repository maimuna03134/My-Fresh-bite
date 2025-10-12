import React, { useEffect, useState } from 'react';
import Container from '../../components/Container/Container';
import { loadCartItems, removeFromCart } from '../../utility/localStorage';
import { IoStar } from 'react-icons/io5';
import ErrorPage from '../ErrorPage/ErrorPage';
import Loader from '../../components/Loader/Loader';


const CartDropdown = () => {
  const [cartedItems, setCartedItems] = useState([]);
  const [showLoader, setShowLoader] = useState(true);
  const [error, setError] = useState(false);

  
  useEffect(() => {
    const timeOut = setTimeout(() => {
      try {
        const items = loadCartItems();
        setCartedItems(items);
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setShowLoader(false)
      }
    },500)
    return () => clearTimeout(timeOut);
  }, []);

  const handleRemove = (item) => {
    try {
      removeFromCart(item);
      setCartedItems(loadCartItems());
    } catch (err) {
      console.error("Failed to remove item:", err);
      setError(true);
    }
  };

  if (error) return <ErrorPage />;
  if (showLoader) return <Loader />;
  if (!showLoader && cartedItems.length === 0) {
    return (
      <Container>
        <h2 className="text-center text-2xl mt-10">Your cart is empty!</h2>
      </Container>
    );
  }


  return (
    <div>
      <Container>
        <div className="py-12">
          <div className="text-center py-6 mb-5">
            <h1 className="text-3xl font-bold text-[#001931]">
              Your Carted Items
            </h1>
            <p className="text-gray-500 mt-3">
              {" "}
              Review the items you added to your cart 😊
            </p>
          </div>

          <div className="flex flex-col gap-4 p-4 lg:p-0">
            <div className="flex justify-between items-center px-3  lg:px-0">
              <p className="text-lg  font-semibold ">
                {cartedItems.length} Items found
              </p>
              {/* <div className="dropdown dropdown-start">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn md:mr-3 m-1 flex justify-center gap-3 text-gray-600 border-gray-300"
                >
                  Sort by : <IoIosArrowDown className="text-lg" />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <a
                      onClick={() => setSortOrder("high-low")}
                      className={
                        sortOrder === "high-low"
                          ? "font-bold text-[#632EE3]"
                          : ""
                      }
                    >
                      High-Low
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setSortOrder("low-high")}
                      className={
                        sortOrder === "low-high"
                          ? "font-bold text-[#632EE3]"
                          : ""
                      }
                    >
                      Low-High
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>

            {cartedItems.map((item) => (
              <div
                key={item._id}
                className="flex justify-between items-center bg-white rounded-lg shadow-sm border border-gray-100 py-3 px-4 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md "
                  />
                  <div>
                    <h2 className="font-semibold text-lg text-[#001931]">
                      {item.name}
                    </h2>
                    <p className="text-gray-500 text-sm">{item.Description}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm font-medium">
                      {/* <span className="flex items-center gap-1 text-[#00D390]">
                       {}
                    </span> */}
                      <span className="flex items-center gap-1 text-[#FF8811]">
                        <IoStar /> {item.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleRemove(item)}
                  className="bg-[#00D390] hover:bg-red-600 text-white px-3 py-1 rounded-md font-medium hover:opacity-80 transition-all"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartDropdown;