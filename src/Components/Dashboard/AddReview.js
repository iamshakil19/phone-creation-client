import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user, loading] = useAuthState(auth)
    const handleReview = event => {
        event.preventDefault()
        const rating = event.target.rating.value
        const text = event.target.text.value
        const img = user?.photoURL
        const reviewData = { rating, text, img }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    event.target.reset()
                    toast.success("Review Added Successfully")
                }
            })

    }
    return (
        <div className='flex justify-center px-5'>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Add Review</h2>
                    <form onSubmit={handleReview}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Rating</span>
                            </label>
                            <input type="number" name='rating' min={1} max={5} placeholder="Out of 5" class="input input-bordered w-full max-w-xs input-sm" />
                        </div>
                        <div class="form-control w-full max-w-xs mt-3">
                            <label class="label">
                                <span class="label-text">Review Text</span>
                            </label>
                            <textarea type="number" name='text' min={1} max={5} placeholder="Type your text" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <input className='btn btn-sm w-full mt-7' type="submit" value="Post" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;