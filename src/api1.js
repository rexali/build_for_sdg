
const express = require('express');
const logger = require('morgan');
// const convert = require('xml-js');
const toXML = require('jstoxml');
const now = require('performance-now');

const api = express.Router();


api.use(logger('dev'));

// const logs = [];
// app.locals.logs = logs;

api.get('/on-covid-19', (req, res) => {
  const start = now();
  res.send(req.app.locals.realResults);
  req.app.locals.logs.push({
    tim: new Date().getUTCMilliseconds(),
    pth: `${req.baseUrl}${req.url}`,
    timeTaken: (now() - start).toFixed(2)
  });
});
api.get('/on-covid-19/json', (req, res) => {
  const start = now();
  res.send(req.app.locals.realResults);
  req.app.locals.logs.push({
    tim: new Date().getUTCMilliseconds(),
    pth: `${req.baseUrl}${req.url}`,
    timeTaken: (now() - start).toFixed(2)
  });
});
api.get('/on-covid-19/xml', (req, res) => {
  const start = now();
  //   const options = { compact: true, ignoreComment: true, spaces: 4 };
  const xmlOptions = { header: false, indent: ' ' };
  const jsObj = req.app.locals.realResults;
  //   res.send(convert.js2xml(jsObj, options));
  res.send(toXML(jsObj, xmlOptions));

  req.app.locals.logs.push({
    tim: new Date().getUTCMilliseconds(),
    pth: `${req.baseUrl}${req.url}`,
    timeTaken: (now() - start).toFixed(2)
  });
});

api.get('/on-covid-19/logs', (req, res) => {
// req.app.locals.logs.forEach((lg) => res.send(`${`${lg.tim}   \t\t   ${lg.pth}  \t\t
// done in ${lg.timeTaken} seconds \n\n `}`));
  res.redirect('/logs');
});

api.use((request, response) => {
  response.status(404).render('404');
});

module.exports = api;
