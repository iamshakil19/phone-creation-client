import React from 'react';

const OrderRow = ({ order, index, setDeleteOrder }) => {
    const { userName, email, productsName, address, quantity, totalCost } = order
    return (
        <tr class="hover">
            <th>{index}</th>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{productsName}</td>
            <td>{address}</td>
            <td>{quantity}</td>
            <td>$ {totalCost}</td>
            <td>Not Available</td>
            <td>
            <label onClick={() => setDeleteOrder(order)} for="delete-modal" class="btn btn-xs bg-red-500 border-0 hover:bg-red-600">Cancel</label>
            </td>
            <td><button className='btn btn-xs bg-green-500 hover:bg-green-600 border-0 text-white'>Payment</button></td>
        </tr>
    );
};

export default OrderRow;