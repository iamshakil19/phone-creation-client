import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const AdminDeleteModal = ({ deleteUser, setDeleteUser, refetch }) => {
    const { _id } = deleteUser
    const handleDeleteOrder = () => {
        const url = `https://dry-gorge-94241.herokuapp.com/user/${_id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    setDeleteUser(null)
                    toast.success("User Deleted")

                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="admin-delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete this user ?</h3>
                    <p class="py-4">Once you delete it, you can,t bring it back.</p>
                    <div class="modal-action">
                        <button onClick={() => handleDeleteOrder(_id)} className='btn bg-red-500 border-0 hover:bg-red-600'>Delete</button>
                        <label for="admin-delete-modal" class="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AdminDeleteModal;