import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Review from '../Review/Review';

const Reviews = () => {

    const { data: reviews, isLoading } = useQuery(['allReviews'], () => fetch('https://phone-creation-server.up.railway.app/reviews', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))

    const latestReviews = reviews?.slice(0, 6)

    return (
        <div className='lg:px-24 mx-auto text-center my-24'>
            <h2 className='md:text-4xl text-2xl mb-8 font-bold uppercase'>Latest Customer Reviews</h2>
            <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                {
                    latestReviews?.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;