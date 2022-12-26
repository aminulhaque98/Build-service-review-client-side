import React from 'react';

const ServicesCard = ({ service }) => {
    const { img, price, title, rating } = service;

    return (

        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='w-full h-56' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className='justify-between'>

                        <p className='text-xl'>Price: ${price}</p>

                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;