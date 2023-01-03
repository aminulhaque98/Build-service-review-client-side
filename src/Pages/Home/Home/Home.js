import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import About from '../../About/About';
import ChooseUs from '../../ChooseUs/ChooseUs';
import FeaturesProjects from '../../FeaturesProjects/FeaturesProjects';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <div className="text-center m-8">
                <Link to='/services'>
                    <button className="btn btn-outline btn-secondary text-2xl px-20">Show More</button>
                </Link>
            </div>
            <ChooseUs></ChooseUs>
            <FeaturesProjects></FeaturesProjects>
        </div>
    );
};

export default Home;