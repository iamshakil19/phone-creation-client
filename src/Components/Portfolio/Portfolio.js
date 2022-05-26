import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import shakil from '../../Assets/shakil.jpg'
import { useNavigate } from 'react-router-dom';
const Portfolio = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Navbar></Navbar>
            <div className='px-5 lg:px-60 my-16'>

                <div className='lg:flex justify-center'>
                    <div class="avatar mx-10">
                        <div class="w-40 lg:w-60 rounded-full ring ring-orange-400 ring-offset-base-100 ring-offset-2">
                            <img src={shakil} alt="" />
                        </div>
                    </div>
                    <div className=''>
                        <p className='mt-5 lg:mt-0'>Name</p>
                        <h2 className='text-xl lg:text-2xl font-bold'>Shakil Ahmed</h2>

                        <p className='mt-3'>Email</p>
                        <h2 className='text-lg font-bold'>shakilahmed.pure@gmail.com</h2>

                        <p className='mt-2'>Number</p>
                        <h2 className='text-lg font-bold'>01877018851</h2>

                        <p className='mt-2'>Address</p>
                        <h2 className='text-lg font-bold'>Mirpur, Dhaka</h2>
                    </div>
                </div>
                <div className='mt-12 grid grid-cols-1 lg:grid-cols-2'>
                    <div className='lg:flex justify-center'>
                        <div>
                            <h2 className='text-lg font-bold'>Education</h2>
                            <p>Institute : Mirpur Polytechnic Institute-MPI</p>
                            <p>Subject : Computer</p>
                            <p>Semester : 4th</p>
                            <p>Expected passing year : 2024</p>
                        </div>
                    </div>
                    <div className='lg:flex justify-center'>
                        <div>
                            <h2 className='text-lg font-bold mt-5 lg:mt-0'>SKILL</h2>
                            <li>MongoDB</li>
                            <li>Express js</li>
                            <li>React js</li>
                            <li>Java script</li>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='text-xl font-bold text-center my-5'>My Projects</h2>

                    <div>
                        <h2 className='text-lg font-bold'>Project 1</h2>
                        <p className='mt-4'>Name</p>
                        <p className='font-bold inline'>Cycle World | </p>
                        <a className='text-blue-500 cursor-pointer underline' target="_blank" href="https://assignment11-a3660.web.app/">Live Link</a>

                        <p className='mt-3'>Overview : </p>

                        <li>JWT and Firebase are used for security and authentication.</li>
                        <li>If you want you can increase the quantity of products, as well as delivery ,delete and add</li>
                        <li>The website uses Express js for BackEnd and MongoDB for the database.</li>

                        <p className='mt-3'>Technology Used : </p>
                        <li>React, JWT, Tailwind ( daisyUI, Flobite, Swiper), Express.js, MongoDB.</li>
                    </div>
                    <div className='mt-10'>
                        <h2 className='text-lg font-bold'>Project 2</h2>
                        <p className='mt-4'>Name</p>
                        <p className='font-bold inline'>Center Of Strength | </p>
                        <a className='text-blue-500 cursor-pointer underline' target="_blank" href="https://assignment10-e4ffa.web.app/">Live Link</a>

                        <p className='mt-3'>Overview : </p>

                        <li>The website uses firebase for authentication..</li>
                        <li>React Router has been used for a better user experience</li>
                        <li>Clicking on the purchase button of the package on the home page will take
                            you to the checkout page and the checkout page has been protected.</li>

                        <p className='mt-3'>Technology Used : </p>
                        <li>React, React router, React firebase hook, Tailwind (daisyUI), React Toastify</li>
                    </div>

                    <div className='mt-10'>
                        <h2 className='text-lg font-bold'>Project 3</h2>
                        <p className='mt-4'>Name</p>
                        <p className='font-bold inline'>Your Next GPU
                            Your Best GPU | </p>
                        <a className='text-blue-500 cursor-pointer underline' target="_blank" href="https://dreamy-gelato-0526f4.netlify.app/">Live Link</a>

                        <p className='mt-3'>Overview : </p>

                        <li>This is a Graphic Card Analysis Website</li>
                        <li>It has customer reviews inside</li>
                        <li>There are also more analysis charts</li>
                        <li>And there are more blogs, about etc</li>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Portfolio;