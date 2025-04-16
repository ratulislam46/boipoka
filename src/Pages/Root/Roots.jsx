import React from 'react';
import Header from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer'
import { Outlet } from 'react-router';
import Navbar from '../../Components/Header/Navbar';

const Roots = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;