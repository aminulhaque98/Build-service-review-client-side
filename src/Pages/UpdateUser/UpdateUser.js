import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const UpdateUser = () => {
    const reviews = useLoaderData();
    const [update, setUpdate] = useState(reviews);
    useTitle('Update')

    const handleUpdateUser = event => {
        event.preventDefault();

        fetch(`https://service-review-server-side-three.vercel.app/reviews/${reviews._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('user updated successfully')

                }
            })

    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...reviews }
        newUser[field] = value;
        setUpdate(newUser)
    }

    return (
        <div className='my-20'>
            <div className="card mx-auto w-full max-w-lg shadow-2xl bg-red-100 ">

                <form onSubmit={handleUpdateUser} className="card-body" >
                    <h1 className="text-3xl text-amber-500 mb-5 text-center font-bold">{reviews?.email}</h1>
                    <div className="form-control">
                        <input onChange={handleInputChange} defaultValue={reviews?.name} type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <textarea onChange={handleInputChange} defaultValue={reviews?.textReview} name="textReview" className="textarea textarea-primary" placeholder="What's on your mind about our service write here..."></textarea>

                    </div>
                    <div className="form-control">

                        <input className="btn btn-primary" type="submit" value="Update" />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default UpdateUser;