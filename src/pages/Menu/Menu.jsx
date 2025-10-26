import React, { useEffect, useState } from 'react';
import Container from '../../components/Container/Container';
import useItems from '../../hooks/useItems';
import ErrorPage from '../ErrorPage/ErrorPage';
import Loader from '../../components/Loader/Loader';
import { GoSearch } from 'react-icons/go';
import ItemCard from '../../components/ItemCard/ItemCard';
import itemNotFound from '../../assets/not_found.png'

const Menu = () => {
    const { items, loading, error } = useItems();
    const [search, setSearch] = useState("");
    const [searchLoading, setSearchLoading] = useState(false);
    const [searchedItems, setSearchedItems] = useState([]);


    useEffect(() => {
      if (!items.length) return;

      setSearchLoading(true);

      const timeOut = setTimeout(() => {
        const term = search.trim().toLocaleLowerCase();
        const filtered = term
          ? items.filter((item) =>
              item.name.toLocaleLowerCase().includes(term)
            )
          : items;
        setSearchedItems(filtered);
        setSearchLoading(false);
      }, 500);

      return () => clearTimeout(timeOut);
    }, [search, items]);

if (error) {
  return <ErrorPage></ErrorPage>;
}

if (loading) {
  return <Loader></Loader>;
}

    return (
      <div className="mt-10">
        <Container>
          <div className="text-center py-6" data-aos="zoom-in">
            <h2 className="text-4xl font-bold text-amber-700  ">
              Explore the Best Dishes Near You 😍😍
            </h2>
            <p className="md:py-5 p-5 md:p-0 text-[#627382] text-sm">
              Fresh meals from near you, ready to enjoy. Taste the flavors
              you’ll love, one dish at a time!
            </p>
          </div>

          {/* search bar */}
          <div className="flex flex-col md:flex-row  justify-between py-5 md:px-5 items-center ">
            <span className="text-[#001931] font-semibold text-[24px]">
              ({searchedItems.length}) Items Found
            </span>
            <label className="input  bg-transparent my-5 md:my-0">
              <GoSearch size={20} color="#627382" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="search Item"
              />
            </label>
          </div>

          {/* loader while searching */}
          <div className={`relative ${searchLoading ? "min-h-screen" : ""}`}>
            {searchLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <Loader></Loader>
              </div>
            )}
          </div>

          {!searchLoading && searchedItems.length === 0 ? (
            <div className="min-h-screen flex flex-col justify-center items-center gap-2">
              <img
                src={itemNotFound}
                alt=""
                className="animate-pulse bg-transparent w-[300px] h-[300px]"
              />
              <div className="text-center">
                <h1 className="text-5xl text-gray-400 text-opacity-70 font-extrabold text-center my-5 ">
                  Oops! We couldn’t find what you’re looking for.
                </h1>
                <p className="md:py-5 p-5 md:p-0 text-[#627382] text-sm">
                  Try searching for your favorite dish and place your order now!
                </p>
              </div>

              <a
                href="/menu"
                className="mt-3 w-fit mx-auto lg:mx-0  bg-gradient-to-br from-[#632EE3] to-[#9F62F2]  text-white font-semibold px-6 py-2 rounded-lg"
              >
                Show All Items
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
              {searchedItems.map((item) => (
                <ItemCard key={item._id} item={item}></ItemCard>
              ))}
            </div>
          )}
        </Container>
      </div>
    );
};

export default Menu;

 {
   /* <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5  ">
            {items.map((item) => {
              if (category === "All" || category === item.category) {
                // return <FoodItem key={item._id} item={item}></FoodItem>;
              }
            })}
          </div> */
 }