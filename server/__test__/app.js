const express = require('express');

const app = express();

app.post('/login', (req, res) => {
  res.sendStatus(200);
});

module.exports = app;
