import { useState } from 'react';

const EditPostForm = ({ post }: any) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/posts/updatePost', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: post.id,
        title,
        content,
      }),
    });

    if (response.ok) {
      const updatedPost = await response.json();
      console.log('Post updated:', updatedPost);
    } else {
      console.error('Error updating post');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Update Post</button>
    </form>
  );
};

export default EditPostForm;
