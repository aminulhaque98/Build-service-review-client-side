import React, { useContext, useState } from 'react';
import "./ServiceDetails.css";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const { _id, img, title, description, price } = useLoaderData();
    // const [image, setImage] = useState();
    useTitle('Details');


    //normaly photo upload
    // const imagePreview = event => {
    //     const image = document.getElementById('image');
    //     const imgs = document.getElementById('imgs');
    //     image.src = URL.createObjectURL(event.target.files[0]);
    //     setImage(image.src)
    // }



    const reviewHandler = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user.email;
        // const photo = image;
        const image = form.image.files[0];
        const textReview = form.textReview.value;

        //b0e7ee6ce6b56eb9ba71cba89e876465

        const formDate = new FormData()
        formDate.append('image', image)

        const url = "https://api.imgbb.com/1/upload?key=b0e7ee6ce6b56eb9ba71cba89e876465"

        //imgbb te photo upload
        fetch(url, {
            method: 'POST',
            body: formDate,
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const { display_url } = data?.data

                //mongodb te data upload
                const review = {
                    service: _id,
                    name,
                    email,
                    display_url,
                    // photo,
                    textReview
                }
                fetch('https://service-review-server-side-three.vercel.app/reviews', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(review)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            alert('review placed successfully')
                            form.reset();
                        }
                    })
                    .catch(err => console.error(err));

            }).catch(err => console.log(err))

    }

    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 my-20'>
            <div className="card bg-base-100 shadow-xl">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <figure><img className='w-full h-72' src={img} alt="pictures" /></figure>
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
                            <form className="card-body" onSubmit={reviewHandler}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                                </div>


                                <div className="form-control">


                                    <label htmlFor='image' className='blog mb- text-sm'>
                                        Select Image:
                                    </label>
                                    <input type='file' id='image' name='image/*' required />


                                    {/* normal photoUpload field */}

                                    {/* <img id='image' className='w-full h-20' alt='photoss' />
                                    <input type="file" id="imgs" accept="image/png,image/jpeg,.txt,.doc" onChange={imagePreview} name='photos' />
                                    <label htmlFor="imgs" className="btn btn-outline">Photo Upload</label> */}

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Review Here!</span>
                                    </label>
                                    <textarea name="textReview" className="textarea textarea-primary" placeholder="What's on your mind about our service write here..."></textarea>

                                </div>
                                <div className="form-control">

                                    <input className="btn btn-primary" type="submit" value="Reviews" />
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