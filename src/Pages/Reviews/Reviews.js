import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewsRow from './ReviewsRow';

const Reviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useTitle('Reviews');


    useEffect(() => {
        fetch(`https://service-review-server-side-three.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('services-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut()
                }
                return res.json()
            })
            .then(data => {
                setReviews(data)
            })
    }, [user?.email, logOut])

    const handlerDelete = id => {
        const proceed = window.confirm('Are you sure,you want to cancel this review');
        if (proceed) {
            fetch(`https://service-review-server-side-three.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        toast.success('Successfully Complete Your deleted data!');
                        const remaining = reviews.filter(review => review._id !== id);
                        setReviews(remaining);
                    }
                })
        }

    }


    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head  */}
                    <thead>
                        <tr>
                            <th>
                                Delete Review
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews[0]?.email ?
                                <>
                                    {
                                        reviews.map(review => <ReviewsRow
                                            key={review._id}
                                            review={review}
                                            handlerDelete={handlerDelete}
                                        ></ReviewsRow>)
                                    }
                                </>
                                :
                                <tr className=''>
                                    <td className=''>
                                        <div className="card w-full bg-neutral text-neutral-content">
                                            <div className="card-body items-center text-center">
                                                <h2 className="card-title">Here is your review!</h2>
                                                <p>You have not added any review.</p>
                                                <div className="card-actions justify-end">
                                                    <Link to="/services"><button className="btn btn-primary">Please Add Review</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                        }
                    </tbody>
                    {/* <!-- foot --> */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Massage</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default Reviews;