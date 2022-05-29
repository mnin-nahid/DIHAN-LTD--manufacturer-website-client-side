import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';


const Navber = () => {
    //take user data form firebase
    const [user] = useAuthState(auth);



    return (
        <div className="navbar bg-base-300 md:px-20 fixed top-0 z-20 max-w-screen-2xl">

            <div className="flex-1">
                <NavLink to='/'>
                    <p className="font-bold md:text-3xl"><span className='text-primary'>dihan</span>TECH</p>
                </NavLink>
            </div>

            <ul className='space-x-3'>
                <li><NavLink to='/blog'>Blog</NavLink></li>
                <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
                {user && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>}
                {
                    user ?
                        <li>
                            <div className="dropdown dropdown-end">

                                <p tabindex='0' className='btn btn-outline'>{user.displayName || "User"}</p>

                                <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
                                    <li>
                                        <Link to='/profile' className="justify-between">Profile<span className="badge">Coming..</span></Link>
                                    </li>
                                    <li><Link to='/settings' className="justify-between">Settings<span className="badge">Coming..</span></Link></li>
                                    <li><button onClick={() => signOut(auth)} className='btn btn-outline'>Logout</button></li>
                                </ul>
                            </div>
                        </li>
                        :
                        <li><NavLink to='/login'>Login</NavLink></li>

                }





            </ul>
        </div>
    );
};

export default Navber;