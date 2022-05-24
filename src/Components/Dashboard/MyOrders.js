import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import DeleteModal from './DeleteModal';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const navigate = useNavigate()
    const [deleteOrder, setDeleteOrder] = useState(null)
    const [user, loading] = useAuthState(auth)
    const [isReload, setIsReload] = useState()
    const [orders, setOrders] = useState([])

    const handleLogout = () => {
        localStorage.removeItem('accessToken')
        signOut(auth)
    }

    const email = user?.email
    useEffect(() => {
        fetch(`http://localhost:5000/myOrders?email=${email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    handleLogout()
                    navigate('/')
                }
                return res.json()
            })
            .then(data => {

                setIsReload(!isReload)
                setOrders(data)
            })
    }, [isReload])

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
                            <th>Action</th>
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