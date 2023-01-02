import React, { useContext, useEffect, useState } from 'react';
import { FaTachometerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewsRow from './ReviewsRow';

const Reviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    console.log(reviews)

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handlerDelete = id => {
        const proceed = window.confirm('Are you sure,you want to cancel this review');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
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
                                                    <Link to="/allservice"><button className="btn btn-primary">Please Review</button></Link>
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