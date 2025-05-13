# NextBlogApp
# Full Stack Blog App (Next.js 15 + Prisma + PostgreSQL)

A simple full-stack blog application built using **Next.js App Router**, **Prisma ORM**, and **PostgreSQL**. This project supports full **CRUD (Create, Read, Update, Delete)** operations on blog posts and demonstrates integration with a database and API routes.

---

## 🚀 Features

- ✅ Create posts
- 📖 View a list of all posts
- ✏️ Edit a post
- ❌ Delete a post
- 👤 Each post is linked to a user
- ⚙️ API routes using Next.js
- 🔄 App Router (Next.js 13+)
- 🎯 Type-safe with TypeScript
- 🛢️ PostgreSQL via Prisma ORM

---

## 🏗️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **ORM:** [Prisma](https://www.prisma.io/)
- **Database:** PostgreSQL
- **Styling:** CSS / Tailwind (optional)
- **Deployment:** Vercel / Render / Railway (as you prefer)

---

## 📂 Project Structure

my-blog-app/
├── app/
│ └── page.tsx # Homepage displaying posts
│ └── create-post/ # Form to create a post
├── components/
│ └── CreatePostForm.tsx # Form component
├── pages/
│ └── api/
│ └── posts/
│ ├── createPost.ts
│ └── getPosts.ts
├── prisma/
│ └── schema.prisma
├── lib/
│ └── prisma.ts
├── .env
├── package.json
└── README.md


---

## ⚙️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/nextjs-blog-crud.git
cd nextjs-blog-crud

npm install
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/mydb"
npx prisma init          # if not already initialized
npx prisma migrate dev   # creates tables in DB
npx prisma generate
npm run dev
| Method | Endpoint                | Description       |
| ------ | ----------------------- | ----------------- |
| POST   | `/api/posts/createPost` | Create a new post |
| GET    | `/api/posts/getPosts`   | Fetch all posts   |
🧠 How It Works
Users enter a title, content, and user ID in a form.

The form sends a POST request to /api/posts/createPost.

Posts are stored in PostgreSQL via Prisma ORM.

Homepage fetches posts using a GET request to /api/posts/getPosts.

Posts are displayed in a list with their title, content, and author.


