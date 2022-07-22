import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const navigate = useNavigate()
    const { _id, img, name, text, minimum, available, price } = part
    
 const newText = text.slice(0, 130) + "..."

    const navigateToPurchase = (_id) => {
        navigate(`/purchase/${_id}`)
    }
    return (
        <div className='' data-aos="fade-up">
            <div class="card max-w-[320px] bg-base-100 shadow-xl mx-auto h-[590px] relative border">
                <figure><img src={img} alt="Shoes" className='w-[95%] rounded-xl' /></figure>
                <div class="p-7 ">
                    <h2 class="card-title">{name}</h2>
                    <p className='text-justify mb-3'><span className='font-bold'>Description:</span> {newText}</p>
                    <p><span className='font-bold'>Minimum Order:</span> <span className='text-blue-900 font-extrabold'>{minimum}</span></p>
                    <p><span className='font-bold'>Available:</span> <span className='text-blue-900 font-extrabold'>{available}</span></p>
                    <p><span className='font-bold'>Price:</span> $<span className='text-blue-800 font-extrabold'>{price}</span></p>
                    <div class="card-actions justify-end">
                        <button onClick={() => navigateToPurchase(_id)} class="btn border-0 absolute bottom-5 right-5">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Part;