import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import ServicesCard from '../Services/ServicesCard';

const AllServices = () => {
    useTitle('Services');

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://service-review-server-side-three.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="my-12">
            <div className='text-center my-5'>
                <p className='text-2xl font-bold '>Service</p>
                <h2 className='text-5xl font-semibold'>Our Service Aria</h2>
                <p className=''>Knowledge and experience gives us a step up over the competition.</p>
            </div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;