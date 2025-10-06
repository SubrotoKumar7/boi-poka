import React from 'react';
import Navbar from '../../components/header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/footer/Footer';

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Root;