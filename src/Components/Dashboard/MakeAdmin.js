import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading';
import AdminDeleteModal from './AdminDeleteModal';
import MakeAdminRow from './MakeAdminRow';
const MakeAdmin = () => {
    const [deleteUser, setDeleteUser] = useState(null)
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='px-3 mt-3'>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>UID</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <MakeAdminRow
                                key={user._id}
                                user={user}
                                index={index + 1}
                                refetch={refetch}
                                setDeleteUser={setDeleteUser}
                            ></MakeAdminRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteUser && <AdminDeleteModal
                    deleteUser={deleteUser}
                    setDeleteUser={setDeleteUser}
                    refetch={refetch}
                ></AdminDeleteModal>
            }
        </div>
    );
};

export default MakeAdmin;