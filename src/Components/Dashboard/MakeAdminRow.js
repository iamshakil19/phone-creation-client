import React from 'react';
import toast from 'react-hot-toast';

const MakeAdminRow = ({ user, index, refetch, setDeleteUser }) => {
    const { _id, email, role } = user
    const makeAdmin = () => {
        fetch(`https://phone-creation-server.up.railway.app/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully made an admin')
                    refetch()
                }
            })
    }
    return (
        <tr class="hover">
            <th>{index}</th>
            <td>{_id}</td>
            <td>{user.email}</td>
            <td>
                {
                    role !== 'admin' &&
                    <button onClick={makeAdmin} className='btn btn-xs bg-green-600 border-0 hover:bg-green-700'>Admin</button>
                }
            </td>
            <td>
                <label onClick={() => setDeleteUser(user)} for="admin-delete-modal" class="btn btn-xs bg-red-500 border-0 hover:bg-red-600">Delete</label>
            </td>
        </tr>
    );
};

export default MakeAdminRow;