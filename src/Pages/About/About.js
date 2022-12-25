import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="hero my-6 min-h-screen bg-base-200 rounded-lg">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src="https://i.ibb.co/jVG83Y7/download-5.jpg" alt='' className="rounded-lg shadow-2xl w-4/5 h-full" />
                    <img src="https://i.ibb.co/M7zd1wz/download-7.jpg" alt='' className="absolute rounded-lg shadow-2xl right-5 top-2/4 h-52 border-8 drop-shadow-2xl" />
                </div>

                <div className='w-1/2'>
                    <p className='text-xl font-bold text-orange-600'>About Us</p>
                    <h1 className="text-2xl font-bold">Box Office News!</h1>
                    <p className="py-2"><small>
                        THE CONSTRUCTION INDUSTRY IS divided into two sectors: Non-residential, which has three sub-sectors (heavy industrial, institutional and commercial, engineering), and Residential. Each sector has its own merits with a varied and rewarding range of work projects.
                        the construction process. ...
                        Design. ...
                        Preconstruction. ...
                        Procurement. ...
                        Construction. ...
                        Post construction.</small>
                    </p>
                    <Link to="/aboutinfo"><button className="btn btn-primary">Get More Info</button></Link>
                </div>
            </div>
        </div>
    );
};

export default About;