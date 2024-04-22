import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookById, deleteAbook } from '../Api/bookApi'; // Import the necessary API functions
import { FaTrash } from 'react-icons/fa'; // Import the trash icon

const DeleteBook = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [book, setBook] = useState(null); 

  useEffect(() => {
    getBookById(id)
      .then((response) => {
        setBook(response.data); 
      })
      .catch((error) => {
        console.error('Error fetching book:', error);
      });
  }, [id]);

  const handleDelete = () => {
    deleteAbook(id)
      .then(() => {
        console.log('Book deleted successfully');
        window.location.href = `/dashboard`; // Redirect to book list page after deletion
      })
      .catch((error) => {
        console.error('Error deleting book:', error);
      });
  };
  

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Delete Book</h2>
      <p>Are you sure you want to delete the book "{book.title}"?</p>
      <div className="mt-4 flex space-x-4">
        <button onClick={handleDelete} className="flex items-center bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">
          <FaTrash className="mr-2" /> Delete
        </button>
        <button onClick={() => navigate('/dashboard') }  className="flex items-center bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
