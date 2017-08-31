/* eslint-disable no-console*/
const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;

app.use(express.static('build'));
app.get('*', (req, res) => {
  res.sendFile('index.html');
});

app.listen(PORT, () => {
  console.log('App is running on localhost: ', PORT);
});
