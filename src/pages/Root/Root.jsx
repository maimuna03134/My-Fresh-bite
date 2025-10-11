import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/Header/Navbar';

const Root = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Root;