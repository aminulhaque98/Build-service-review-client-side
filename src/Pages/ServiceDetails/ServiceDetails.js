import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const { img, title, description, price } = useLoaderData();
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 my-20'>
            <div className="card bg-base-100 shadow-xl">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <figure><img className='w-full h-72' src={img} alt="Shoes" /></figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className='flex'>

                        <p className='text-xl'>Price: ${price}</p>

                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    {/* <div className="card-actions justify-end">
                        <Link to={`/details/${_id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div> */}
                </div>
            </div>
            <div data-theme="retro" className='mx-auto  my-auto rounded-xl p-4'>
                {user ?
                    <>
                        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                            <h1 className="text-5xl text-center font-bold">You give some Reviews!</h1>
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Upload</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Photo Upload" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Review Here!</span>
                                    </label>
                                    <textarea className="textarea textarea-primary" placeholder="What's on your mind about our service write here..."></textarea>

                                </div>
                                <div className="form-control">

                                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                                </div>
                            </form>

                        </div>

                    </>

                    :
                    <div className="card w-96 bg-primary text-primary-content">
                        <div className="card-body font-bold">
                            <h2 className="card-title">If you want to review!</h2>
                            <p>Please login to add a review</p>
                            <div className="card-actions justify-end">
                                <Link to="/login"><button className="btn">now go to login page</button></Link>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default ServiceDetails;