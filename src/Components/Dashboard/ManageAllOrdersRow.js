import React from 'react';
import toast from 'react-hot-toast';

const ManageAllOrdersRow = ({ order, refetch, setDeleteOrders, index }) => {
    const {_id, userName, email, address, productsName, quantity, totalCost, paid, status } = order

    let newStatus = "Shipped"
    const handleStatus = () => {
        const payment = {
            status: newStatus
        }
        fetch(`http://localhost:5000/orderStatus/${_id}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    refetch()
                    toast.success("Order successfully shipped")
                })
    }

    return (
        <tr class="hover">
            <th>{index + 1}</th>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{address}</td>
            <td>{productsName}</td>
            <td>{quantity}</td>
            <td>{totalCost}</td>
            <td>
                {
                 (paid === true) ? <div>
                     {
                         status === "Shipped" ? <span className='font-bold text-emerald-500'>{status}</span> : <span className='font-bold text-yellow-500'>{status}</span>
                     }
                 </div> : <span className='font-bold text-red-600'>Not paid</span>
                }
            </td>
            <td>
                {
                    status === "Pending" ? <button onClick={handleStatus} className='btn btn-xs border-0'>Shipping</button> : ""
                }
            </td>
            <td>
                <label onClick={() => setDeleteOrders(order)} for="product-delete-modal" class="btn btn-xs bg-red-500 border-0 hover:bg-red-600">Delete</label>
            </td>
        </tr>
    );
};

export default ManageAllOrdersRow;