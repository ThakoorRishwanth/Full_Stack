import React, { useEffect, useState } from 'react'
import { api } from '../utils/api';

export const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        const fetchBooks= async()=>{
            const response = await api.get('/books');
            setBooks(response.data)
        }
        fetchBooks()
    },[])
  return (
    <div id="Details">
        <h1>Books</h1>
        <ul>
            {books.map(book =>{
                <li key={book._id}>{book.title} by {book.author}</li>
            })}
        </ul>
    </div>
  )
}
