/* eslint-disable no-console*/
const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config');


const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;

app.use(webpackMiddleware(webpack(webpackConfig), {
  hot: true,
  colors: true,
  publicPath: '/',
  noInfo: true
}));

app.use(express.static('build'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(PORT, () => {
  console.log('App is running on localhost: ', PORT);
});
