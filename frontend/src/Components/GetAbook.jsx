import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useParams ,Link } from 'react-router-dom';
import { getBookById } from '../Api/bookApi'; // Import the function to get a book by ID

const GetABook = () => {
  const { id } = useParams(); // Get the book ID from the URL params
  const [book, setBook] = useState(null); // State to hold the book details

  useEffect(() => {
    // Fetch the book details when the component mounts
    getBookById(id)
      .then((response) => {
        console.log('Book details:', response.data);
        setBook(response.data); // Assuming the response contains the book details
      })
      .catch((error) => {
        console.error('Error fetching book:', error);
      });
  }, [id]); // Dependency on the book ID to refetch the book details when ID changes

  if (!book) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>; // Placeholder while book details are being fetched
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">{book.title}</h2>
      <p className="text-lg text-gray-600 mb-2">Author: {book.author}</p>
      <p className="text-lg text-gray-600 mb-2">ISBN: {book.isbn}</p>
      <p className="text-lg text-gray-600 mb-2">category: {book.category}</p>
      <p className="text-lg text-gray-600 mb-2">Description: {book.description}</p>
    
      <div className="mt-4 flex space-x-4">
            <Link to={`/book/${book._id}/edit`} className="text-blue-600 hover:underline flex items-center">
            <FaEdit className="mr-1" />
            </Link>
            <Link to={`/book/${book._id}/delete`} className="text-red-600 hover:underline flex items-center">
            <FaTrash className="mr-1" />
            </Link>
        </div>
      
    </div>
  );
};

export default GetABook;
