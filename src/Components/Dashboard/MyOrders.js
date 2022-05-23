import React from 'react';

const MyOrders = () => {
    return (
        <div className='pt-3 px-3'>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Products</th>
                            <th>Address</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Transaction Id</th>
                            <th>Favorite Color</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover">
                            <th>1</th>
                            <td>Shakil Ahmed</td>
                            <td>Display</td>
                            <td>Mirpur Dhaka</td>
                            <td>536</td>
                            <td>$15440</td>
                            <td>Not Available</td>
                            <td>Blue</td>
                            <td>Blue</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;