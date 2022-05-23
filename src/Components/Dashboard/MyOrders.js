import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';
import DeleteModal from './DeleteModal';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const [deleteOrder, setDeleteOrder] = useState(null)
    const [user, loading] = useAuthState(auth)
    const [orders, setOrders] = useState([])

    const email = user?.email
    useEffect(() => {
        fetch(`http://localhost:5000/myOrders?email=${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div className='pt-3 px-3'>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Products</th>
                            <th>Address</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Transaction Id</th>
                            <th>Favorite Color</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <OrderRow
                                key={order._id}
                                order={order}
                                index={index + 1}
                                setDeleteOrder={setDeleteOrder}
                            ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteOrder && <DeleteModal
                deleteOrder={deleteOrder}
                setDeleteOrder={setDeleteOrder}
                ></DeleteModal>
            }
        </div>
    );
};

export default MyOrders;