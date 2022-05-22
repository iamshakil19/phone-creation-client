import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Summary from '../Summary/Summary';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Slider></Slider>
            <Summary></Summary>
            <Footer></Footer>
        </div>
    );
};

export default Home;