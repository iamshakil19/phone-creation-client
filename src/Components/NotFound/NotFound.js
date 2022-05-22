import React from 'react';
import { useNavigate } from 'react-router-dom';
import notFoundImg from '../../Assets/not-found.jpg'
const NotFound = () => {
    const navigate = useNavigate()

    const navigateToHome = () => {
        navigate('/')
    }
    return (
        <div className='mx-auto h-screen'>
            <img className="mt-24 mb-4 sm:mt-16 w-[300px] sm:w-[500px] md:w-[700px] block mx-auto" src={notFoundImg} alt="" />
            <div className='mx-auto text-center'>
                <button onClick={navigateToHome} className="btn mx-auto block text-center btn-sm md:btn">Go Home</button>
            </div>
        </div>
    );
};

export default NotFound;