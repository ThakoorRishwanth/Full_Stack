import React, { useEffect, useState } from 'react'
import { api } from '../utils/api'

export const ReviewList = ({bookId}) => {
    const[reviews, setReviews] = useState([])

    useEffect(()=>{
        const fetchReviews = async()=>{
            const response = await api.get(`books/${bookId}/reviews`);
            setReviews(response.data);
        };

        fetchReviews();

    },[bookId])
    return (
        <>
        <div>
            <h2>reviews</h2>
            <ul>
                {reviews.map(review => (
                    <li key={review._id}>
                        <strong>{review.rationg}</strong>:{review.comment}
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

