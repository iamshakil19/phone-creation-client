import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const OrderDeleteModal = ({ deleteOrders, setDeleteOrders, refetch }) => {
    const {_id} = deleteOrders
    const handleDeleteOrder = () => {
        const url = `http://localhost:5000/order/${_id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    setDeleteOrders(null)
                    toast.success("Order Deleted")
                    
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="product-delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete this order ?</h3>
                    <p class="py-4">Once you delete it, you can,t bring it back.</p>
                    <div class="modal-action">
                        <button onClick={() => handleDeleteOrder(_id)} className='btn bg-red-500 border-0 hover:bg-red-600'>Delete</button>
                        <label for="product-delete-modal" class="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default OrderDeleteModal;