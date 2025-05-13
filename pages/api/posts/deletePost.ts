import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
const deletePost = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  try {
    await prisma.post.delete({
      where: { id: String(id) },
    });
    res.status(200).json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete post' });
  }
};

export default deletePost;
