import React from 'react';
import mninimg from '../../images/mnin.jpg'
import stowage from '../../images/stowage-home.PNG'
import gotech from '../../images/gotechPNG.PNG'
import laptop_picker from '../../images/laptop_picker.PNG'

const MyPortfolio = () => {
    return (
        <div className='mt-20'>
            <div className="hero my-5">
                <div className="hero-content flex-col lg:flex-row lg:space-x-10">
                    <img src={mninimg} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='w-96'>
                        <h1 className="text-4xl font-bold">Hey, <br /> <span className='text-primary text-3xl'>Wellcome To My Protfolio</span></h1>
                        <p className="pt-3">My name is <span className='text-primary font-bold'>Nahidul Islam Nayan.</span></p>
                        <p className="py-2">You can contact me with <span className='text-primary font-bold'>mnin.nahid@gmail.com</span> this email.</p>
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
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={stowage} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Stowage Home</h2>
                        <p>This project made for mantaining a warehouse.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><a target='_' href="https://stowage-home.web.app/">Open</a></button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={gotech} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">GoTechDoctor</h2>
                        <p>Smart life, Smart solution.
                            Success Guaranteed.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><a target='_' href="https://go-techdoctor.web.app/">Open</a></button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={laptop_picker} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Laptop Picker</h2>
                        <p>Hear you can find a laptop name that you can buy.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><a target='_' href="https://heartfelt-starburst-8ab0fd.netlify.app/">Open</a></button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MyPortfolio;