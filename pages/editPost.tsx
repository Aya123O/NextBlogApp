import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import EditPostForm from '../components/EditPostForm';

const EditPostPage = () => {
  const [post, setPost] = useState<any | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        const response = await fetch(`/api/posts/getPost?id=${id}`);
        if (response.ok) {
          const data = await response.json();
          setPost(data);
        }
      };
      fetchPost();
    }
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>Edit Post</h1>
      <EditPostForm post={post} />
    </div>
  );
};

export default EditPostPage;
