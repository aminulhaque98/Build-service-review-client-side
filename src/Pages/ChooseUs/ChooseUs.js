import React from 'react';
import { Link } from 'react-router-dom';

const ChooseUs = () => {
    return (
        <div className="hero my-20 rounded-lg">

            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2'>
                    <p className='text-xl font-bold text-orange-600'>Who We are</p>
                    <img src="https://i.ibb.co/jVG83Y7/download-5.jpg" alt='' className="rounded-lg my-6 w-full h-52" />
                    <p className="">Truseen Construction Ltd. is built on a proud history of quality workmanship and innovation and with a strong commitment to our clients and building partners. We are focused on producing quality buildings on time and on budget.</p>
                    <Link to=""><button className="btn btn-primary mt-4">Learn More</button></Link>
                </div>

                <div className='w-1/2'>
                    <p className='text-2xl font-bold text-orange-600'>Why Choose Us?</p>

                    <p className="py-6">As a team, it is our values that drive us. Together we live these values every day, because we know that’s why our clients love working with us. Our promise is simple: You can trust us to ensure your building project is as enjoyable and painless as possible and together, we will be 100% proud of the result.
                    </p>

                    <div ClassName="grid grid-cols-2">
                        <div className='flex'>
                            <img src="https://i.ibb.co/jVG83Y7/download-5.jpg" alt='' className=" w-20 h-20" />
                            <div className='mx-5'>
                                <p className='mb-5 text-2xl'>Green-building</p>
                                <p className='text-xl'>Sustainable processes</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <img src="https://i.ibb.co/jVG83Y7/download-5.jpg" alt='' className=" w-20 h-20" />
                            <div className='mx-5'>
                                <p className='mb-5 text-2xl'>Green-building</p>
                                <p className='text-xl'>Sustainable processes</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <img src="https://i.ibb.co/jVG83Y7/download-5.jpg" alt='' className=" w-20 h-20" />
                            <div className='mx-5'>
                                <p className='mb-5 text-2xl'>Green-building</p>
                                <p className='text-xl'>Sustainable processes</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <img src="https://i.ibb.co/jVG83Y7/download-5.jpg" alt='' className=" w-20 h-20" />
                            <div className='mx-5'>
                                <p className='mb-5 text-2xl'>Green-building</p>
                                <p className='text-xl'>Sustainable processes</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <img src="https://i.ibb.co/jVG83Y7/download-5.jpg" alt='' className=" w-20 h-20" />
                            <div className='mx-5'>
                                <p className='mb-5 text-2xl'>Green-building</p>
                                <p className='text-xl'>Sustainable processes</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <img src="https://i.ibb.co/jVG83Y7/download-5.jpg" alt='' className=" w-20 h-20" />
                            <div className='mx-5'>
                                <p className='mb-5 text-2xl'>Green-building</p>
                                <p className='text-xl'>Sustainable processes</p>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default ChooseUs;