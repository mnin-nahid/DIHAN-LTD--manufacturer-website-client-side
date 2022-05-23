import React from 'react';
import Navber from '../../components/Navber';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Products from './Products';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <BusinessSummary />
            <Testimonial />
        </div>
    );
};

export default Home;