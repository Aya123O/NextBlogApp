Blog Application with Next.js, Prisma, PostgreSQL, and NextAuth
Overview
This project is a Blog application built with Next.js, using Prisma as the ORM to interact with a PostgreSQL database. It allows authenticated users to create, read, update, and delete blog posts (CRUD functionality). NextAuth is integrated to enable user authentication through Google sign-in.

Features
User Authentication: Google Sign-In via NextAuth.

CRUD Operations: Ability to create, read, update, and delete blog posts.

PostgreSQL Database: All data is stored in a PostgreSQL database using Prisma ORM.

Protected Routes: Only authenticated users can create, update, or delete posts.

Responsive Design: Optimized for use across various devices and screen sizes.

Tech Stack
Frontend: React, Next.js

Backend: Next.js API Routes

Database: PostgreSQL

ORM: Prisma

Authentication: NextAuth.js (Google Authentication)

Styling: CSS (tailored to the app)

Prerequisites
To get started with this project, make sure you have the following installed:

Node.js (v16 or above)

PostgreSQL database installed and running

Google Developer Console account for OAuth credentials

Setup Instructions
1. Clone the Repository
First, clone this repository to your local machine:


git clone https://github.com/your-username/blog-nextjs-prisma.git
cd blog-nextjs-prisma
2. Install Dependencies
Run the following command to install the project dependencies:


npm install
3. Configure PostgreSQL Database
Create a PostgreSQL database (you can use services like Heroku Postgres, or set it up locally).

Update the .env file with your database connection URL. Example:


DATABASE_URL="postgresql://username:password@localhost:5432/mydatabase?schema=public"
Run the Prisma migration command to create the necessary database tables:

npx prisma migrate dev --name init
This will generate the necessary tables (User and Post) in your PostgreSQL database.

4. Set Up Google Authentication (NextAuth)
Go to the Google Developer Console.

Create a new project and enable Google OAuth 2.0 API.

Obtain your Client ID and Client Secret.

Add the credentials to your .env file:


NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
5. Run the Application
Once you’ve completed the above steps, you can run the application locally with:


npm run dev
Visit http://localhost:3000 in your browser to see your blog application in action.
