import React from 'react';
import About from '../../About/About';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <button className="btn btn-outline btn-secondary mx-auto text-xl m-5">See All</button>
            <About></About>
        </div>
    );
};

export default Home;