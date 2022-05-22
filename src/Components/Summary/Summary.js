import React from 'react';
import userIcon from '../../Assets/user.png'
import dollarIcon from '../../Assets/dollar.png'
import countryIcon from '../../Assets/country.png'
import reviewIcon from '../../Assets/review.png'
import phoneIcon from '../../Assets/phone.gif'

const Summary = () => {
    return (
        <div className='text-center my-10 text-center lg:px-24'>
            <h2 className='md:text-4xl text-2xl mb-8 font-bold uppercase '>Millions Business Trust Us</h2>
            <div class="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

                <div className='border-2 w-64 h-28 flex items-center justify-center mx-auto rounded-md'>
                    <div class=" flex justify-center items-center">
                        <div>
                            <h5 class="stat-title">Customer</h5>
                            <h2 class="stat-value">1K+</h2>
                            <h6 class="stat-desc">All Time</h6>
                        </div>
                        <div class="">
                            <img className='w-9 ml-3' src={userIcon} alt="" />
                        </div>
                    </div>
                </div>

                <div className='border-2 w-64 h-28 flex items-center justify-center mx-auto rounded-md'>
                    <div class="flex justify-center items-center flex-row-reverse">
                    <div class="stat-figure text-secondary">
                        <img className='w-9' src={dollarIcon} alt="" />
                    </div>
                        <div>
                            <h5 class="stat-title">Our Annual Revenue</h5>
                            <h2 class="stat-value">$1M+</h2>
                            <h6 class="stat-desc">June - June</h6>
                        </div>
                    </div>

                </div>

                <div className='border-2 w-64 h-28 flex items-center justify-center mx-auto rounded-md'>

                    <div class=" flex justify-center items-center">
                        <div>
                            <h5 class="stat-title">Buyers in Countries</h5>
                            <h2 class="stat-value">25</h2>
                            <h6 class="stat-desc">↗︎ 400 (22%)</h6>
                        </div>
                        <div class="stat-figure text-secondary">
                            <img className='w-9' src={countryIcon} alt="" />
                        </div>
                    </div>
                </div>

                <div className='border-2 w-64 h-28 flex items-center justify-center mx-auto rounded-md'>
                    <div class=" flex justify-center items-center">
                        <div>
                            <h5 class="stat-title">Review</h5>
                            <h2 class="stat-value">675</h2>
                            <h6 class="stat-desc">↗︎ 90 (14%)</h6>
                        </div>
                        <div class="stat-figure text-secondary">
                            <img className='w-9 ml-5' src={reviewIcon} alt="" />
                        </div>
                    </div>
                </div>

                <div className='border-2 w-64 h-28 flex items-center justify-center mx-auto rounded-md'>
                    <div class=" flex justify-center items-center">
                        <div>
                            <h5 class="stat-title">Products</h5>
                            <h2 class="stat-value">6</h2>
                            <h6 class="stat-desc">↗︎ 30 (4%)</h6>
                        </div>
                        <div class="stat-figure text-secondary">
                            <img className='w-9' src={phoneIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;