import React from 'react';

const FeaturesProjects = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-5xl font-bold mb-5'>Featured Projects</h1>
                <p className='text-xl'>Building your dream house shouldn’t be a nightmare!</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12'>
                <div className="card w-96 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/HVPyp1Q/348.jpg" alt="Shoes" className='w-full h-56' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Luxury farmHouse!</h2>
                        <p>10/12/1990</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Get More Info</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/VBRkCTn/images-8.jpg" alt="Shoes" className='w-full h-56' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Luxury farmHouse!</h2>
                        <p>15/11/2000</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Get More Info</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/CvYMbsY/images-10.jpg" alt="Shoes" className='w-full h-56' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Luxury farmHouse!</h2>
                        <p>04/01/1950</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Get More Info</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/d2rxfWj/images-11.jpg" alt="Shoes" className='w-full h-56' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Luxury farmHouse!</h2>
                        <p>04/05/1988</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Get More Info</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/qMSM2M1/350.jpg" alt="Shoes" className='w-full h-56' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Luxury farmHouse!</h2>
                        <p>17/04/1930</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Get More Info</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/qRqxtdt/images-12.jpg" alt="Shoes" className='w-full h-56' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Luxury farmHouse!</h2>
                        <p>19/03/2015</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Get More Info</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesProjects;