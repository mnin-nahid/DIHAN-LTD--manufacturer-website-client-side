import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    const url = 'https://api.lorem.space/image/fashion?w=1000&h=800';
    return (
        <div className='mt-[60px]'>
            <div class="hero min-h-[90vh]" style={{backgroundImage: `url(${url})`}}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                        <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-outline">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;