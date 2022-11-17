import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import ManageAllOrdersRow from './ManageAllOrdersRow';
import OrderDeleteModal from './OrderDeleteModal';

const ManageAllOrders = () => {
    const [deleteOrders, setDeleteOrders] = useState(null)
    const navigate = useNavigate()
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('https://phone-creation-server.up.railway.app/orders', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="overflow-x-auto px-5">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Products Name</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Status</th>
                            <th>Delivery</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <ManageAllOrdersRow
                                key={orders._id}
                                order={order}
                                refetch={refetch}
                                setDeleteOrders={setDeleteOrders}
                                index={index}
                            ></ManageAllOrdersRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteOrders && <OrderDeleteModal
                    deleteOrders={deleteOrders}
                    setDeleteOrders={setDeleteOrders}
                    refetch={refetch}
                ></OrderDeleteModal>
            }
        </div>
    );
};

export default ManageAllOrders;