import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='h-screen text-center pt-64'>
            <p>WE ARE SORRY, PAGE NOT FOUND !</p>
            <h1 className='text-9xl'>404</h1>
            <p>error</p>
            <Link to='/' className='btn btn-outline btn-wide rounded-2xl mt-6'>Back to Home</Link>
        </div>
    );
};

export default PageNotFound;