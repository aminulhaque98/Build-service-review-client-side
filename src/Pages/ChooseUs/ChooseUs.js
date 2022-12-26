import React from 'react';
import { Link } from 'react-router-dom';

const ChooseUs = () => {
    return (
        <div className="hero my-20 rounded-lg">
            <div className="hero-content gap-x-7 flex-col lg:flex-row ">

                <div className='w-1/2'>
                    <p className='text-2xl font-bold text-orange-600'>Why Choose Us?</p>

                    <p className="py-6">As a team, it is our values that drive us. Together we live these values every day, because we know that’s why our clients love working with us. Our promise is simple: You can trust us to ensure your building project is as enjoyable and painless as possible and together, we will be 100% proud of the result.
                    </p>

                    <div className="flex gap-y-2 flex-wrap">
                        <div className='flex w-1/2'>
                            <img src="https://i.ibb.co/87SYd6R/icons-for-negev-02-768x769.png" alt='' className=" w-20 h-20 bg-yellow-300" />
                            <div className='mx-5'>
                                <p className='mb-5 text-2xl'>Green-building</p>
                                <p>Sustainable processes
                                </p>
                            </div>
                        </div>
                        <div className='flex w-1/2'>
                            <img src="https://i.ibb.co/0fK1RQT/hardware-as-a-service.jpg" alt='' className=" w-20 h-20" />
                            <div className='mx-5'>
                                <p className='mb-5 text-2xl'>Good Planning</p>
                                <p>Architecture</p>
                            </div>
                        </div>
                        <div className='flex w-1/2'>
                            <img src="https://i.ibb.co/gyVs7sc/22687883-1710706792286289-4962096817937428333-n-29.webp" alt='' className=" w-20 h-20" />
                            <div className='mx-5'>
                                <p className='mb-5 text-2xl'>Maintenance</p>
                                <p>Energy repair</p>
                            </div>
                        </div>
                        <div className='flex w-1/2'>
                            <img src="https://i.ibb.co/vsBZdCX/icons-for-negev-03-768x770.png" alt='' className=" w-20 h-20" />
                            <div className='mx-5'>
                                <p className='mb-5 text-2xl'>Great people</p>
                                <p>1000+ workers</p>
                            </div>
                        </div>
                        <div className='flex w-1/2'>
                            <img src="https://i.ibb.co/QYC46X0/illu-sinner-zeit.webp" alt='' className=" w-20 h-20" />
                            <div className='mx-5'>
                                <p className='mb-5 text-xl'>On-time delivery</p>
                                <p>Punctual deadlines</p>
                            </div>
                        </div>
                        <div className='flex w-1/2'>
                            <img src="https://i.ibb.co/NywhzR3/illu-sinner-mechanik.webp" alt='' className=" w-20 h-20" />
                            <div className='mx-5'>
                                <p className='mb-5 text-2xl'>High Standard</p>
                                <p>99% QC Passed</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/2'>
                    <p className='text-xl font-bold text-orange-600'>Who We are</p>
                    <img src="https://i.ibb.co/HVPyp1Q/348.jpg" alt='' className="rounded-lg my-6 w-full h-52" />
                    <p className="">Truseen Construction Ltd. is built on a proud history of quality workmanship and innovation and with a strong commitment to our clients and building partners. We are focused on producing quality buildings on time and on budget.</p>
                    <Link to=""><button className="btn btn-primary mt-4">Learn More</button></Link>
                </div>


            </div>
        </div>
    );
};

export default ChooseUs;