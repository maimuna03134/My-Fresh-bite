import React, { useEffect, useState } from 'react';
import Container from '../../components/Container/Container';
import useItems from '../../hooks/useItems';
import { Link } from 'react-router';
import ItemCard from '../../components/ItemCard/ItemCard';
import ErrorItemsPath from '../ErrorItemsPath/ErrorItemsPath';
import Loader from '../../components/Loader/Loader';
import ErrorPage from '../ErrorPage/ErrorPage';

const HomeItemSlice = () => {
   const { items, loading, error } = useItems();
   const [showLoader, setShowLoader] = useState(true);
   const featuredItems = items.slice(0, 4);

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
     return <ErrorItemsPath />;
   }


    return (
         <Container>
                  <div className="text-center py-6 my-10" data-aos="zoom-in-up">
                    <h2 className="text-4xl font-bold text-[#001931]">
                      The Taste You’ll Love
                    </h2>
                    <p className="py-3 text-[#627382] text-sm">
                      Fresh ingredients, timeless recipes, and pure delight in every
                      bite — crafted with care to bring comfort and joy.
                    </p>
                  </div>
        
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                    {featuredItems.map((item, index) => (
                      <div
                        key={item._id}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                      >
                        <ItemCard item={item} />
                      </div>
                    ))}
                  </div>
        
                  <div className="mt-3 flex justify-center lg:justify-end " data-aos="zoom-in-down">
                    <Link
                      className="btn btn-outline bg-gradient-to-br from-green-300 to-amber-700 text-white font-bold"
                      to="/menu"
                    >
                      Show All Items
                    </Link>
                  </div>
                </Container>
    );
};

export default HomeItemSlice;