import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <h2>THis is home</h2>
            <Footer></Footer>
        </div>
    );
};

export default Home;