import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Summary from './Summary/Summary';
import Slider from './Slider/Slider';
import Reviews from './Reviews/Reviews';
import Parts from './Parts/Parts';

const Home = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Slider></Slider>
            <Parts></Parts>
            <Summary></Summary>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;