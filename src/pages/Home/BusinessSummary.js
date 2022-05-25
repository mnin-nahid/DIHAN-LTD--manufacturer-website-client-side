import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='my-5'>
            <h2 className='text-4xl text-primary text-center font-bold'>MILLIONS BUSINESS TRUST US</h2>
            <h4 className='text-xl text-center'>TRY TO UNDERSTAND USERS EXPRECTATION</h4>
            <div className='divider mx-48'></div>

            <div className='grid sm:grid-cols-2 md:grid-cols-4 pb-8 space-y-3'>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold '>72</h1>
                    <p className='text-primary'>Countries</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold'>535+</h1>
                    <p className='text-primary'>Complete Projects</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold'>273+</h1>
                    <p className='text-primary'>Happy Clients</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold'>432+</h1>
                    <p className='text-primary'>Feedbacks</p>
                </div>
            </div>
            <div className='md:mx-36 mx-4 grid sm:grid-cols-1 md:grid-cols-2 shadow-2xl p-6 rounded-lg'>
                <div className='text-xl'>
                    <h2 className="text-3xl text-primary font-bold">Have any question about us or get a products request?</h2>
                    <h5>Don't hesitate to contact us</h5>
                </div>
                <div className='space-x-5 text-center flex justify-center h-14 my-auto pt-3'>
                    <button className='btn btn-primary rounded-md'>Resuest For Quote</button>
                    <button className='btn btn-neutral rounded-md'>Contact Us</button>
                </div>
            </div>

        </div>
    );
};

export default BusinessSummary;