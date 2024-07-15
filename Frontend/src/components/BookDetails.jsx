import React, { useEffect } from 'react'
import { api } from '../utils/api';
import { ReviewList } from './ReviewList';

export const BookDetails = () => {
    const {id} = useParams();
    const[book, setBook] = useState(null);

    useEffect(()=>{
        const fetchBook = async()=>{
            const response = await api.get(`/books/${id}`);
            setBook(response.data);
        };
        fetchBook()
    },[id])
  return (
    <>
    <div>
        {book ? (
            <div>
                <h1>{book.title}</h1>
                <p>{book.author}</p>
                <p>{book.price}</p>
                <ReviewList bookId={book._id}/>
            </div>
        ):(
            <p>Loading...</p>
        )}
    </div>
    </>
  )
}
