import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile mt-16">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">

                <div className=" flex justify-end">
                    <div className='flex justify-between my-2 mx-4'>
                        <h2 className='text-3xl mx-3'>Dashboard</h2>
                        <label for="dashboard-sidebar" className="btn btn-outline btn-sm  lg:hidden">Menu</label>
                    </div>
                </div>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content z-10">
                    <li><Link to='/dashboard'>Profile</Link></li>
                    {
                        !admin && (
                            <>
                                <li><Link to='myorder'>My Orders</Link></li>
                                <li><Link to='addreview'>Add A Review</Link></li>
                            </>
                        )
                    }
                    {
                        admin && (
                            <>
                            <li><Link to='manageallorder'>Manage All Orders</Link></li>
                            <li><Link to='addproduct'>Add A Product</Link></li>
                            <li><Link to='makeadmin'>Make Admin</Link></li>
                            <li> <Link to='manageproducts'>Manage Products</Link></li></>
                        )
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;