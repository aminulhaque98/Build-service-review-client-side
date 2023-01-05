import React from 'react';

const FeaturesCard = ({ service }) => {
    const { name, tumble, date } = service?.features[0];


    return (
        <div>
            <div>
                <div className="card w-full shadow-xl image-full hover:skew-y-6">
                    <figure className='w-full h-72'><img src={tumble} className='w-full h-72' alt="feature" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>{date}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Get More Info</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FeaturesCard;