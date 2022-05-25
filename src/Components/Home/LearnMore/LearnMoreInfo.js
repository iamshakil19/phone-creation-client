import React from 'react';
import Footer from '../../Shared/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const LearnMoreInfo = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='lg:px-40 mx-auto mb-10 mt-10 px-5'>
                <h2 className='text-2xl font-bold mb-7'>About Phone Creation</h2>
                <p className='pb-5'>
                    Phone Creation is a technology brand officially established on May 4, 2018 by Shakil. The aspiration of Phone Creation is to provide products with a comprehensive superior experience for the young, and Phone Creation is committed to be a trendsetting technology brand.
                </p>
                <p className='pb-5'>
                    Due to the abilities in cutting-edge technologies of smartphones and IoT, Phone Creation brings consumers products with trendsetting technologies, features and trendsetting experiences that are first applied in the price segment.
                </p>
                <p className='pb-5'>
                    At the beginning of 2022, Phone Creation announced its dual driven strategy of “Smartphone + AIoT”. In Jan of 2022, Phone Creation's global users of smartphone reached 1 million and its sales volume of AIoT audio products broke the record of 1 million. According to the statistics of Counterpoint global smartphone shipments in Q1 of 2022, the emerging smartphone brand realme still ranks 5th with year-over-year growth rate of 157% which ranks the first in the world as well. As the world's fastest-growing smartphone brand, realme stands firmly among the mainstream smartphone brands.
                </p>
            </div>
            <div>
            <h2 className='text-2xl font-bold text-center'>Our Goal</h2>
            <div className='border-b-2 w-60 mx-auto '></div>
                <div className='flex justify-center my-8'>
                    <ul class="steps steps-vertical lg:steps-horizontal">
                        <li class="step step-primary">high resolution camera </li>
                        <li class="step step-primary">Exclusively introduce 5G mobile devices</li>
                        <li class="step step-primary">world's Top 5 smartphone brand</li>
                        <li class="step step-primary">Launched new amoled display</li>
                        <li class="step font-bold text-orange-500"></li>
                    </ul>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default LearnMoreInfo;