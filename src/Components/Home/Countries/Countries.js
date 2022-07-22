import React from 'react';
import bangladesh from '../../../Assets/country/bangladesh.png'
import india from '../../../Assets/country/india.png'
import colombia from '../../../Assets/country/colombia.png'
import brazil from '../../../Assets/country/brazil.png'
import china from '../../../Assets/country/china.png'
import hungary from '../../../Assets/country/hungary.png'
import mexico from '../../../Assets/country/mexico.png'
import newZ from '../../../Assets/country/new.png'
import saudi from '../../../Assets/country/saudi.png'
import usa from '../../../Assets/country/usa.png'
const Countries = () => {
    return (
        <div className='px-5 lg:px-24 mb-20'>
            <h2 className='md:text-4xl text-2xl mb-8 font-bold uppercase text-center'>Buyers Countries</h2>

            <div className='grid gap-3 md:gap-7  grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>

                <div className='flex justify-center' data-aos="fade-up">
                    <div className=' w-36 text-center'>
                        <img className='block mx-auto w-20' src={bangladesh} alt="" />
                        <p className='font-bold'>Bangladesh</p>
                    </div>
                </div>

                <div className='flex justify-center' data-aos="fade-up">
                    <div className=' w-36 text-center'>
                        <img className='block mx-auto w-20' src={colombia} alt="" />
                        <p className='font-bold'>Colombia</p>
                    </div>
                </div>

                <div className='flex justify-center' data-aos="fade-up">
                    <div className=' w-36 text-center'>
                        <img className='block mx-auto w-20' src={brazil} alt="" />
                        <p className='font-bold'>Brazil</p>
                    </div>
                </div>

                <div className='flex justify-center' data-aos="fade-up">
                    <div className=' w-36 text-center'>
                        <img className='block mx-auto w-20' src={india} alt="" />
                        <p className='font-bold'>India</p>
                    </div>
                </div>

                <div className='flex justify-center' data-aos="fade-up">
                    <div className=' w-36 text-center'>
                        <img className='block mx-auto w-20' src={china} alt="" />
                        <p className='font-bold'>China</p>
                    </div>
                </div>

                <div className='flex justify-center' data-aos="fade-up">
                    <div className=' w-36 text-center'>
                        <img className='block mx-auto w-20' src={hungary} alt="" />
                        <p className='font-bold'>Hungary</p>
                    </div>
                </div>

                <div className='flex justify-center' data-aos="fade-up">
                    <div className=' w-36 text-center'>
                        <img className='block mx-auto w-20' src={mexico} alt="" />
                        <p className='font-bold'>Mexico</p>
                    </div>
                </div>
                <div className='flex justify-center' data-aos="fade-up">
                    <div className=' w-36 text-center'>
                        <img className='block mx-auto w-20' src={saudi} alt="" />
                        <p className='font-bold'>Saudi</p>
                    </div>
                </div>
                <div className='flex justify-center' data-aos="fade-up">
                    <div className=' w-36 text-center'>
                        <img className='block mx-auto w-20' src={usa} alt="" />
                        <p className='font-bold'>Usa</p>
                    </div>
                </div>
                <div className='flex justify-center' data-aos="fade-up">
                    <div className=' w-36 text-center'>
                        <img className='block mx-auto w-20' src={newZ} alt="" />
                        <p className='font-bold'>New Zealand</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Countries;