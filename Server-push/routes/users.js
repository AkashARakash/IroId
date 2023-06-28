const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');

router.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  const user = new User({
    username,
    email,
    password,
  });

  user
    .save()
    .then((signup) => {
      res.json({ message: 'Signup successful' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
});

router.get('/get/:id', (req, res) => {
  const userId = req.params.id;

  User.findById(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const { _id, username, email } = user;
      res.json({ user: { _id, username, email } });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
});

router.post('/login', function (req, res) {
  const { username, password } = req.body;

  User.findOne({ username, password })
    .then((user) => {
      if (user) {
        const token = jwt.sign({ username: user.username }, 'secret_key');
        res.json({ Bearer: token });
      } else {
        res.status(401).json({ message: 'Invalid login credentials' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
});

router.post('/logout', (req, res) => {
  res.clearCookie('jwt');
  res.json({ message: 'Logout successful.' });
});

module.exports = router;
