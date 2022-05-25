import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AddProduct = () => {

    const handleProducts = event => {
        event.preventDefault()
        const name = event.target.productsName.value;
        const available = event.target.stock.value;
        const minimum = event.target.minimum.value;
        const price = event.target.price.value;
        const text = event.target.text.value;
        const img = event.target.img.value;

        const products = { name, available, minimum, price, text, img }
        
        fetch('http://localhost:5000/parts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    event.target.reset()
                    toast.success("Product Added Successfully")
                }
            })
    }
    return (
        <div className='flex justify-center'>
            <div class="card w-96 bg-base-100 shadow-xl border">
                <div class="card-body">
                    <h2 class="card-title">Add Your Products</h2>

                    <form onSubmit={handleProducts}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Products Name</span>
                            </label>
                            <input name='productsName' type="text" placeholder="Enter products name" class="input input-sm focus:outline-none w-full max-w-xs input-bordered" required />
                        </div>

                        <div class="form-control w-full max-w-xs mt-3">
                            <label class="label">
                                <span class="label-text">Available Stock</span>
                            </label>
                            <input name='stock' type="number" placeholder="Enter available quantity" class="input input-sm input-bordered w-full max-w-xs focus:outline-none" required />
                        </div>

                        <div class="form-control w-full max-w-xs mt-3">
                            <label class="label">
                                <span class="label-text">Minimum Quantity</span>
                            </label>
                            <input name='minimum' type="number" placeholder="Enter minimum order quantity" class="input input-sm input-bordered w-full max-w-xs focus:outline-none" required />
                        </div>

                        <div class="form-control w-full max-w-xs mt-3">
                            <label class="label">
                                <span class="label-text">Price</span>
                            </label>
                            <input name='price' type="number" placeholder="Enter products price" class="input input-sm input-bordered w-full max-w-xs focus:outline-none" required />
                        </div>

                        <div class="form-control w-full max-w-xs mt-3">
                            <label class="label">
                                <span class="label-text">Description</span>
                            </label>
                            <textarea name='text' type="text" placeholder="Enter product Description" class="input input-bordered w-full max-w-xs focus:outline-none" required />
                        </div>

                        <div class="form-control w-full max-w-xs mt-3">
                            <label class="label">
                                <span class="label-text">Image Link</span>
                            </label>
                            <input name='img' type="text" placeholder="Enter image link" class="input input-sm input-bordered w-full max-w-xs focus:outline-none" required />
                        </div>

                        {/* <div class="form-control w-full max-w-xs mt-3">
                            <label class="label">
                                <span class="label-text">Attachments</span>
                            </label>

                            <input onChange={handleFileChange} name='file' id='img' type="file" placeholder="Enter products price" class="input input-sm input-bordered w-full max-w-xs border-dotted border-2 bg-green-100 focus:outline-none cursor-pointer" required />
                            <label for="img" className='border-dotted border-2 bg-green-100 border-green-500 rounded-lg py-1 text-center'>
                                Upload Image
                            </label>
                        </div> */}
                        <div className=' text-center mt-7'>
                            <input className='btn btn-sm w-2/4' type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;