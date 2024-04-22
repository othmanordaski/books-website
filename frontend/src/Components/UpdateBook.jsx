import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById, updateAbook } from '../Api/bookApi'; // Import the necessary API functions
import { FaSave } from 'react-icons/fa'; // Import the save icon

const EditBook = () => {
  const { id } = useParams(); 
  const [book, setBook] = useState(null); 
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    category: '',
    publicationDate: '',
    pageCount: '',
    description: ''
  });

  useEffect(() => {
    getBookById(id)
      .then((response) => {
        console.log(response)
        setBook(response.data); 
        setFormData({
          title: response.data.title,
          author: response.data.author,
          isbn: response.data.isbn,
          category: response.data.category,
          publicationDate: response.data.publicationDate,
          pageCount: response.data.pageCount,
          description: response.data.description
        });
      })
      .catch((error) => {
        console.error('Error fetching book:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateAbook(id, formData)
      .then(() => {
        console.log('Book updated successfully');
        window.location.href = `/book/${id}`;
      })
      .catch((error) => {
        console.error('Error updating book:', error);
      });
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Edit Book</h2>
      <form onSubmit={handleSubmit}>

        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
              Title
          </label>
          <div className="mt-2">
              <input
              id="title"
              name="title"
              type="text"
              autoComplete="title"
              value={formData.title}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
          </div>
        </div>

        {/* Author */}
        <div>
          <label htmlFor="author" className="block text-sm font-medium leading-6 text-gray-900">
              Author
          </label>
          <div className="mt-2">
              <input
              id="author"
              name="author"
              type="text"
              autoComplete="author"
              value={formData.author}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
          </div>
        </div>

        {/* ISBN */}
        <div>
          <label htmlFor="isbn" className="block text-sm font-medium leading-6 text-gray-900">
              ISBN
          </label>
          <div className="mt-2">
              <input
              id="isbn"
              name="isbn"
              type="text"
              autoComplete="isbn"
              value={formData.isbn}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
          </div>
        </div>

        {/* Page Count */}
        <div>
          <label htmlFor="pageCount" className="block text-sm font-medium leading-6 text-gray-900">
              Page Count
          </label>
          <div className="mt-2">
              <input
              id="pageCount"
              name="pageCount"
              type="number"
              autoComplete="pageCount"
              value={formData.pageCount}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
          </div>
        </div>

        <div>
            <label htmlFor="publicationDate" className="block text-sm font-medium leading-6 text-gray-900">
                Publication Date
            </label>
            <div className="mt-2">
                <input
                id="publicationDate"
                name="publicationDate"
                type="date"
                autoComplete="publicationDate"
                value={formData.publicationDate}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            </div>

        
        <div>
            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
              Description
            </label>
            <div className="mt-2">
              <textarea
                id="description"
                name="description"
                rows="3"
                autoComplete="description"
                value={formData.description}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>




        <button type="submit" className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          <FaSave className="mr-2" /> Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditBook;
