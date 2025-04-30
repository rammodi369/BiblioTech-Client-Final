import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";

function UserHistory() {
  const { user } = useSelector((state) => state.user);
  const [userHistory, setUserHistory] = useState(null);
   const ID= user.id ? user.id : user._id;
  useEffect(() => {
    const fetchUserHistory = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`https://bibliotech-server.onrender.com/api/user-history/${ID}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserHistory(response.data);
        console.log(response.data);
        console.table(response.data);
      } catch (error) {
        console.error('Error fetching user history:', error);
      }
    };

    fetchUserHistory();
  }, [ID]);

  if (!userHistory) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg font-medium">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8 ">
        <h1 className="text-3xl font-bold text-center mb-8">{userHistory.username}'s History</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">📚 Borrowed Books</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {userHistory.booksBorrowed.length > 0 ? (
              userHistory.booksBorrowed.map((book, index) => (
                <li key={index}>
                  <span className="font-medium">{book.title}</span> by {book.author} <br />
                  <span className="text-sm text-gray-500">
                  Borrowed on: {book.borrowedDate ? new Date(book.borrowedDate).toLocaleDateString() : 'N/A'} | 
                  Returned on: {book.returnDate ? new Date(book.returnDate).toLocaleDateString() : 'Not returned yet'} </span>
                </li>
              ))
            ) : (
              <li>No books borrowed</li>
            )}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">📖 Currently Borrowing</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {userHistory.booksBorrowingCurrently.length > 0 ? (
              userHistory.booksBorrowingCurrently.map((book, index) => (
                <li key={index}>
                  <span className="font-medium">{book.title}</span> by {book.author}
                </li>
              ))
            ) : (
              <li>Not currently borrowing any books</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserHistory;
