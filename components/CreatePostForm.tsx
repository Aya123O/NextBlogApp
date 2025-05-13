'use client';
import { useState } from 'react';

const CreatePostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/posts/createPost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
        userId,
        userName,
        userEmail,
      }),
    });

    if (response.ok) {
      const post = await response.json();
      clearForm(); 
      console.log('New Post Created:', post);
    } else {
      const error = await response.json();
      console.error('Error creating post:', error);
    }
  };

  const clearForm = () => {
    setTitle('');
    setContent('');
    setUserId('');
    setUserName('');
    setUserEmail('');
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-xl space-y-6"
      >
        <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-4">Create New Post</h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-5 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all"
        />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="w-full px-5 py-3 bg-gray-100 border border-gray-300 rounded-lg resize-none h-32 focus:ring-2 focus:ring-indigo-500 transition-all"
        />

        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
          className="w-full px-5 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all"
        />

        <input
          type="text"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
          className="w-full px-5 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all"
        />

        <input
          type="email"
          placeholder="User Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
          className="w-full px-5 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all"
        />

        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 transition-all"
        >
          Create Post
        </button>
      </form>

      
    </div>
  );
};

export default CreatePostForm;
