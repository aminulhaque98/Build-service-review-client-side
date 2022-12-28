import React from 'react';
import { Link } from 'react-router-dom';
import About from '../../About/About';
import ChooseUs from '../../ChooseUs/ChooseUs';
import FeaturesProjects from '../../FeaturesProjects/FeaturesProjects';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ChooseUs></ChooseUs>
            <FeaturesProjects></FeaturesProjects>
        </div>
    );
};

export default Home;