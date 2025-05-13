'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';
import CreatePostForm from '@/components/CreatePostForm';
import PostList from '@/components/PostList';

export default function HomePage() {
  const { data: session } = useSession();
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-indigo-600 shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-white text-3xl font-semibold">My Blog</h1>
          <div className="space-x-6 flex items-center">
            <a href="#home" className="text-white hover:text-indigo-300">Home</a>
            {session ? (
              <>
                <span className="text-white">Hi, {session.user.name}</span>
                <button
                  onClick={() => signOut()}
                  className="ml-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <button
                onClick={() => signIn()}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Welcome to My Blog</h1>

        {session && (
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-md"
            >
              {showForm ? 'Cancel' : 'Create New Post'}
            </button>
          </div>
        )}

        {showForm && session && (
          <div className="mb-10">
            <CreatePostForm />
          </div>
        )}

        <PostList />
      </div>
    </div>
  );
}
