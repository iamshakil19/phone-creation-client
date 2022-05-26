import React from 'react';
import { useNavigate } from 'react-router-dom';
import learnBg from "../../../Assets/learnBg.jpg"

const LearnMore = () => {
    const navigate = useNavigate()

    const navigateToInfo = () => {
navigate('/aboutUs')
        }
    return (
        <div
            style={{
                background: `url(${learnBg})`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }} className="h-48 md:h-72 lg:h-96">
            <div className='flex justify-center items-center h-48 md:h-72 lg:h-96'>
                <button onClick={navigateToInfo} className='btn btn-outline text-white hover:bg-sky-900 hover:border-0'>Learn More</button>
            </div>
        </div>
    );
};

export default LearnMore;