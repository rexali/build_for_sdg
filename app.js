// import and initilize
const http = require('http');
const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const estimator = require('./src/my_module');
// const {data, covid19ImpactEstimator, myDateTime} = require('./src/mymodule');

const apiVersion1 = require('./src/api1.js');
const apiVersion2 = require('./src/api2.js');


const realEstimator = require('./src/estimator');

const app = express();
//  set
app.set('views', path.resolve(__dirname, 'src/views'));
app.set('view engine', 'ejs');

const entries = [];
const results = [];
const realResults = [];
const logs = [];


app.locals.entries = entries;
app.locals.results = results;
app.locals.realResults = realResults;
app.locals.logs = logs;

app.use('/api/v1', apiVersion1);
app.use('/api/v2', apiVersion2);
// Populates a variable
// called req.body if the user is submitting a form.
// (The extended option is required.)
// Requires all of he modules you
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger('dev'));

app.get('/', (request, response) => {
  response.render('index');
});

app.get('/result', (request, response) => {
  response.render('result');
});
app.get('/logs', (request, response) => {
  response.render('logs');
});

// If user submits
// the form with no title or content,responds with a 400 error
app.post('/', (request, response) => {
  if (!request.body.population || !request.body.timeToElapse || !request.body.reportedCases
    || !request.body.totalHospitalBeds || !request.body.periodType) {
    response.status(400).send('Entries must have a title and a body.');
    return;
  }

  results.push(estimator.covid19ImpactEstimator(estimator.data()));
  realResults.push(realEstimator(estimator.data()));


  // Adds a new entry to the list of entries
  entries.push({
    population: request.body.population,
    timeToElapse: request.body.timeToElapse,
    reportedCases: request.body.reportedCases,
    totalHospitalBeds: request.body.totalHospitalBeds,
    periodType: request.body.periodType
    // published: new Date()
  });
  // Redirect to the homepage to see your
  // new entry
  response.redirect('/result');
});

app.use((request, response) => {
  response.status(404).render('404');
});

// create server and listen at port 3000
http.createServer(app).listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Guestbook app started on port 3000.');
});