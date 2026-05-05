const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middleware/auth');


router.get('/dashboard', isAuthenticated, (req, res) => {
  res.status(200).send(`Welcome ${req.session.user.username} to the dashboard!`);
});

module.exports = router;
