import React from 'react';
import Banner from '../../components/Banner/Banner';
import HomeItemSlice from '../itemSlice/HomeItemSlice';
import DeliveryBanner from '../deliveryBanner/DeliveryBanner';


const Home = () => (
  <div>
    {/* hero */}
    <section>
      <Banner />
    </section>
{/* item card slice section*/}
    <section>
      <HomeItemSlice/>
    </section>
    {/* delivery banner section */}
    <section>
      <DeliveryBanner />
    </section>
  </div>
);

export default Home;