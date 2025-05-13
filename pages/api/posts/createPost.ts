import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

interface PostRequest {
  title: string;
  content: string;
  userId: string;
  userName: string;  
  userEmail: string; 
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { title, content, userId, userName, userEmail }: PostRequest = req.body;

      let user = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (!user) {
        user = await prisma.user.create({
          data: {
            id: userId,
            name: userName,
            email: userEmail,
            emailVerified: new Date(),  
          },
        });
      }

      const post = await prisma.post.create({
        data: {
          title,
          content,
          userId: user.id,  
        },
      });

      res.status(201).json(post);
    } catch (error) {
      console.error('Error creating post:', error);
      res.status(500).json({ error: 'Failed to create post' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
