# Online Complaint Registration and Management System

## Overview
This project is an **Online Complaint Registration and Management System** developed using the **MERN** stack (MongoDB, Express.js, React.js, Node.js) for the **Naan Mudhalvan** initiative. The system allows users to register complaints, track their status, and manage them efficiently. It also incorporates role-based access control to ensure different user roles (like Admin, User, and agent) have appropriate permissions and functionalities.

## Features
- **Role-Based Access Control**: Different user roles, such as Admin, User, and Agent, with specific permissions.
- **Complaint Registration**: Users can register complaints, providing all the necessary details.
- **Complaint Management**: Admins and Agent can assign, resolve, and close complaints.
- **Real-Time Updates**: Users can view the status of their complaints in real-time.
- - **WebRTC & Socket.io Integration**: Real-time messaging feature for users and agents to communicate instantly within the application.
- **Responsive Design**: Fully responsive UI for both desktop and mobile views.

## Tech Stack
- **Frontend**: React.js, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **State Management**: Redux (for state management in React)
- **Styling**: Material UI
## Link to the Project Demo video
Demo Video - https://drive.google.com/file/d/1yjLPJ7dclGxi5k7LH3hGEnuys5-U2Kwv/view?usp=drive_link

## Installation

### Prerequisites
- Node.js
- MongoDB (local or cloud instance)

### Clone the repository
```bash
git clone https://github.com/balaganesh102004/naan-mudhalvan-project.git
cd naan-mudhalvan-project
```

## Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install Dependencies:
   ```bash
   npm install
   ```
3. Start the Backend Server:
   ```bash
    npm start
   ```

## Frontend Setup

1. Navigate to the frontend directory:
   ```bash
    cd frontend
   ```
2. Install dependencies:
   ```bash
    npm install
   ```
3. Start the frontend:
     ```bash
    npm start
   ```
## Access the Application
Once both the frontend and backend are running, the application will be available at http://localhost:3000.

## File Structure

```bash
/NAAN-MUDHALVAN-PROJECT-MAIN
│
├── backend/
│   ├── node_modules/
│   ├── config.js
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│   └── Schema.js
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── components/
│       │   ├── admin/
│       │   ├── agent/
│       │   ├── common/
│       │   │   ├── ChatWindow.jsx
│       │   │   ├── FooterCj.jsx
│       │   │   ├── Home.jsx
│       │   │   ├── Login.jsx
│       │   │   ├── SignUp.jsx
│       │   └── user/
│       │       ├── Complaint.jsx
│       │       ├── HomePage.jsx
│       │       ├── Status.jsx
│       ├── App.css
│       ├── App.js
│       ├── index.js
│       ├── package.json
│       └── README.md
│
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## Explanation of Folders and Files

### backend/
Contains the Node.js server-side logic, including:
- `config.js`: Configuration settings for database connection.
- `index.js`: Entry point for the server, where routes are defined.
- `Schema.js`: MongoDB schema definitions for complaints and user data.
- `package.json`: Contains dependencies for the backend.

### frontend/
Contains the React.js client-side code, including:
- `public/index.html`: The main HTML file for the React app.
- `src/`: React components structured into different folders (admin, agent, user).
- `App.js`: The main component where the React app is structured.
- `HomePage.jsx`, `Login.jsx`, `SignUp.jsx`, etc.: Specific components for different pages and views.
- `package.json`: Contains dependencies for the frontend.
  
## Usage

### User Role:
- Users can register complaints, view their complaint status, and track updates.
- They can also edit or update their complaint details if necessary.

### Admin Role:
- Admins can view all complaints, assign them to Agents, update the status of complaints, and close resolved complaints.
- Admins also have access to user management and system settings.

### Agent Role:
- Agent can manage assigned complaints, update statuses, and interact with users to resolve issues.

### Complaint Workflow:
- Complaint registration → Admin assigns to Agent → Agent updates status → User is notified → Admin closes the complaint.
