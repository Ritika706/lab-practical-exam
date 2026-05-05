const express = require('express');
const router = express.Router();


const DUMMY_USER = {
  username: 'admin',
  password: '1234'
};


router.post('/login', (req, res) => {
  const { username, password } = req.body;

  
  if (username === DUMMY_USER.username && password === DUMMY_USER.password) {
    
    req.session.user = { username: username };
    
    
    res.status(200).send('Login Successful');
  } else {
    
    res.status(401).send('Invalid Credentials');
  }
});


router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Error logging out');
    }
    res.status(200).send('Logged out successfully');
  });
});

module.exports = router;
