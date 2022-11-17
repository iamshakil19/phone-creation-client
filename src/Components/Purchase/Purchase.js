import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Purchase = () => {
    const [isDisabled, setDisabled] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    const { partsId } = useParams()
    const [parts, setParts] = useState([])
    const { img, name, minimum, available, price, text } = parts
    useEffect(() => {
        const url = `https://phone-creation-server.up.railway.app/parts/${partsId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])

    const handleOrder = event => {
        event.preventDefault()
        const userName = event.target.userName.value
        const productsName = event.target.productsName.value
        const email = event.target.email.value
        const quantity = event.target.quantity.value
        if (quantity < minimum || quantity > available) {
            setDisabled(true)
            toast.error(`Minimum order ${minimum} pieces and Maximum order ${available} pieces`)
            return
        }
        const totalCost = quantity * price
        const number = event.target.number.value
        const address = event.target.address.value
        const orderData = { userName, productsName, email, quantity, number, address, totalCost }

        fetch('https://phone-creation-server.up.railway.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    event.target.reset()
                    toast.success("Purchase was Successful")
                }
            })
    }

    const navigate = useNavigate()
    const navigateToOrder = () => {
        navigate('/dashboard/myOrders')
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='pt-5 pl-5'>
                <button onClick={navigateToOrder} className='block btn btn-sm border-0 rounded-full'>Your Orders</button>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div>
                    <h2 className='text-3xl lg:text-4xl my-5 font-bold text-center'>Parts Details</h2>
                    <div class="hero">
                        <div class="hero-content flex-col">
                            <div>
                                <img className='w-56 md:w-72 rounded-lg' src={img} alt="" />
                            </div>
                            <div>
                                <h1 class="text-2xl lg:text-3xl font-bold">{name}</h1>
                                <p className='w-60 md:w-96 text-justify mt-2'><span className='font-bold text-lg'>Description: </span>{text}</p>
                                <p className=' mt-2'><span className='font-bold'>Minimum Order: </span><span className='text-blue-900 font-extrabold'>{minimum}</span> pieces</p>
                                <p className=' mt-1'><span className='font-bold'>Available: </span><span className='text-blue-900 font-extrabold'>{available}</span> pieces</p>
                                <p className=' mt-1'><span className='font-bold'>Price: </span>$<span className='text-blue-900 font-extrabold'>{price}</span> per piece</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-3xl lg:text-4xl my-5 font-bold text-center'>Order Form</h2>

                    <form onSubmit={handleOrder} className='flex justify-center mb-16'>
                        <div class="card w-96 bg-base-100 shadow-xl border">
                            <div class="card-body">
                                <h2 class="card-title">{name}</h2>
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input name='userName' value={user?.displayName} type="text" class="input input-bordered w-full max-w-xs input-sm cursor-not-allowed" readOnly />
                                </div>
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input name='email' value={user?.email} type="text" class="input input-bordered w-full max-w-xs input-sm cursor-not-allowed" readOnly />
                                </div>
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Products Name</span>
                                    </label>
                                    <input name='productsName' value={name} type="text" class="input input-bordered w-full max-w-xs input-sm cursor-not-allowed" readOnly />
                                </div>
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Quantity</span>
                                    </label>
                                    <input name='quantity' type="number" class="input input-bordered w-full max-w-xs input-sm" defaultValue={minimum} />
                                </div>
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Number</span>
                                    </label>
                                    <input name='number' placeholder='Enter your phone number' type="number" class="input input-bordered w-full max-w-xs input-sm" required />
                                </div>
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Address</span>
                                    </label>
                                    <input name='address' placeholder='Enter your address' type="text" class="input input-bordered w-full max-w-xs input-sm" required />
                                </div>
                                <input disabled={isDisabled} className='btn mt-3' type="submit" value="Place Order" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Purchase;