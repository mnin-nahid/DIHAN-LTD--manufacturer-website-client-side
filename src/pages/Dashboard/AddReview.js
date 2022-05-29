import React, { startTransition, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { FaStar } from 'react-icons/fa'

const AddReview = () => {
    const colors = {
        orange: "#FFBA5A",
        grey: "#a9a9a9"
    };

    const stars = Array(5).fill(0);

    const [user] = useAuthState(auth);

    const { register, handleSubmit } = useForm();

    //other code
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);

    const handleClick = value => {
        setCurrentValue(value)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    const onSubmit = data => {
        data.reating = currentValue;
        data.name = user.displayName;
        data.photoURL = user.photoURL;

        //send review to the server
        const url = 'http://localhost:5000/review';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
    }


    return (
        <div className='border-2 w-2/3 rounded-lg mt-5 mx-auto bg-base-200'>
            <h2 className='text-2xl text-center text-primary font-bold'>Give a Review</h2>

            <div className='card-body'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='text-2xl'>Hey <span className='text-primary'>{user.displayName}</span>, We are waiting for your opinion</h2>

                    <div className='flex text-center my-4'>
                        <label className="label py-0">
                            <span className="label-text">Reatings : </span>
                        </label>
                        {
                            stars.map((_, index) => {
                                return (
                                    <FaStar
                                        key={index}
                                        className='text-xl mr-2 cursor-pointer'
                                        onClick={() => handleClick(index + 1)}
                                        onMouseOver={() => handleMouseOver(index + 1)}
                                        onMouseLeave={handleMouseLeave}
                                        color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                    />
                                )
                            })
                        }
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label py-0">
                            <span className="label-text">Review</span>
                        </label>
                        <textarea name="" placeholder="What is your feedback?" {...register("review")} className="input input-bordered h-24 w-full max-w-xs"></textarea>

                    </div>

                    <input value='Post' type='submit' className='btn text-white mt-4 bg-blue-700 w-28 mx-auto' />



                </form>

            </div>
        </div>
    );
};

export default AddReview;