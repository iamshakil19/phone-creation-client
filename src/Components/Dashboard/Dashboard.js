import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div class="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content flex flex-col items-center justify-center">

                        <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    </div>
                    <div class="drawer-side">
                        <label for="my-drawer-2" class="drawer-overlay"></label>
                        <ul class="menu p-4 overflow-y-auto w-60 bg-base-200 text-base-content">

                            <li><a>My Orders</a></li>
                            <li><a>Add Review</a></li>
                            <li><a>My Profile</a></li>
                        </ul>

                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Dashboard;