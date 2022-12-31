import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Header = () => {
    const { user, logOut, toggleTheme } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>

        <li className='font-semibold'><Link to='/'>FQA</Link></li>
        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>

        <li className='font-semibold'>{
            user?.uid ?
                <>
                    <Link to='/' className='font-semibold'>My service</Link>
                    <Link to='/' className='font-semibold'>Add service</Link>
                    <button className='me-3 font-semibold' onClick={handleLogOut} variant="outline-info">LogOut</button>
                </>
                :
                <>
                    <Link to='/login'><button className='me-3 font-semibold' variant="outline-primary">Login</button></Link>

                </>
        }</li>

    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/"><img className='w-12 h-12 lg-ml-16 ' src="https://i.ibb.co/vjKGKMh/logo.jpg" alt="" /></Link>
                <Link to="/" className="text-xl font-bold"><span className='text-purple-600'>Truseen</span> Construction Ltd.</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>

            <div className="navbar-end">
                <Link className='me-3' to="/profile">


                    {user?.photoURL ?
                        <>
                            {user?.photoURL ?

                                <figure className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                    <img style={{ height: '50px' }} className='w-full h-56 rounded-full' src={user?.photoURL} alt="Shoes" />
                                </figure>

                                :
                                <span>{user?.displayName}</span>
                            }

                        </>

                        :
                        <FaUserAlt style={{ height: '50px' }} ></FaUserAlt>
                    }
                </Link>

            </div>
        </div>

    );
};

export default Header;