import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L1AeqHfb8VoLvD9DHCrdxFn3s1pdETuX5YXG4AK8vd3w9NF2zRYxx7K2jHC4CoDpwd8UKQ5Rpb1VEAb7L7cA1TD00dz9UKPwt');
const Payment = () => {
    const { orderId } = useParams()
    const [order, setOrder] = useState({})
    const url = `http://localhost:5000/order/${orderId}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrder(data)
            })
    }, [])

    return (
        <div className='flex justify-center'>
            <div class="card md:w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Hi, {order.userName}</h2>
                    <p className=''>You are paying for the <span className='text-lg font-bold text-green-600'>{order.productsName}</span></p>
                    <p className=''> Please Pay  <span className='text-lg font-bold text-green-600'>${order.totalCost}</span></p>

                    <div className='mt-5'>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm 
                            order={order}
                            />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;