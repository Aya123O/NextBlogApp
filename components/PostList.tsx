'use client';
import { useEffect, useState } from 'react';
type Post = {
  id: string;
  title: string;
  content: string;
  user: {
    name: string;
  };
};

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [editingPostId, setEditingPostId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch('/api/posts/getPosts');
    const data = await res.json();
    setPosts(data);
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/posts/deletePost?id=${id}`, { method: 'DELETE' });
    fetchPosts();
  };

  const startEditing = (post: any) => {
    setEditingPostId(post.id);
    setEditTitle(post.title);
    setEditContent(post.content);
  };

  const handleUpdate = async () => {
    const res = await fetch('/api/posts/updatePost', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: editingPostId,
        title: editTitle,
        content: editContent,
      }),
    });

    if (res.ok) {
      setEditingPostId(null);
      fetchPosts();
    } else {
      console.error('Update failed');
    }
  };

  return (
    <div className="mt-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-8">All Blog Posts</h2>

      {posts.map((post) => (
        console.log(post),  
        <div
          key={post.id}
          className="bg-white p-6 rounded-xl shadow-lg mb-6 transition-all hover:scale-105 hover:shadow-2xl"
        >
          {editingPostId === post.id ? (
            <div className="space-y-4">
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                placeholder="Enter post title"
              />
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none h-28 focus:ring-2 focus:ring-indigo-500 transition-all"
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                placeholder="Enter post content"
              />
              <div className="flex gap-6 mt-4 justify-start">
                <button
                  onClick={handleUpdate}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-all"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingPostId(null)}
                  className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{post.title}</h3>
              <p className="text-gray-600 mb-3">Description:{post.content}</p>
              <p className="text-gray-500 text-sm mb-4">
                Posted by: {post.user.name} 
              </p>
              <p className="text-gray-500 text-sm mb-4">created At : {new Date().toLocaleDateString()} </p>
             
              <div className="flex gap-6">
                <button
                  onClick={() => startEditing(post)}
                  className="bg-yellow-500 text-white px-3 py-2 rounded-lg hover:bg-yellow-600 transition-all"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition-all"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostList;
