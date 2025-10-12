import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Container from '../../components/Container/Container';
import useItems from '../../hooks/useItems';
import ErrorPage from '../ErrorPage/ErrorPage';
import Loader from '../../components/Loader/Loader';
import ErrorItemsPath from '../ErrorItemsPath/ErrorItemsPath';
import ItemCard from '../../components/ItemCard/ItemCard';
import { Link } from 'react-router';

const Home = () => {
    const { items, loading, error } = useItems();
    const [showLoader, setShowLoader] = useState(true);
    const featuredItems = items.slice(0, 8);

    useEffect(() => {
      const timeOut = setTimeout(() => {
        setShowLoader(false);
      }, 500);

      return () => clearTimeout(timeOut);
    }, []);

if (error) {
  return <ErrorPage></ErrorPage>;
}

if (loading || showLoader) {
  return <Loader></Loader>;
}

if (!loading && items.length === 0) {
  return <ErrorItemsPath/>;
}

    return (
      <div>
        <Container>
          <div className="">
            <Banner />
          </div>

          <div className="text-center py-6 my-10">
            <h2 className="text-4xl font-bold text-[#001931]">
              The Taste You’ll Love
            </h2>
            <p className="py-3 text-[#627382] text-sm">
              Fresh ingredients, timeless recipes, and pure delight in every
              bite — crafted with care to bring comfort and joy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            {featuredItems.map((item) => (
              <ItemCard key={item._id} item={item} />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              className="btn btn-outline bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-bold"
              to="/menu"
            >
              Show All Items
            </Link>
          </div>
        </Container>
      </div>
    );
};

export default Home;