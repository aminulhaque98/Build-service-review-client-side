import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    const { user } = useContext(AuthContext);

    useTitle('AddService');

    const serviceHandler = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.name.value;
        const price = form.price.value;
        const email = user.email;
        const image = form.image.files[0];
        const description = form.description.value;

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
                const service = {
                    title,
                    email,
                    img: display_url,
                    price,
                    description,
                    features: image,
                }
                fetch('https://service-review-server-side-three.vercel.app/services', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(service)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            form.reset();
                            toast.success('Your service placed successfully');
                        }
                    })
                    .catch(err => console.error(err));

            }).catch(err => console.log(err))

    }



    return (

        <div data-theme="retro" className='mx-auto sm:w-full md:w-full lg:w-1/2 my-auto rounded-xl p-4'>

            <div className="card mx-auto my-5 w-full max-w-lg shadow-2xl bg-base-100">

                <form className="card-body" onSubmit={serviceHandler}>
                    <h1 className="text-5xl text-center font-bold">You Add Service Here!</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price:</span>
                        </label>
                        <input type="text" name='price' placeholder="Price" className="input input-bordered" />
                    </div>

                    <div className="form-control">

                        <label htmlFor='image' className='blog mb- text-sm'>
                            Select Image:
                        </label>
                        <input type='file' id='image' name='image/*' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description Here!</span>
                        </label>
                        <textarea name="description" className="textarea textarea-primary" placeholder="What's on your mind about Your service write here..."></textarea>

                    </div>

                    <div className="form-control">

                        <input className="btn btn-primary" type="submit" value="Add Services" />
                    </div>
                </form>

            </div>
        </div>

    );
};

export default AddService;