<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

  <h1 align="center">Items Management System</h1>

  <p align="center">
    A feature-rich inventory management system built using the MERN stack with TypeScript.
  </p>

  <h2>🚀 Features</h2>

  <ul>
    <li>Create, Read, Update, and Delete (CRUD) functionality for items.</li>
    <li>Rating System: Users can rate items and manage their ratings.</li>
    <li>Image Upload: Integrated support for image uploads.</li>
    <li><strong>JWT-based authentication</strong> for secure user access.</li>
    <li>Responsive and user-friendly interface.</li>
    <li>Backend API validation for secure operations.</li>
    <li>Scalable folder structure for maintainability.</li>
  </ul>

  <h2>🛠️ Tech Stack</h2>

  <h3>Frontend</h3>
  <ul>
    <li><strong>React</strong> with TypeScript for building dynamic and type-safe UIs.</li>
    <li><strong>Material-UI</strong> for pre-styled and customizable components.</li>
    <li><strong>Vite</strong> for lightning-fast build times.</li>
  </ul>

  <h3>Backend</h3>
  <ul>
    <li><strong>Node.js</strong> and <strong>Express</strong> for building RESTful APIs.</li>
    <li><strong>MongoDB</strong> with Mongoose for database interactions.</li>
    <li><strong>TypeScript</strong> for type safety and maintainability.</li>
    <li><strong>JWT</strong> for secure user authentication.</li>
  </ul>

  <h2>📂 Folder Structure</h2>

  <h3>Backend</h3>
  <pre>
  backend/
  ├── controllers/      # Request handling and business logic
  ├── db/               # MongoDB connection setup
  ├── middlewares/      # Custom middlewares (e.g., authentication, error handling)
  ├── models/           # Mongoose schemas and models
  ├── routes/           # API route definitions
  ├── uploads/          # Directory for uploaded files
  ├── validators/       # Input validation logic
  ├── app.ts            # Express app setup
  └── index.ts          # Main server entry point
  </pre>

  <h3>Frontend</h3>
  <pre>
  frontend/
  ├── src/
  │   ├── components/   # Reusable UI components
  │   ├── context/      # Context API for global state management
  │   ├── pages/        # Application views/pages
  │   ├── utils/        # Utility functions
  │   ├── types.ts      # TypeScript types and interfaces
  │   ├── App.tsx       # Main application component
  │   └── main.tsx      # Entry point for React
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
  Create a <code>.env</code> file in the <code>backend</code> directory and configure the following:

  <pre>
  PORT=3000
  MONGO_URI=mongodb://localhost:27017/itemsdb
  JWT_SECRET=your_jwt_secret
  </pre>

  <h3>4. Transpile TypeScript (Backend)</h3>

  Before starting the backend server, you need to transpile TypeScript into JavaScript.

  1. **Install TypeScript globally (if not installed)**:
     <pre>
     npm install -g typescript
     </pre>

  2. **Compile TypeScript to JavaScript**:
     <pre>
     tsc --project tsconfig.json
     </pre>

  3. **Start the Backend Server**:
     After compiling, start the backend server with:
     <pre>
     npm start
     </pre>

     Or use `ts-node` for development:
     <pre>
     npx ts-node src/index.ts
     </pre>

  <h3>5. Build and Deploy the Frontend (React + TypeScript)</h3>

  1. **Build the Frontend for Production**:
     <pre>
     cd frontend
     npm run build
     </pre>

  2. **Deploy the Built Frontend**:
     After building the frontend, deploy it on Railway (or any other hosting platform like Vercel or Netlify).

     If deploying to Railway:
     - Go to **Railway Dashboard**.
     - Click **New Project**.
     - Select **Deploy from GitHub** and connect your repo.
     - Set the **Build Command** to `npm run build` and the **Start Command** to `npm run preview`.

  <h2>🌐 API Endpoints</h2>

  <table border="1">
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
      <tr>
        <td>POST</td>
        <td>/api/items/:id/rate</td>
        <td>Rate an item</td>
      </tr>
      <tr>
        <td>PUT</td>
        <td>/api/items/:id/rate</td>
        <td>Edit user rating for an item</td>
      </tr>
      <tr>
        <td>DELETE</td>
        <td>/api/items/:id/rate</td>
        <td>Remove user rating from an item</td>
      </tr>
    </tbody>
  </table>

  <h2>📝 Deployment Instructions for Railway</h2>

  <h3>1. Set up the Railway Project</h3>
  <ul>
    <li>Visit <a href="https://railway.app/">Railway</a>.</li>
    <li>Sign in or create an account.</li>
    <li>Click <strong>"New Project"</strong> and select <strong>"Deploy from GitHub"</strong>.</li>
    <li>Connect your GitHub account and choose the repository for your project.</li>
  </ul>

  <h3>2. Deploy the Backend</h3>
  <ul>
    <li>In your Railway project dashboard, go to the <strong>Variables</strong> tab.</li>
    <li>Add the following environment variables:
      <ul>
        <li><strong>PORT</strong>: 3000 (or any available port)</li>
        <li><strong>MONGO_URI</strong>: Your MongoDB connection string</li>
        <li><strong>JWT_SECRET</strong>: A secret string for JWT generation</li>
      </ul>
    </li>
    <li>Click <strong>Deploy</strong> to deploy the backend.</li>
  </ul>

  <h3>3. Deploy the Frontend</h3>
  <ul>
    <li>Click on <strong>"Add Service"</strong> and select <strong>Frontend</strong>.</li>
    <li>Choose <strong>Vite</strong> as your frontend deployment method.</li>
    <li>Set the build directory to <strong>frontend</strong>.</li>
    <li>Set the build and start commands.</li>
    <li>Click <strong>Deploy</strong> to deploy the frontend.</li>
  </ul>

  <h3>4. MongoDB Atlas (Optional)</h3>
  <ul>
    <li>If using MongoDB Atlas, sign up at <a href="https://www.mongodb.com/cloud/atlas">MongoDB Atlas</a>.</li>
    <li>Create a cluster and get your connection string.</li>
    <li>Update the <strong>MONGO_URI</strong> variable in Railway with the connection string.</li>
  </ul>

  <h3>5. Connect the Frontend and Backend</h3>
  <ul>
    <li>Once deployed, update the frontend to make API calls to the live backend by replacing <code>localhost:3000</code> with your Railway backend URL.</li>
  </ul>

  <h2>🤝 Contributing</h2>

  <ul>
    <li>Fork the repository.</li>
    <li>Create a feature branch:
      <pre>git checkout -b my-feature</pre>
    </li>
    <li>Commit your changes:
      <pre>git commit -m "Add some feature"</pre>
    </li>
    <li>Push to the branch:
      <pre>git push origin my-feature</pre>
    </li>
    <li>Open a pull request.</li>
  </ul>

  <h2>📃 License</h2>
  <p>This project is licensed under the <strong>MIT License</strong>. See the <code>LICENSE</code> file for more details.</p>

  <h2>👨‍💻 Author</h2>
  <p><strong>Mohamed00674</strong><br>
  <a href="https://github.com/Mohamed00674">GitHub</a></p>

</body>
</html>
