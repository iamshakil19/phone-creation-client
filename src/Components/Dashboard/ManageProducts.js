import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteProductModal from './DeleteProductModal';
import ManageProductsRow from './ManageProductsRow';

const ManageProducts = () => {
    const [deleteProducts, setDeleteProducts] = useState(null)
    const { data: parts, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/parts', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='px-5'>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parts?.map((part, index) => <ManageProductsRow
                                key={part._id}
                                part={part}
                                index={index + 1}
                                setDeleteProducts={setDeleteProducts}
                            ></ManageProductsRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteProducts && <DeleteProductModal
                deleteProducts={deleteProducts}
                setDeleteProducts={setDeleteProducts}
                    refetch={refetch}
                ></DeleteProductModal>
            }
        </div>
    );
};

export default ManageProducts;