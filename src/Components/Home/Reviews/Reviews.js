import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

const letestReviews = reviews.slice(0, 8)

    return (
        <div className='lg:px-24 mx-auto text-center my-24'>
            <h2 className='md:text-4xl text-2xl mb-8 font-bold uppercase'>Latest Customer Reviews</h2>
            <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {
                    letestReviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;