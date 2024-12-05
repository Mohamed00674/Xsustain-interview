<h1 align="center">Items Management System</h1>

<p align="center">
  A powerful inventory management system built using the MERN stack with TypeScript.
</p>

<h2>🚀 Features</h2>

<ul>
  <li>Create, Read, Update, and Delete (CRUD) functionality for items.</li>
  <li>Integrated image upload support.</li>
  <li><strong>JWT-based authentication</strong> for secure user access.</li>
  <li>Responsive and user-friendly interface.</li>
  <li>Secure backend API with validation.</li>
  <li>Scalable folder structure for maintainability.</li>
</ul>

<h2>🛠️ Tech Stack</h2>

<h3>Frontend</h3>
<ul>
  <li><strong>React</strong> with TypeScript for a dynamic and type-safe UI.</li>
  <li><strong>Material-UI</strong> for pre-styled, customizable components.</li>
  <li><strong>Vite</strong> as the build tool.</li>
</ul>

<h3>Backend</h3>
<ul>
  <li><strong>Node.js</strong> and <strong>Express</strong> for RESTful APIs.</li>
  <li><strong>MongoDB</strong> with Mongoose for database interactions.</li>
  <li><strong>TypeScript</strong> for type safety and maintainability.</li>
  <li><strong>JWT</strong> (JSON Web Tokens) for secure authentication.</li>
</ul>

<h2>📂 Folder Structure</h2>

<h3>Backend</h3>
<pre>
backend/
├── controllers/      # Business logic for handling requests
├── db/               # Database connection setup
├── middlewares/      # Middleware functions (e.g., error handling, authentication)
├── models/           # Mongoose models
├── routes/           # API route definitions
├── uploads/          # Folder for uploaded files
├── validators/       # Request validation logic
├── app.ts            # Express app setup
└── index.ts          # Main server entry point
</pre>

<h3>Frontend</h3>
<pre>
frontend/
├── src/
│   ├── components/   # Reusable UI components
│   ├── context/      # Context API for state management
│   ├── pages/        # Application pages
│   ├── utils/        # Utility functions
│   ├── types.ts      # TypeScript types and interfaces
│   ├── App.tsx       # Main app component
│   └── main.tsx      # Application entry point
└── public/           # Static assets
</pre>

<h2>⚙️ Setup Instructions</h2>

<h3>Prerequisites</h3>
<ul>
  <li><a href="https://nodejs.org/">Node.js</a> (v14 or later)</li>
  <li><a href="https://www.mongodb.com/">MongoDB</a> (local or cloud instance)</li>
  <li><a href="https://git-scm.com/">Git</a></li>
</ul>

<h3>1. Clone the Repository</h3>
<pre>
git clone https://github.com/Mohamed00674/Xsustain-interview.git
cd Xsustain-interview
</pre>

<h3>2. Install Dependencies</h3>

<strong>Backend:</strong>
<pre>
cd backend
npm install
</pre>

<strong>Frontend:</strong>
<pre>
cd frontend
npm install
</pre>

<h3>3. Configure Environment Variables</h3>
Create a <code>.env</code> file in the <code>backend</code> directory with the following:

<pre>
PORT=3000
MONGO_URI=mongodb://localhost:27017/itemsdb
JWT_SECRET=your_jwt_secret
</pre>

<h3>4. Start the Application</h3>

<strong>Backend:</strong>
<pre>
cd backend
npm start
</pre>

<strong>Frontend:</strong>
<pre>
cd frontend
npm start
</pre>

<h2>🌐 API Endpoints</h2>

<table>
  <thead>
    <tr>
      <th>Method</th>
      <th>Endpoint</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>/api/items</td>
      <td>Fetch all items</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/api/items</td>
      <td>Create a new item</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/api/items/:id</td>
      <td>Update an existing item</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/api/items/:id</td>
      <td>Delete an item</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/api/auth/login</td>
      <td>User login and JWT generation</td>
    </tr>
  </tbody>
</table>

<h2>🤝 Contributing</h2>
<ol>
  <li>Fork the repository.</li>
  <li>Create a feature branch: <code>git checkout -b my-feature</code>.</li>
  <li>Commit your changes: <code>git commit -m "Add some feature"</code>.</li>
  <li>Push to the branch: <code>git push origin my-feature</code>.</li>
  <li>Open a pull request.</li>
</ol>

<h2>📃 License</h2>
<p>This project is licensed under the <strong>MIT License</strong>. See the <code>LICENSE</code> file for details.</p>

<h2>👨‍💻 Author</h2>
<p>
  <strong>Mohamed00674</strong><br>
  <a href="https://github.com/Mohamed00674">GitHub</a> | 
</p>
