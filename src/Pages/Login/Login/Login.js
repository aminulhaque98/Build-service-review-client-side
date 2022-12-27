import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { signInUser, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log('checking', email, password);

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                form.reset();

                if (user) {
                    navigate(from, { reolace: true });
                    toast.success('Successfully login to the account');
                }
                else {
                    toast.error('Your email is not verified.Please now verified your email address.')
                }
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false)
            })

    }


    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center w-full">
                    <img src="https://i.ibb.co/FhYkFD8/login-access-protection.webp" alt="login-access-protection" border="0" />

                </div>
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center font-bold">Login now!</h1>
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

                        <p> <small className="text-dark my-6 text-xl ">New to this website? Please</small> <Link className='text-orange-700 text-xl font-bold' to='/signup'>Sign Up</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;