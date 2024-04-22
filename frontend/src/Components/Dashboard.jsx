import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllBooks } from '../Api/bookApi'; 
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'; // Import icons



const Dashboard = () => {
    const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks()
      .then((response) => {
        console.log(response.data); // Check if data is received correctly
        if (Array.isArray(response.data)) {
          setBooks(response.data);
        } else {
          console.error('Received data is not an array:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }, []);

  // If books is not an array or empty, display a message
  if (!Array.isArray(books) || books.length === 0) {
    return (
        <div className="flex flex-col h-screen">
        {/* Header */}
        <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
          <div className="flex items-center"> {/* Added a flex container */}
            <h1 className="text-2xl font-semibold">Dashboard</h1>
          </div>
          <div>
          <Link to="/create-book">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">
                Add Book
              </button>
            </Link>
          </div>
        </header>
      <div className="flex flex-col h-screen justify-center items-center">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p>No books found</p>
      </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center"> {/* Added a flex container */}
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
        <div>
        <Link to="/create-book">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">
              Add Book
            </button>
          </Link>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
        <div className="max-w-7xl mx-auto py-6">
          <h2 className="text-2xl font-semibold mb-4">Your Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {books.map((book) => (
              <div key={book._id} className="bg-white shadow-md p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
                <p className="text-gray-700">Author: {book.author}</p>
                <p className="text-gray-700">Category: {book.category}</p>


            <div className="mt-4 flex space-x-4">
                <Link to={`/book/${book._id}`} className="text-gray-600 hover:underline flex items-center">
                <FaEye className="mr-1" />
                </Link>
                <Link to={`/book/${book._id}/edit`} className="text-blue-600 hover:underline flex items-center">
                <FaEdit className="mr-1" />
                </Link>
                <Link to={`/book/${book._id}/delete`} className="text-red-600 hover:underline flex items-center">
                <FaTrash className="mr-1" />
                </Link>
            </div>

              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 px-6">
        {/* Add footer content here */}
        <p>&copy; see ya in hell </p>
      </footer>
    </div>
  );
};

export default Dashboard;
