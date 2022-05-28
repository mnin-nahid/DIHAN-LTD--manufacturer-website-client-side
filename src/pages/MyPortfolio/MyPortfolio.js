import React from 'react';
import mninimg from '../../images/mnin.jpg'

const MyPortfolio = () => {
    return (
        <div className='mt-20'>
            <div class="hero my-5">
                <div class="hero-content flex-col lg:flex-row lg:space-x-10">
                    <img src={mninimg} class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='w-96'>
                        <h1 class="text-4xl font-bold">Hey, <br /> <span className='text-primary text-3xl'>Wellcome To My Protfolio</span></h1>
                        <p class="pt-3">My name is <span className='text-primary font-bold'>Nahidul Islam Nayan.</span></p>
                        <p class="py-2">You can contact me with <span className='text-primary font-bold'>mnin.nahid@gmail.com</span> this email.</p>
                        <p className='text-black'>In 2022, I completed my diploma in <span className='font-bold text-primary'>Computer Technology.</span></p>
                        <h4 className='font-bold'>list of technologies i know as a web developer -</h4>
                        <ul>
                            <li>HTML, CSS, GitHub, BootStrap, Tailwind CSS</li>
                            <li>JavaScript, ES, API, React, React Router, Firebase</li>
                            <li>Node.js, MongoDB</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h2 className='text-4xl text-center font-bold my-4'>My Last Three Project</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10'>
                <div class="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Stowage Home</h2>
                        <p>This project made for mantaining a warehouse.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary"><a target='_' href="https://stowage-home.web.app/">Open</a></button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Open</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Open</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MyPortfolio;