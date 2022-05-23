import React from 'react';

const Review = ({ review }) => {
    const { img, name, text, rating } = review
    return (
        <div className='shadow-lg w-56 text-center p-5 mb-5 rounded-lg h-72 mx-auto'>
            <div class="avatar">
                <div class="w-14 rounded-full">
                    <img src={img} alt="" />
                </div>
            </div>
            <h3 className='font-bold mb-2'>{name}</h3>
            <p className='mb-2'><span className='font-bold'>Rating:</span> {rating} / 5</p>
            <p className=''>{text}</p>
        </div>
    );
};

export default Review;