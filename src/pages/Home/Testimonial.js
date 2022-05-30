import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';


const Testimonial = () => {

    const stars = Array(5).fill(0);

    const colors = {
        orange: "#FFBA5A",
        grey: "#a9a9a9"
    };

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://polar-oasis-49483.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data.reverse()))
    }, [])

    const lastReview = reviews.slice(0, 6);
    return (
        <div className='my-10'>
            <h2 className='text-3xl font-bold text-center'>Testimonial</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-14 space-y-3'>
                {
                    lastReview.map(review => <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <p>{review.review}</p>
                            <div className='flex space-x-3 justify-center items-center'>
                                <div tabindex="0" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-16 rounded-full">
                                        <img src={review.photoURL || "https://api.lorem.space/image/face?hash=33791"} alt='' />
                                    </div>
                                </div>
                                <div>
                                    <h2 className='text-xl font-semibold'>{review.name}</h2>
                                    <p className='flex'>
                                        {
                                            stars.map((_, index) => {
                                                return (
                                                    <FaStar
                                                        key={index}
                                                        className='text-lg mr-2 cursor-pointer'
                                                        color={(review.reating) > index ? colors.orange : colors.grey}

                                                    />
                                                )
                                            })
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Testimonial;