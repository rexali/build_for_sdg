/* eslint-disable import/no-unresolved */
// import covid19ImpactEstimator from './estimator';

const http = require('http');
const dt = require('./module');

http.createServer((req, res) => {
  // const q = url.parse(req.url, true).query;
  // const txt = `${q.year} ${q.month}`;
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`The date and time are currently: ${dt.myDateTime()} <br>`);
  res.write(`${req.url} <br>`);
  // res.write(`${dt.expose(20)} <br>`);
  res.write(`${dt.data().reportedCases} <br>`);
  res.write(`${dt.covid19ImpactEstimator(dt.data()).data.reportedCases} <br>`);
  res.write(`${dt.covid19ImpactEstimator(dt.data()).impact.currentlyInfected} <br>`);

  // res.end(txt);
}).listen(8080);


// const data = {
//   region: {
//     name: 'Africa',
//     avgAge: 19.7,
//     avgDailyIncomeInUSD: 5,
//     avgDailyIncomePopulation: 0.71
//   },
//   periodType: 'days',
//   timeToElapse: 58,
//   reportedCases: 674,
//   population: 66622705,
//   totalHospitalBeds: 1380614
// };

// http.createServer((req, res) => {
//   //   const q = url.parse(req.url, true).query;
//   //   const txt = `${q.year} ${q.month}`;
//   fs.readFile('./src/views/index.html', (error, data) => {
//     if (error) {
//       res.writeHead(404);
//       res.write('Contents you are looking for is not found');
//       res.end();
//     } else {
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.write(data.toString());
//     }
//   });
// }).listen(3000);

// res.writeHead(200, { 'Content-Type': 'text/html' });
// res.write(`The date and time are currently: ${dt.myDateTime()} `);
// res.write(`${req.url}`);
// eslint-disable-next-line no-undef
// res.write(estimator.covid19ImpactEstimator(data));
// covid19ImpactEstimator(data);
//   res.end(txt);
// }).listen(8080);
