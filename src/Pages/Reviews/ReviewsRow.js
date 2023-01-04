import React from 'react';
import { Link } from 'react-router-dom';

const ReviewsRow = ({ review, handlerDelete }) => {
    const { _id, name, display_url, textReview, email } = review;


    return (

        <tr>

            <th>
                <label>
                    <button onClick={() => handlerDelete(_id)} className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-24 rounded">
                            <img src={display_url} alt="review_photo" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                {email}

            </td>
            <td>{textReview}</td>
            <th>
                <Link to={`/update/${_id}`}><button className="btn btn-ghost btn-xs">Edit Review</button></Link>
            </th>

        </tr>

    );
};

export default ReviewsRow;