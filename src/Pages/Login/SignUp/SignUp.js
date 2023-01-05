import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { setAuthToken } from '../../../api/Auth';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    useTitle('SignUp');

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setAuthToken(user);
                setError('');
                form.reset();
                toast.success('Successfully Complete Your SignUp!');
                handleUpdateUserProfile(name, photoURL)
            })
            .catch(error => {
                toast.error("This didn't work.")
                setError(error.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center w-full">
                    <img src="https://i.ibb.co/FhYkFD8/login-access-protection.webp" alt="login-access-protection" border="0" />

                </div>
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-red-100">
                    <h1 className="text-5xl text-center font-bold">Sign up!</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="Email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>

                        <div className="form-control mt-6">

                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>

                        <p className="text-orange-700">{error}</p>

                        <p> <small className="text-dark my-6 text-xl ">Already have an account? Please</small> <Link className='text-orange-700 text-xl font-bold' to='/login'>Login</Link> </p>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignUp;