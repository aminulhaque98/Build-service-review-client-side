import React from 'react';

const ReviewsRow = ({ review }) => {
    const { name, photo, textReview, email } = review;
    return (

        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50"></div>
                    </div>
                </div>
            </td>
            <td>
                {email}

            </td>
            <td> <textarea className="textarea textarea-ghost" placeholder="Bio">{textReview}</textarea></td>
            <th>
                <button className="btn btn-ghost btn-xs">Edit</button>
            </th>
        </tr>

    );
};

export default ReviewsRow;