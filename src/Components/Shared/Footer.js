import React from 'react';
import { Link } from 'react-router-dom';
import fbLogo from '../../Assets/fb.png'
import linkedIn from '../../Assets/in.png'
import twitter from '../../Assets/twitter.png'
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='bg-black py-14'>
            <h2 className='text-white text-center text-xl sm:text-2xl md:text-4xl font-serif font-bold mb-16'>Phone Creation</h2>

            <div className='ml-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:mx-auto'>
                <div className='sm:flex sm:justify-center'>
                    <div>
                        <h4 className='text-white font-bold text-[14px] mb-5 uppercase'>The Phone Creation</h4>
                        <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-2'>About Us</Link>
                        <br />
                        <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-2'>News & articles</Link>
                        <br />
                        <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-2'>Our Offers</Link>
                        <br />
                        <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-2'>Custom Order</Link>
                        <br />
                        <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-8'>Support</Link>
                        <br />
                    </div>
                </div>
                <div className='sm:flex sm:justify-center'>
                    <div>
                        <h4 className='text-white font-bold text-[14px] mb-5 uppercase'>Explore Phone Creation</h4>
                        <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-2'>Sale</Link>
                        <br />
                        <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-2'>Our Next Target</Link>
                        <br />
                        <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-2'>Achievement</Link>
                        <br />
                        <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-2'>Subscribers</Link>
                        <br />
                        <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-8'>About Brand</Link>
                        <br />
                    </div>
                </div>
                <div className='sm:flex sm:justify-center'>
                    <div>
                        <h4 className='text-white font-bold text-[14px] mb-5 uppercase'>Customer Service</h4>
                        <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-2'>Payments</Link>
                        <br />
                        <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-2'>Shipping</Link>
                        <br />
                        <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-2'>Online Order Tracking</Link>
                        <br />
                        <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-2'>Refunds & Returns</Link>
                        <br />
                        <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-2'>FAQ</Link>
                        <br />
                        <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-8'>Contact</Link>
                        <br />
                    </div>
                </div>
                <div className='sm:flex sm:justify-center'>
                    <div>
                        <h4 className='text-white font-bold text-[14px] mb-5 uppercase'>Newsletter</h4>
                        <p className='text-gray-400 max-w-[250px] mb-3'>Subscribe now to receive monthly news & personalised offers!</p>
                        <button className='btn btn-sm rounded-full bg-white text-black text-xs hover:bg-gray-400'>Subscribe Now</button>
                    </div>
                </div>
            </div>
            <div style={{ borderBottom: "1px solid gray" }} class=" mx-auto my-5 lg:mx-24 mx-8"></div>
            <div className=' text-gray-400 lg:px-24 px-8 lg:flex justify-around items-center'>
                <div>
                    <p className='lg:text-center'>Copyright © {currentYear} - All right reserved</p>
                </div>
                <div className='flex mt-5 lg:mt-0 justify-center'>
                    <img className='bg-white rounded-full w-8 mx-3' src={fbLogo} alt="" />
                    <img className='bg-white rounded-full w-8 mx-3' src={linkedIn} alt="" />
                    <img className='bg-white rounded-full w-8 mx-3' src={twitter} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;