import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset, getValues } = useForm();

    const imgStorageKey = 'e0a4694ec8b6bd581ad12f0cf38969b4';

    const onSubmit = async data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const products = {
                        name: data.name,
                        minimum: data.minimum,
                        available: data.available,
                        price: data.price,
                        text: data.text,
                        img: img
                    }

                    fetch('https://dry-gorge-94241.herokuapp.com/parts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(products)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log(inserted);
                            if (inserted.insertedId) {
                                toast.success('Product successfully added')
                                reset();
                            }
                            else {
                                toast.error('Failed to add products');
                            }
                        })

                }

            })
    };
    return (
        <div className='px-5 flex justify-center'>

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Add Products</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter your Name" class="input input-bordered w-full max-w-xs input-sm focus:outline-none"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Minimum Order</span>
                            </label>
                            <input type="number" placeholder="Enter minimum order quantity" class="input input-bordered w-full max-w-xs input-sm focus:outline-none"
                                {...register("minimum", {
                                    required: {
                                        value: true,
                                        message: 'Minimum is required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.minimum?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimum.message}</span>}
                            </label>
                        </div>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Available Stock</span>
                            </label>
                            <input type="number" placeholder="Enter available quantity" class="input input-bordered w-full max-w-xs input-sm focus:outline-none"
                                {...register("available", {
                                    required: {
                                        value: true,
                                        message: 'Available is required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.available?.type === 'required' && <span className="label-text-alt text-red-500">{errors.available.message}</span>}
                            </label>
                        </div>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="Enter price per piece" class="input input-bordered w-full max-w-xs input-sm focus:outline-none"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'Price is required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                            </label>
                        </div>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Description</span>
                            </label>
                            <textarea type="text" placeholder="Enter product description" class="input input-bordered w-full max-w-xs focus:outline-none"
                                {...register("text", {
                                    required: {
                                        value: true,
                                        message: 'Description is required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.text?.type === 'required' && <span className="label-text-alt text-red-500">{errors.text.message}</span>}
                            </label>
                        </div>

                        <div class="form-control w-full max-w-xs mt-3">
                            <label htmlFor="url" className='bg-green-100 text-center py-2 border-2 border-dashed border-green-400 rounded-lg cursor-pointer'>Upload Image</label>

                            <input type="file" placeholder="Enter product description" id='url' class="input input-bordered w-full max-w-xs hidden"
                                {...register("img", {
                                    required: {
                                        value: true,
                                        message: 'Image is required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
                            </label>
                        </div>

                        <input className='btn w-full max-w-xs rounded-3xl my-3' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;