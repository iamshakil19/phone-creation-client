import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div class="drawer drawer-mobile">
                    <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                    <div className="drawer-content">
                        <h2 className='text-3xl font-bold text-indigo-900 mt-3 ml-3 '>Dashboard</h2>
                        <Outlet></Outlet>

                    </div>
                    <div class="drawer-side">
                        <label for="dashboard-sidebar" class="drawer-overlay"></label>
                        <ul class="menu p-4 overflow-y-auto w-60 bg-base-200 text-base-content">
                            <li><Link to="/dashboard">My Profile</Link></li>
                            {!admin &&
                                <>
                                    <li><Link to="/dashboard/myOrders">My Orders</Link></li>
                                    <li><Link to="/dashboard/addReview">Add Review</Link></li>
                                </>
                            }

                            {admin &&
                                <>
                                    <li><Link to="/dashboard/addProducts">Add Products</Link></li>
                                    <li><Link to="/dashboard/manageOrders">Manage Orders</Link></li>
                                    <li><Link to="/dashboard/manageProducts">Manage Products</Link></li>
                                    <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>
                                </>
                            }

                        </ul>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Dashboard;