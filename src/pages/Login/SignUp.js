import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { async } from '@firebase/util';

const SignUp = () => {
    
    const { register, handleSubmit } = useForm();

    //firebase hook for create user with password
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    //firebase hook for update user info
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    //hendle navigation
    const navigate = useNavigate();


    //hendle signup
    const onSubmit = async ({email, password, name}) => {
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        await console.log('update complete');
    };

    if(user){
        navigate('/')
    }

    return (
        <div className='pt-4 pb-2 card w-96 mx-auto bg-base-200 mt-20'>
            <h2 className='text-2xl text-center'>Sign up for your <br /> <span className='font-bold'><span className='text-primary'>dihan</span>TECH</span> account.</h2>
            <div className='card-body'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div class="form-control w-full max-w-xs">
                        <label class="label py-0">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    },
                                    minLength: {
                                        value: 3,
                                        message: 'Enter valid Name'
                                    }
                                })} placeholder="Enter your name" class="input input-bordered w-full max-w-xs" />
                        <label class="label py-0">
                            <span class="label-text-alt">name error</span>
                        </label>
                    </div>

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
                        <input type="password"{...register("password", {
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

                    <input value='Sign up' type='submit' className='btn text-white bg-blue-700 w-28 mx-auto'/>
                     
               

                </form>
                <div className='py-4'>
                    <p>Already have an account? <Link className='text-primary underline' to='/login'>Login here.</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;