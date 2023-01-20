import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaGooglePlusG } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../../api/Auth';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Login = () => {
    const [error, setError] = useState('');
    const { signInUser, providerLogin, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Login');
    const from = location.state?.from?.pathname || '/';


    const googleProvider = new GoogleAuthProvider();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        signInUser(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                form.reset();

                const currentUser = {
                    email: user.email
                }
                //get jwt token
                fetch('https://service-review-server-side-three.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        toast.success('Successfully login to the account');
                        navigate(from, { replace: true });
                    })


                // if (user) {
                //     toast.success('Successfully login to the account');
                //     navigate(from, { replace: true });
                // }
                // else {
                //     toast.error('Your email is not verified.Please now verified your email address.')
                // }
            })
            .catch(error => {
                toast.error(error.message);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false)
            })

    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                setAuthToken(user);
                toast.success('Successfully login to the account');
            })
            .catch(error => toast.error(error.message))
    }


    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center w-full">
                    <img src="https://i.ibb.co/FhYkFD8/login-access-protection.webp" alt="login-access-protection" border="0" />

                </div>
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-teal-100">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to="" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">

                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>

                        <p className="text-orange-700">{error}</p>


                    </form>
                    <div className=" text-center mb-6 ">

                        <p> <small className="text-dark text-xl">New to this website? Please</small> <Link className='text-orange-700 text-xl font-bold' to='/signup'>Sign Up</Link>
                        </p>
                        <div className="flex my-4 ">
                            <p className='w-1/2 border border-amber-600 m-3'></p> <span className='text-blue-600 font-bold'>OR</span> <p className='w-1/2 border border-amber-600 m-3 '></p>
                        </div>

                        <button onClick={handleGoogleSignIn} className="btn btn-secondary mb-5 text-xl"><FaGooglePlusG className="text-4xl"></FaGooglePlusG>  Login With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;