import React, { useEffect, useState } from 'react';
import FeaturesCard from './FeaturesCard/FeaturesCard';

const FeaturesProjects = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('https://service-review-server-side-three.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='text-center'>
                <h1 className='text-5xl font-bold mb-5'>Featured Projects</h1>
                <p className='text-xl'>Building your dream house shouldn’t be a nightmare!</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12'>

                {
                    services.map(service =>
                        <FeaturesCard
                            kay={service._id}
                            service={service}
                        ></FeaturesCard>
                    )}


            </div>
        </div>
    );
};

export default FeaturesProjects;

