import React from 'react';
import { NavLink } from 'react-router-dom';

const Navber = () => {
    return (
        <div class="navbar bg-base-300 md:px-20 fixed top-0 z-10">
            <div class="flex-1">
                <NavLink to='/'>
                    <p  class="font-bold md:text-3xl"><span className='text-primary'>dihan</span>TECH</p>
                </NavLink>
            </div>
            <ul className='space-x-3'>
                <li><NavLink to='/blog'>Blog</NavLink></li>
                <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                <li><NavLink to='/login'>Login</NavLink></li>
                <li>
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=33791" />
                            </div>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
                            <li>
                                <a class="justify-between">
                                    Profile
                                    <span class="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </li>




            </ul>
        </div>
    );
};

export default Navber;