import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

const getPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        user: true, 
      },
    });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
};

export default getPosts;
