import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewsRow from './ReviewsRow';

const Reviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])


    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head  */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <ReviewsRow
                                key={review._id}
                                review={review}
                            ></ReviewsRow>)
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