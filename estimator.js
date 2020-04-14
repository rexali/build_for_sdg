/* eslint-disable quote-props */
const covid19ImpactEstimator = ({
//   region: {
//     name,
//     avgAge,
//     avgDailyIncomeInUSD,
//     avgDailyIncomePopulation
//   },

  population,
  timeToElaspse,
  reportedCases,
  totalHospitalBeds,
  periodType
}) => {
  if (periodType === 'days') {
    return {
      'data': {
        // 'region': {
        //   'name': name,
        //   'avgAge': avgAge,
        //   'avgDailyIncomeInUSD': avgDailyIncomeInUSD,
        //   'avgDailyIncomePopulation': avgDailyIncomePopulation
        // },


        'periodType': periodType,
        'timeToElaspse': timeToElaspse,
        'reportedCases': reportedCases,
        'population': population,
        'totalHospitalBeds': totalHospitalBeds
      },
      // the input data you got
      impact: {
        'currentlyInfected': reportedCases * 10,
        'infectionsByRequestedTime': reportedCases * 10 * 2 ** 10,
        'severeCasesByRequestedTime': Math.round((15 / 100) * reportedCases * 10 * 2 ** 10),
        'hospitalBedsByRequestedTime': Math.round((35 / 100) * totalHospitalBeds),
        'casesForICUByRequestedTime': Math.round((5 / 100) * reportedCases * 10 * 2 ** 10),
        'casesForVentilatorsByRequestedTime': Math.round((2 / 100) * reportedCases * 10 * 2 ** 10),
        'dollarsInFlight': Math.round((reportedCases * 10 * 2 ** 10 * 0.65) * 1.5 * 30)

      }, // your best case estimation
      'severeImpact': {
        'currentlyInfected': reportedCases * 50,
        'infectionsByRequestedTime': reportedCases * 50 * 2 ** 50,
        'severeCasesByRequestedTime': Math.round((15 / 100) * reportedCases * 50 * 2 ** 50),
        'hospitalBedsByRequestedTime': Math.round((35 / 100) * totalHospitalBeds),
        'casesForICUByRequestedTime': Math.round((5 / 100) * reportedCases * 50 * 2 ** 50),
        'casesForVentilatorsByRequestedTime': Math.round((2 / 100) * reportedCases * 50 * 2 ** 50),
        'dollarsInFlight': Math.round((reportedCases * 50 * 2 ** 50 * 0.65) * 1.5 * 30)

      } // your severe case estimation

    };
  }

  if (periodType === 'weeks') {
    return {
      'data': {
        // 'region': {
        //   'name': name,
        //   'avgAge': avgAge,
        //   'avgDailyIncomeInUSD': avgDailyIncomeInUSD,
        //   'avgDailyIncomePopulation': avgDailyIncomePopulation
        // },


        'periodType': periodType,
        'timeToElaspse': timeToElaspse,
        'reportedCases': reportedCases,
        'population': population,
        'totalHospitalBeds': totalHospitalBeds
      },
      // the input data you got
      'impact': {
        'currentlyInfected': Math.round((reportedCases * 10) / 7),
        'infectionsByRequestedTime': Math.round((reportedCases * 10 * 2 ** 10) / 7),
        'severeCasesByRequestedTime': Math.round(((15 / 100) * reportedCases * 10 * 2 ** 10) / 7),
        'hospitalBedsByRequestedTime': Math.round(((35 / 100) * totalHospitalBeds) / 7),
        'casesForICUByRequestedTime': Math.round(((5 / 100) * reportedCases * 10 * 2 ** 10) / 7),
        'casesForVentilatorsByRequestedTime': Math.round((2 / 100) * reportedCases * 10 * 2 ** 10),
        'dollarsInFlight': Math.round((reportedCases * 10 * 2 ** 10 * 0.65) * 1.5 * 30)

      }, // your best case estimation
      'severeImpact': {
        'currentlyInfected': Math.round((reportedCases * 50) / 7),
        'infectionsByRequestedTime': Math.round((reportedCases * 50 * 2 ** 50) / 7),
        'severeCasesByRequestedTime': Math.round(((15 / 100) * reportedCases * 50 * 2 ** 50) / 7),
        'hospitalBedsByRequestedTime': Math.round(((35 / 100) * totalHospitalBeds) / 7),
        'casesForICUByRequestedTime': Math.round(((5 / 100) * reportedCases * 50 * 2 ** 50) / 7),
        'casesForVentilatorsByRequestedTime': Math.round(((2 / 100) * reportedCases * 50 * 2 ** 50) / 7),
        'dollarsInFlight': Math.round(((reportedCases * 50 * 2 ** 50 * 0.65) * 1.5 * 30) / 7)

      }

    };
  }

  return {
    'data': {
    //   'region': {
    //     'name': name,
    //     'avgAge': avgAge,
    //     'avgDailyIncomeInUSD': avgDailyIncomeInUSD,
    //     'avgDailyIncomepopulation': avgDailyIncomePopulation
    //   },


      'periodType': periodType,
      'timeToElaspse': timeToElaspse,
      'reportedCases': reportedCases,
      'population': population,
      'totalHospitalBeds': totalHospitalBeds
    },
    // the input data you got
    'impact': {
      'currentlyInfected': Math.round((reportedCases * 10) / 30),
      'infectionsByRequestedTime': Math.round((reportedCases * 10 * 2 ** 10) / 30),
      'severeCasesByRequestedTime': Math.round(((15 / 100) * reportedCases * 10 * 2 ** 10) / 30),
      'hospitalBedsByRequestedTime': Math.round(((35 / 100) * totalHospitalBeds) / 30),
      'casesForICUByRequestedTime': Math.round(((5 / 100) * reportedCases * 10 * 2 ** 10) / 30),
      'casesForVentilatorsByRequestedTime': Math.round(((2 / 100) * reportedCases * 10 * 2 ** 10) / 30),
      'dollarsInFlight': Math.round(((reportedCases * 10 * 2 ** 10 * 0.65) * 1.5 * 30) / 30)

    }, // your best case estimation
    'severeImpact': {
      'currentlyInfected': Math.round((reportedCases * 50) / 30),
      'infectionsByRequestedTime': Math.round((reportedCases * 50 * 2 ** 50) / 30),
      'severeCasesByRequestedTime': Math.round(((15 / 100) * reportedCases * 50 * 2 ** 50) / 30),
      'hospitalBedsByRequestedTime': Math.round(((35 / 100) * totalHospitalBeds) / 30),
      'casesForICUByRequestedTime': Math.round(((5 / 100) * reportedCases * 50 * 2 ** 50) / 30),
      'casesForVentilatorsByRequestedTime': Math.round(((2 / 100) * reportedCases * 50 * 2 ** 50) / 30),
      'dollarsInFlight': Math.round(((reportedCases * 50 * 2 ** 50 * 0.65) * 1.5 * 30) / 30)

    }

  };
};

// export default covid19ImpactEstimator;
module.exports = covid19ImpactEstimator;
