import React from 'react';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile mt-16">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex justify-end">
                <label for="dashboard-sidebar" class="btn btn-ghost lg:hidden">Option</label>

            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content z-10">
                    <li><a>Add A Review</a></li>
                    <li><a>My Orders</a></li>
                    <li><a>Profile</a></li>
                    <li><a>Manage All Orders</a></li>
                    <li><a>Add A Product</a></li>
                    <li><a>Make Admin</a></li>
                    <li><a>Manage Products</a></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;