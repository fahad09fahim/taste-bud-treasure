import React from 'react';
import Header from '../pages/shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';

const ChefLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default ChefLayout;