import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';


const Navber = () => {
    //take user data form firebase
    const [user] = useAuthState(auth);



    return (
        <div class="navbar bg-base-300 md:px-20 fixed top-0 z-20 max-w-screen-2xl">

            <div class="flex-1">
                <NavLink to='/'>
                    <p class="font-bold md:text-3xl"><span className='text-primary'>dihan</span>TECH</p>
                </NavLink>
            </div>

            <ul className='space-x-3'>
                <li><NavLink to='/blog'>Blog</NavLink></li>
                {user && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>}
                {
                    user ?
                        <li>
                            <div class="dropdown dropdown-end">

                                <p tabindex='0' className='btn btn-outline'>{user.displayName || "User"}</p>

                                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
                                    <li>
                                        <Link to='/profile' class="justify-between">Profile<span class="badge">Coming..</span></Link>
                                    </li>
                                    <li><Link to='/settings' class="justify-between">Settings<span class="badge">Coming..</span></Link></li>
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