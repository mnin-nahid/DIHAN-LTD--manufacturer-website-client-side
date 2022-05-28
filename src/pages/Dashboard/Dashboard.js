import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile mt-16">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div className="drawer-content">

                <div class=" flex justify-end">
                    <div className='flex justify-between my-2 mx-4'>
                        <h2 className='text-3xl mx-3'>Dashboard</h2>
                        <label for="dashboard-sidebar" class="btn btn-outline btn-sm  lg:hidden">Menu</label>
                    </div>
                </div>
                <Outlet />
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content z-10">
                    <li><a>My Orders</a></li>
                    <li><a>Add A Review</a></li>
                    <li><a>Profile</a></li>
                    <li><a>Manage All Orders</a></li>
                    <li><Link to='addproduct'>Add A Product</Link></li>
                    <li><a>Make Admin</a></li>
                    <li><a>Manage Products</a></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;