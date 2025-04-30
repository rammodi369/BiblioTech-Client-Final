import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const BookUserHistory = () => {
  const [bookHistory, setBookHistory] = useState([]);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const fetchBookHistory = async () => {
      try {
        const response = await axios.get(`https://bibliotech-server.onrender.com/api/books/history/borrowing`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBookHistory(response.data);
      } catch (error) {
        console.error('Error fetching book history:', error);
      }
    };

    fetchBookHistory();
  }, [token]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-blue-600 mb-8">Book Borrowing History</h1>

        {bookHistory
          .filter((book) => book.history && book.history.length > 0)
          .map((book) => (
            <div key={book.bookId} className="bg-white rounded-xl shadow-lg mb-8 p-6">
              <h2 className="text-xl font-bold text-blue-700 mb-4">{book.title}</h2>
              <table className="min-w-full">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-blue-600 uppercase">Username</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-blue-600 uppercase">Email</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-blue-600 uppercase">Borrowed At</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-blue-600 uppercase">Returned At</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-blue-600 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {book.history.map((entry, idx) => (
                    <tr key={idx} className="hover:bg-blue-50 transition duration-200">
                      <td className="py-3 px-4">{entry.username || 'Unknown'}</td>
                      <td className="py-3 px-4">{entry.email || 'Unknown'}</td>
                      <td className="py-3 px-4">
                        {entry.borrowedAt ? new Date(entry.borrowedAt).toLocaleString() : 'N/A'}
                      </td>
                      <td className="py-3 px-4">
                        {entry.returnedAt ? new Date(entry.returnedAt).toLocaleString() : 'Not Returned'}
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            entry.status === 'Returned'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {entry.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BookUserHistory;
