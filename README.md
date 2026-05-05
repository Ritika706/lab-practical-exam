# Lab Practical Exam - Authentication using Session & Cookies

## Problem 5: Build a simple login system using Express + Session (NO JWT)

### 1. Dummy User (hardcoded)
```
username: admin
password: 1234
```

### 2. Routes

#### POST /login
- Check username & password
- If correct:
  - Create session
  - Store user in session
  - Send response: "Login Successful"
- If wrong:
  - "Invalid Credentials"

#### GET /dashboard
- Protected route
- Only accessible if user is logged in (session exists)

#### GET /logout
- Destroy session
- Send "Logged out successfully"

### Requirements
- Use express-session ✓
- Use cookies (default with session) ✓
- Create middleware to protect /dashboard ✓

### Project Structure
```
.
├── server.js              (Main entry point)
├── src/
│   ├── middleware/
│   │   └── auth.js        (Authentication middleware)
│   └── routes/
│       ├── auth.js        (Login/Logout routes)
│       └── dashboard.js   (Protected dashboard route)
├── package.json
└── README.md
```

### Installation & Usage
```bash
npm install
npm start
```

Server runs on `http://localhost:3000`
