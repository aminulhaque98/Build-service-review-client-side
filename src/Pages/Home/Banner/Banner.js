import React from 'react';
import './Banner.css';

const Banner = () => {

    return (
        <div className="carousel  mb-12 mt-12 w-full max-h-96 rounded-xl">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='img-gradient w-full h-full'>
                    <img src="https://i.ibb.co/m9NJZDx/building-and-construction.jpg" alt='' className=' w-full h-full' />
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24  top-1/4">
                    <p className='text-6xl font-bold text-white '>
                        Welcome to Truseen <br />Construction Ltd.
                    </p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 w-2/5  top-1/2">
                    <p className='text-xl text-white '>
                        Making Dreams come to life
                    </p>
                </div>

                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 w-2/5  top-3/4">
                    <button className="btn glass my-12 text-black text-2xl">Learn More</button>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn mr-5 btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='img-gradient w-full'>
                    <img src="https://i.ibb.co/r30tM3w/Edge-August-B2-1024x739.webp" alt='' className=' w-full h-full' />
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24  top-1/4">
                    <p className='text-6xl font-bold text-white '>We're building dreams
                    </p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 w-2/5  top-1/2">
                    <p className='text-xl text-white '>
                        Our success comes from a steadfast commitment <br />
                        to the client's vision and a culture of balance,<br />
                        integrity,leadership and loyalty.
                    </p>
                </div>

                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 w-2/5  top-3/4">
                    <button className="btn glass my-12 text-black text-2xl">Learn More</button>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn mr-5 btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='img-gradient w-full'>
                    <img src="https://i.ibb.co/J5W6gNR/download-3.jpg" alt='' className=' w-full h-full' />
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24  top-1/4">
                    <p className='text-6xl font-bold text-white '>
                        Realize Your Projects
                    </p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 w-2/5  top-1/2">
                    <p className='text-xl text-white '>
                        Quality projects delivered on time on budget. <br />
                        We advise your in every aspect of realizing your <br />
                        sustainable business for the future.
                    </p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 w-2/5  top-3/4">
                    <button className="btn glass my-12 text-black text-2xl">Learn More</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn mr-5 btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className='img-gradient w-full'>
                    <img src="https://i.ibb.co/yXW0fTN/Idling-Owned-Plant.jpg" alt='' className=' w-full h-full' />
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24  top-1/4">
                    <p className='text-6xl font-bold text-white '>
                        Building up great things
                    </p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 w-2/5  top-1/2">
                    <p className='text-xl text-white '>
                        Our success comes from a steadfast commitment <br />
                        to the client's vision and a culture of balance,<br />
                        integrity,leadership and loyalty.
                    </p>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn mr-5 btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;