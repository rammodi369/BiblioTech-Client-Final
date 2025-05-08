import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('https://bibliotech-server.onrender.com/api/feedback', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFeedbacks(response.data);
      } catch (err) {
        setError('Failed to fetch feedbacks');
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  if (loading) return <p className="text-center text-xl font-medium py-4">Loading feedbacks...</p>;
  if (error) return <p className="text-center text-red-500 py-4">{error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-5xl font-semibold mb-6 text-center">All Feedbacks</h2>
      {feedbacks.length === 0 ? (
        <p className="text-center text-gray-500">No feedbacks available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbacks.map((fb) => (
            <div
              key={fb._id}
              className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition"
            >
              <p className="text-gray-700 mb-2">
                <strong className="text-gray-900">User:</strong> {fb.user?.username || 'Unknown'}
              </p>
              <p className="text-gray-700 mb-2">
                <strong className="text-gray-900">Subject:</strong> {fb.subject}
              </p>
              <p className="text-gray-700 mb-2">
                <strong className="text-gray-900">Message:</strong> {fb.message}
              </p>
              <p className="text-gray-500 text-sm">
                <strong>Date:</strong> {new Date(fb.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeedbackList;
