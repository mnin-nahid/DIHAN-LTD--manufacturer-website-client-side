import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {

    const { register, handleSubmit } = useForm();
    //firebase hook for password login
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError;

    //firebase google login hooks
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    //handle navigation
    const navigate = useNavigate();

    if (error || gError) {
        signInError = <small><p className='text-red-500'>{error?.message || gError?.message}</p></small>
    }

    const onSubmit = async ({ email, password }) => {
        console.log(email, password);
        signInWithEmailAndPassword(email, password);
    };

    if (user || gUser) {
        navigate('/')
    }

    return (
        <div className='pt-4 pb-2 card w-96 mx-auto bg-base-200 mt-20'>
            <h2 className='text-2xl text-center'>Login to your <br /> <span className='font-bold'><span className='text-primary'>dihan</span>TECH</span> account.</h2>
            <div className='card-body'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-control w-full max-w-xs">
                        <label class="label py-0">
                            <span class="label-text">Email</span>
                        </label>
                        <input {...register("email", {
                            required: {
                                value: true,
                                message: 'You have to enter an email'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })} type="email" placeholder="Enter your email" class="input input-bordered w-full max-w-xs" />
                        <label class="label py-0">
                            <span class="label-text-alt">email error</span>
                        </label>
                    </div>

                    <div class="form-control w-full max-w-xs">
                        <label class="label py-0">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="number" {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is Required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Must be 6 Characters or longer'
                            }
                        })} placeholder="Enter your password" class="input input-bordered w-full max-w-xs" />
                        <label class="label py-0">
                            <span class="label-text-alt">password error</span>
                        </label>
                    </div>

                    <input type='submit' value='Login' className='btn text-white bg-blue-700 w-28 mt-5'>

                    </input>
                </form>
            </div>

            <div className='py-4'>
                <p>Forgot your <Link className='text-primary underline' to='/signup' >password?</Link></p>
                <p>Don't have an account? <Link className='text-primary underline' to='/signup'>Sign up here.</Link></p>
            </div>
            {signInError}
            <div class="divider mt-0">OR</div>

            <button onClick={() => signInWithGoogle()} class="btn btn-wide bg-blue-700 text-white mx-auto">Continue with Google</button>
        </div>
    );
};

export default Login;