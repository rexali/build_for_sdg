const express = require('express');

const api = express.Router();

api.get('/on-covid-19', (req, res) => {
  res.send('API 2: Sample response for /on-covid-19 default json: comming soon');
});
api.get('/on-covid-19/json', (req, res) => {
  res.send('API 2:  Sample response for /on-covid-19/json: comming soon');
});
api.get('/on-covid-19/xml', (req, res) => {
  res.send('API 2: Sample response for /on-covid-19/xml: comming soon');
});

api.get('/on-covid19/logs', (req, res) => {
  res.send('API 2: Sample response for /on-covid-19/log: comming soon');
});


module.exports = api;
