import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderRow = ({ order, index, setDeleteOrder }) => {
    const {_id ,userName, email, productsName, address, quantity, totalCost, paid, transactionId } = order

    const navigate = useNavigate()

    const navigateToPayment = _id => {
        navigate(`/dashboard/payment/${_id}`)
    }
    return (
        <tr class="hover">
            <th>{index}</th>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{productsName}</td>
            <td>{address}</td>
            <td>{quantity}</td>
            <td>$ {totalCost}</td>
            <td>
{
    transactionId ? transactionId : 'Not Paid Yet'
}
            </td>
            <td>
            {
                !paid &&
                <label onClick={() => setDeleteOrder(order)} for="delete-modal" class="btn btn-xs bg-red-500 border-0 hover:bg-red-600">Cancel</label>
            }
            </td>
            <td>
                {
                    !order.paid &&
                    <button onClick={() => navigateToPayment(_id)} className='btn btn-xs bg-green-500 hover:bg-green-600 border-0 text-white'>Payment</button>
                }
                {
                    order.paid &&
                    <span className='text-green-500 ml-4 font-bold'>Paid</span>
                }
                </td>
        </tr>
    );
};

export default OrderRow;