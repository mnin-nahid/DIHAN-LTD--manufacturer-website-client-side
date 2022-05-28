import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    }


    return (
        <div>
            <h2 className='text-2xl text-center text-primary font-bold'>Give a Review</h2>
            <div className='card-body'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div class="form-control w-full max-w-xs">
                        <label class="label py-0">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name")} value={user.displayName} class="input input-bordered w-full max-w-xs" readOnly />
                    </div>

                    <div class="form-control w-full max-w-xs">
                        <label class="label py-0">
                            <span class="label-text">Review</span>
                        </label>
                        <textarea type="password"{...register("review")} placeholder="Enter your password" class="input input-bordered w-full max-w-xs" />

                    </div>

                    <input value='Add Review' type='submit' className='btn text-white mt-4 bg-blue-700 w-28 mx-auto' />



                </form>

            </div>
        </div>
    );
};

export default AddReview;