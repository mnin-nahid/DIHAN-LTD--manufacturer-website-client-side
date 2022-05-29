import React from 'react';

const Blogs = () => {

    return (
        <div className='pt-20 px-8 space-y-5'>
            <h2 className='text-3xl text-center font-bold'>Wellcome to <span className='text-primary'>dihan</span>TECH BLOG</h2>


            <div className='bg-base-100 shadow-xl p-4 rounded-lg'>
                <h3 className='text-xl text-primary'>1. How will you improve the performance of a React Application?</h3>
                <p>
                    Internally, React uses a number of tricky tricks to reduce the number of expensive DOM activities required to update the UI. While this will in many cases lead to a faster user interface without specifically optimizing for performance, there are ways where you can still speed up your responsive application. This post will take you through some useful strategies that you can use to improve your response code.
                    <br />
                    <br />
                    <ul className='list-inside list-disc'>
                        <li>Using Immutable Data Structures</li>
                        <li>Function/Stateless Components and React.PureComponent</li>
                        <li>Multiple Chunk Files</li>
                        <li>Using Production Mode Flag in Webpack</li>
                        <li>Dependency optimization</li>
                        <li>Avoid Inline Function Definition in the Render Function.</li>
                        <li>Throttling and Debouncing Event Action in JavaScript</li>
                        <li>etc.</li>
                    </ul>

                </p>
            </div>
            <div className='bg-base-100 shadow-xl p-4 rounded-lg'>
                <h3 className='text-2xl text-primary'>2. What are the different ways to manage a state in a React application?</h3>
                <p>
                    There are four main types of state you need to properly manage in your React application:
                    <br />
                    <ul className='list-inside list-disc'>
                        <li><span className='font-bold'>Local state :</span> Local state is data we manage in one or another component.</li>
                        <li><span className='font-bold'>Global state :</span> Global state is data we manage across multiple components.</li>
                        <li><span className='font-bold'>Server state :</span> Data that comes from an external server that must be integrated with our UI state.</li>
                        <li><span className='font-bold'>URL state :</span> Data that exists on our URLs, including the pathname and query parameters.</li>
                    </ul>

                </p>
            </div>
            <div className='bg-base-100 shadow-xl p-4 rounded-lg'>
                <h3 className='text-2xl text-primary'>3. How does prototypical inheritance work?</h3>
                <p>
                    Prototypical inheritance refers to the ability to access the properties of objects from other objects. We use a JavaScript prototype to add new features and methods to existing object constructors. We can then basically ask our JavaScript code to inherit the property from a prototype.
                </p>
            </div>
            <div className='bg-base-100 shadow-xl p-4 rounded-lg'>
                <h3 className='text-primary text-2xl'>4. Why you do not set the state directly in React.</h3>
                <p>
                    One should never update the state directly because of :
                    <ul className='list-inside list-disc'>
                        <li>If you update it directly, calling the setState() afterward may just replace the update you made.</li>
                        <li>When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value</li>
                        <li>You will lose control of the state across all components.</li>
                    </ul>

                </p>
            </div>
            <div className='bg-base-100 shadow-xl p-4 rounded-lg'>
                <h3 className='text-primary text-2xl'>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                <p>
                    I can use the following function to search for items :
                    <br />
                    const search = what =&gt;  array.find(product =&gt;  product.name === what);
                </p>
            </div>
            <div className='bg-base-100 shadow-xl p-4 rounded-lg'>
                <h3 className='text-primary text-2xl'>6. What is a unit test? Why should write unit tests?</h3>
                <p><span className='font-bold'>UNIT TESTING</span> Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.</p>
                <br />
                <p>
                    Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end.
                </p>
            </div>

        </div>
    );
};

export default Blogs;