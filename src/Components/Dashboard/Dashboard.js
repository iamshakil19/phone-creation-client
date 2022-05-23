import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div class="drawer drawer-mobile">
                    <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                    <div className="drawer-content">
                        <h2 className='text-3xl font-bold text-slate-700 mt-3 ml-3'>Dashboard</h2>
                        <Outlet></Outlet>

                    </div>
                    <div class="drawer-side">
                        <label for="dashboard-sidebar" class="drawer-overlay"></label>
                        <ul class="menu p-4 overflow-y-auto w-56 bg-base-200 text-base-content">
                            <li><Link to="/dashboard">My Orders</Link></li>
                            <li><Link to="/dashboard/addReview">Add Review</Link></li>
                            <li><Link to="/dashboard/profile">My Profile</Link></li>
                        </ul>

                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Dashboard;