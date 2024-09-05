**MERN Blog Application**

A full-stack blog application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
The app provides a platform where anyone can read posts, like, comment, and search for blogs.
It also includes an admin dashboard for monitoring and managing content and users.

**Features**

##User Features
1. Create Posts: Admin users can create blogs.
2. Read Blogs: All users (including non-admins) can read blogs.
3. Comment & Like: Users can leave comments and like posts.
4. Search: Users can search for blogs based on title, keywords, etc.
5. Responsive Design: Designed with Tailwind CSS for modern, mobile-friendly UI.

##Admin Features
1. Dashboard Overview: Admin users can view statistics such as:
2. Number of posts.
3. Number of comments.
4. Total users.
5. Post Management: Admins can manage posts and moderate comments.
6. User Management: Admins can track users' activity and contributions.

##UI/UX
1. Built using Tailwind CSS and Flowbite React for a sleek and responsive design.
2. Clean, user-friendly interface with great UX for both users and admins.

##Tech Stack

#Frontend
1. React.js: Core UI framework.
2. Flowbite React: Prebuilt components for design.
3. Tailwind CSS: For styling and responsive design.
4. Axios: For API calls.

#Backend
1. Node.js & Express.js: For building the server and API routes.
2. MongoDB & Mongoose: For the database and data modeling.

#Authentication & Authorization
1. JWT (JSON Web Token): For secure authentication.
2. Role-based access control to manage user/admin privileges.

##Setup Instructions

#Prerequisites
1. Node.js installed.
2. MongoDB installed and running.

#Installation

1. Clone the repository

2. Install dependencies : npm install

3. Set up environment variables : 

                         Create a .env file in the root directory with the following:

                         Copy code : 

                                MONGO_URI=your_mongodb_uri
                                JWT_SECRET=your_jwt_secret

4. Run the development server : npm run dev
   
5. Open your browser and navigate to http://localhost:3000.

**Admin Access**

To log in as an admin, use the predefined admin credentials or create one manually in the database.


Feel free to submit a pull request if you want to contribute or improve the project!  

_**HOSTED LINK**_ : https://mern-blog-app-pk.onrender.com
