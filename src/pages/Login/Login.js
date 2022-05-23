import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='pt-4 pb-10 card w-96 mx-auto bg-base-300 mt-20'>
            <h2 className='text-2xl text-center'>Login to your <br /> <span className='font-bold'><span className='text-primary'>dihan</span>TECH</span> account.</h2>
            <div className='card-body'>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">What is your name?</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered h-11 w-full max-w-xs" />
                    <label class="label">
                        <span class="label-text-alt">Alt label</span>
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">What is your name?</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered h-11 w-full max-w-xs" />
                    <label class="label">
                        <span class="label-text-alt">Alt label</span>
                    </label>
                </div>
                <button className='btn btn-primary w-28 mx-auto h-6'>Login</button>
                <div className='py-4'>
                    <p>Forgot your <Link className='text-primary underline' to='/signup' >password?</Link></p>
                    <p>Don't have an account? <Link className='text-primary underline' to='/signup'>Sign up here.</Link></p>
                </div>
                <div class="divider mt-0">OR</div>
                <button class="btn btn-wide mx-auto">Wide</button>
            </div>
        </div>
    );
};

export default Login;