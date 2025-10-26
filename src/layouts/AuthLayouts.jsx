import React from 'react';
import Navbar from '../components/Header/Navbar';
import Container from '../components/Container/Container';
import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer';

const AuthLayouts = () => {
    return (
      <div className="bg-[#ecf2ff]">
        <header>
          <Navbar />
        </header>
        <Container>
                <main className="my-10">
                    <Outlet />
                </main>
                
            </Container>
            <footer>
                <Footer/>
            </footer>
      </div>
    );
};

export default AuthLayouts;