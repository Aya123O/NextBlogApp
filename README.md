Blog Application with Next.js, Prisma, PostgreSQL, and NextAuth
📌 Overview
This is a fully functional Blog Application built with Next.js, using Prisma as the ORM to interact with a PostgreSQL database. The app enables authenticated users to create, read, update, and delete (CRUD) blog posts. NextAuth.js is used to implement secure authentication via Google Sign-In.

✅ Features
🔐 User Authentication: Sign in with Google using NextAuth.js.

✍️ CRUD Functionality: Authenticated users can create, edit, and delete blog posts.

🗃️ PostgreSQL Database: Data is persisted using Prisma ORM with PostgreSQL.

🔒 Protected Routes: Only logged-in users can create or modify posts.

📱 Responsive Design: Works seamlessly across all devices and screen sizes.

🛠️ Tech Stack
Frontend: Next.js (React-based)

Backend: Next.js API Routes

Database: PostgreSQL

ORM: Prisma

Authentication: NextAuth.js (Google Provider)

Styling: Custom CSS

🔧 Prerequisites
Before setting up the project, make sure you have:

Node.js (v16 or higher)

PostgreSQL (installed and running)

A Google Developer Console account to generate OAuth credentials

🚀 Getting Started
1️⃣ Clone the Repository

git clone https://github.com/your-username/blog-nextjs-prisma.git
cd blog-nextjs-prisma
2️⃣ Install Dependencies

npm install
3️⃣ Configure the PostgreSQL Database
Create a PostgreSQL database (locally or using a service like Heroku Postgres).

Update the .env file with your database connection URL:

DATABASE_URL="postgresql://username:password@localhost:5432/mydatabase?schema=public"
Run Prisma migration to set up the database schema:


npx prisma migrate dev --name init
4️⃣ Set Up Google Authentication
Go to the Google Developer Console

Create a new project and enable OAuth 2.0

Add Client ID and Client Secret to your .env file:


NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
5️⃣ Run the Development Server

npm run dev
Visit http://localhost:3000 to access your blog app.

🙌 Final Notes
Ensure your database is running before starting the app.

You can customize styling and extend features such as user roles, comments, or tags.

For deployment, consider using Vercel (for frontend/backend) and Railway/Neon/Render for PostgreSQL hosting.

