const express = require('express');
const session = require('express-session');
const authRoutes = require('./src/routes/auth');
const dashboardRoutes = require('./src/routes/dashboard');

const app = express();
const PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(session({//user ki login info ko store krne k liye
  secret: 'your-secret-key',//encryption key hoti h session ko encrypt rkhne k liye
  resave: false,
  saveUninitialized: true,//empty session save krega 
  cookie: {
    secure: false, //https ki zarrorat nhi 
    maxAge: 1000 * 60 * 60 * 24  //session validity time
  }
}));

app.use('/', authRoutes);
app.use('/', dashboardRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
