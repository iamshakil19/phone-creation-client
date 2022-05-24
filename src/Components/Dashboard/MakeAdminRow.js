import React from 'react';

const MakeAdminRow = ({user, index}) => {
    return (
        <tr>
            <th>{index}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><button className='btn btn-xs'>Admin</button></td>
            <td>Blue</td>
        </tr>
    );
};

export default MakeAdminRow;