import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [visible, setVisible] = useState(3);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    // const showMore = () => {
    //     setVisible((preValue) => preValue * 3)
    // }

    return (
        <div>
            <div className='text-center my-5'>
                <p className='text-2xl font-bold '>Service</p>
                <h2 className='text-5xl font-semibold'>Our Service Aria</h2>
                <p className=''>Knowledge and experience gives us a step up over the competition.</p>
            </div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>


                {
                    services.slice(0, visible).map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }

            </div>

            {/* <div className="text-center m-8">
                <button onClick={showMore} className="btn btn-outline btn-secondary text-2xl px-20">show More</button>
            </div> */}

        </div>
    );
};

export default Services;