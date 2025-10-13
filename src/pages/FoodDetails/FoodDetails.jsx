import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useItems from '../../hooks/useItems';
import ErrorPage from '../ErrorPage/ErrorPage';
import Loader from '../../components/Loader/Loader';
import ErrorItemsPath from '../ErrorItemsPath/ErrorItemsPath';
import Container from '../../components/Container/Container';

const FoodDetails = () => {
   const { id } = useParams();
    const { items, loading, error } = useItems();
    const [item, setItem] = useState(null);
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setShowLoader(false);
        }, 500);
        return () => clearTimeout(timeOut);
    }, []);

    useEffect(() => {
      if (items.length > 0) {
        const foundItem = items.find(
          (food) => food._id.toString() === id.toString()
        );
        setItem(foundItem || null);
      }
    }, [items, id]);
  
 if (error) {
   return <ErrorPage/>
 }
   if (loading || showLoader) {
     return <Loader />;
   }
  if (!item) {
    return <ErrorItemsPath></ErrorItemsPath>;
  }

    const {
        image,
        name,
        discountPrice,
        price,
    
        ingredients,
        description,
    } = item || {};
    console.log(item)
    return (
      <Container>
        <div className=" p-6 bg-[#FFF8F0] rounded-sm shadow-2xl my-20">
          <div className="flex flex-col md:flex-row gap-10 ">
            {/* Left: Image */}
            <div className="md:w-1/2">
              <img
                src={image}
                alt={name}
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>

            {/* Right: Details */}
            <div className="md:w-1/2 flex flex-col gap-4">
              <h1 className="text-4xl font-extrabold text-gray-900">{name}</h1>
              <p className="text-xl text-[#D90429] font-bold">
                ৳ {discountPrice}{" "}
                <span className="line-through text-gray-400">৳ {price}</span>
              </p>

              <p className="text-gray-700 leading-relaxed">{description}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {ingredients?.map((ing, index) => (
                  <span
                    key={index}
                    className="bg-[#FF9F1C33] text-[#FF6B35] px-3 py-1 rounded-full text-sm"
                  >
                    {ing}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                <button className="bg-[#FF6B35] hover:bg-[#D94F1B] text-white px-6 py-3 rounded-lg font-bold">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
};

export default FoodDetails;


// import React from 'react';
// import { useParams } from 'react-router';
// import useItems from '../../hooks/useItems';

// const FoodDetails = () => {


//     const { id } = useParams();
//     const {items,loading,error} = useItems();
//      const item = items.find((food) => food._id.toString() === id.toString());

//    if (loading) {
//      return <h2 className="text-center text-blue-500">Loading item...</h2>;
//    }

//    if (error) {
//      return <h2 className="text-center text-red-500">Error loading data!</h2>;
//     }
    

//     return (
//         <div>
//             <h1>{ item.name}</h1>
//         </div>
//     );
// };

// export default FoodDetails;