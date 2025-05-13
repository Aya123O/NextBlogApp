import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma'; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    const { id, title, content } = req.body;

    try {
      const updatedPost = await prisma.post.update({
        where: { id },
        data: { title, content },
      });
      res.status(200).json(updatedPost);
    } catch (error) {
      console.error('Error updating post:', error);
      res.status(500).json({ error: 'Failed to update post' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
