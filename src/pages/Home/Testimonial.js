import React from 'react';

const Testimonial = () => {
    return (
        <div className='my-10'>
            <h2 className='text-3xl font-bold text-center'>Testimonial</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-14'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quia deserunt itaque eos non nihil explicabo laborum officiis quae exercitationem veritatis, ducimus, veniam ut nemo dolore excepturi repellendus voluptatem beatae.</p>
                        <div className='flex space-x-3 justify-center items-center'>
                            <div tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div class="w-16 rounded-full">
                                    <img src="https://api.lorem.space/image/face?hash=33791" alt='' />
                                </div>
                            </div>
                            <div>
                                <h2 className='text-xl font-semibold'>Nahidul Islam</h2>
                                <p>* * * * *</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quia deserunt itaque eos non nihil explicabo laborum officiis quae exercitationem veritatis, ducimus, veniam ut nemo dolore excepturi repellendus voluptatem beatae.</p>
                        <div className='flex space-x-3 justify-center items-center'>
                            <div tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div class="w-16 rounded-full">
                                    <img src="https://api.lorem.space/image/face?hash=33791" alt='' />
                                </div>
                            </div>
                            <div>
                                <h2 className='text-xl font-semibold'>Nahidul Islam</h2>
                                <p>* * * * *</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quia deserunt itaque eos non nihil explicabo laborum officiis quae exercitationem veritatis, ducimus, veniam ut nemo dolore excepturi repellendus voluptatem beatae.</p>
                        <div className='flex space-x-3 justify-center items-center'>
                            <div tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div class="w-16 rounded-full">
                                    <img src="https://api.lorem.space/image/face?hash=33791" alt='' />
                                </div>
                            </div>
                            <div>
                                <h2 className='text-xl font-semibold'>Nahidul Islam</h2>
                                <p>* * * * *</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Testimonial;