import React from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import ActiveRoute from '../../ActiveRoute/ActiveRoute';
import logo from '../../../Assets/Phone-Creation-black.png'
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
const Navbar = () => {
    const navigate = useNavigate()
const location = useLocation()
    const [user, loading, error] = useAuthState(auth);

    const navigateTologin = () => {
        navigate('/login')
    }
    const handleLogout = () => {
        localStorage.removeItem('accessToken')
        signOut(auth)
    }


    return (
        <div className="">
            <div class="navbar bg-base-300 lg:px-24">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><ActiveRoute to={'/home'}>Home</ActiveRoute></li>
                            <li><ActiveRoute to="/blogs">Blogs</ActiveRoute></li>
                            <li><ActiveRoute to="/portfolio">Portfolio</ActiveRoute></li>
                            <li><ActiveRoute to="/aboutUs">About us</ActiveRoute></li>
                            <>
                                {
                                    user ?
                                        <>
                                            <li><ActiveRoute to="/dashboard" className="">Dashboard</ActiveRoute></li>
                                            <button onClick={handleLogout} className='btn btn-sm'>Log Out</button>
                                        </>
                                        :
                                        <button onClick={navigateTologin} className='btn btn-sm'>Login</button>
                                }
                            </>
                        </ul>
                    </div>
                    <Link to="/" class=" normal-case text-xl w-32 lg:w-44 my-auto block"><img src={logo} alt="" /></Link>
                </div>
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><ActiveRoute to={'/home'} className="text-[17px]">Home</ActiveRoute></li>
                        <li><ActiveRoute to="/blogs" className="text-[17px]">Blogs</ActiveRoute></li>
                        <li><ActiveRoute to="/portfolio" className="text-[17px]">Portfolio</ActiveRoute></li>
                        <li><ActiveRoute to="/aboutUs" className="text-[17px]">About us</ActiveRoute></li>
                        <>
                            {
                                user ?
                                    <>
                                        <li><ActiveRoute to="/dashboard" className="text-[17px]">Dashboard</ActiveRoute></li>
                                        <button onClick={handleLogout} className='btn btn-sm mt-2 ml-3'>Log Out</button>
                                    </>
                                    :
                                    <button onClick={navigateTologin} className='btn btn-sm mt-2 ml-3'>Login</button>
                            }
                        </>
                    </ul>
                </div>
                {
                location.pathname.includes('dashboard') &&
                <div className="navbar-end lg:hidden">
                    <label htmlFor="dashboard-sidebar" tabIndex="1" className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            }
            </div>
        </div>
    );
};

export default Navbar;