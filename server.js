const express = require('express');//express import kra
const session = require('express-session');//session library import kra
const authRoutes = require('./src/routes/auth');
const dashboardRoutes = require('./src/routes/dashboard');//routes import kre

const app = express();
const PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,  
    maxAge: 1000 * 60 * 60 * 24  
  }
}));

app.use('/', authRoutes);
app.use('/', dashboardRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
