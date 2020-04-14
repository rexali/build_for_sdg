/* eslint-disable guard-for-in */
/* eslint-disable max-len */
const express = require('express');
const logger = require('morgan');
const xbuilder = require('xml2js');
const now = require('performance-now');

const api = express.Router();


api.use(logger('dev'));

api.get('/on-covid-19', (req, res) => {
  const start = now();
  req.app.locals.logs.push({
    tim: Math.round((new Date().getTime()) / 1000),
    pth: `${req.baseUrl}${req.url}`,
    timeTaken: (now() - start).toFixed(2)
  });
  res.send(req.app.locals.realResults);
});
api.get('/on-covid-19/json', (req, res) => {
  const start = now();
  req.app.locals.logs.push({
    tim: Math.round((new Date().getTime()) / 1000),
    pth: `${req.baseUrl}${req.url}`,
    timeTaken: (now() - start).toFixed(2)
  });
  res.send(req.app.locals.realResults);
});
api.get('/on-covid-19/xml', (req, res) => {
  const start = now();
  req.app.locals.logs.push({
    tim: Math.round((new Date().getTime()) / 1000),
    pth: `${req.baseUrl}${req.url}`,
    timeTaken: (now() - start).toFixed(2)
  });
  res.set('Content-Type', 'text/xml');
  if (req.app.locals.realResults[0] != null) {
    res.send(new xbuilder.Builder({ renderOpts: { pretty: false } }).buildObject(req.app.locals.realResults[0]));
  }
});

api.get('/on-covid-19/logs', (req, res) => {
  const arr = req.app.locals.logs;
  res.set('Content-Type', 'text/plain');
  if (req.app.locals.logs.length > 0) {
    let rt = ' ';
    // eslint-disable-next-line no-restricted-syntax
    for (let lg = 0; lg < arr.length;) {
      rt += `${`${arr[lg].tim}\t\t${arr[lg].pth}\t\tdone in ${arr[lg].timeTaken} seconds\n`}`;
      lg += 1;
    }
    res.send(rt);
  }
});

api.use((request, response) => {
  response.status(404).render('404');
});

module.exports = api;
