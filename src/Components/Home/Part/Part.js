import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const navigate = useNavigate()
    const { _id, img, name, text, minimum, available, price } = part

    const navigateToPurchase = (_id) => {
        navigate(`/purchase/${_id}`)
    }
    return (
        <div className=''>
            <div class="card max-w-[320px] bg-base-100 shadow-xl mx-auto">
                <figure><img src={img} alt="Shoes" className='w-[95%] rounded-xl' /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p className='text-justify'><span className='font-bold'>Description:</span> {text}</p>
                    <p><span className='font-bold'>Minimum Order:</span> {minimum}</p>
                    <p><span className='font-bold'>Available:</span> {available}</p>
                    <p><span className='font-bold'>Price:</span> ${price}</p>
                    <div class="card-actions justify-end">
                        <button onClick={() => navigateToPurchase(_id)} class="btn border-0">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Part;