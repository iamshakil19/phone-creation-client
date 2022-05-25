import React from 'react';

const ManageProductsRow = ({ part, index, setDeleteProducts }) => {
    const { _id, img, name } = part
    return (
        <tr>
            <th>{index}</th>
            <td>{_id}</td>
            <td>{name}</td>
            <td>
                <label onClick={() => setDeleteProducts(part)} for="deleteProductModal" class="btn modal-button btn-xs bg-red-500 hover:bg-red-600 border-0">Delete</label>
            </td>

        </tr>
    );
};

export default ManageProductsRow;