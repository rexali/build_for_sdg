
const covid19ImpactEstimator = ({
  region: {
    name: nam,
    avgAge: avg,
    avgDailyIncomeInUSD: avgD,
    avgDailyIncomePopulation: aVDIP
  },
  periodType: pT,
  timeToElaspse: tToE,
  reportedCases: rC,
  population: pop,
  totalHospitalBeds: tHB
}) => {
  if (pT === 'days') {
    return {
      data: {
        region: {
          name: nam,
          avgAge: avg,
          avgDailyIncomeInUSD: avgD,
          avgDailyIncomePopulation: aVDIP
        },


        periodType: pT,
        timeToElaspse: tToE,
        reportedCases: rC,
        population: pop,
        totalHospitalBeds: tHB
      },
      // the input data you got
      impact: {
        currentlyInfected: rC * 10,
        infectionsByRequestedTime: rC * 10 * 2 ** 10,
        severeCasesByRequestedTime: (15 / 100) * rC * 10 * 2 ** 10,
        hospitalBedsByRequestedTime: (35 / 100) * tHB,

        casesForICUByRequestedTime: (5 / 100) * rC * 10 * 2 ** 10,
        casesForVentilatorsByRequestedTime: (2 / 100) * rC * 10 * 2 ** 10,
        dollarsInFlight: (rC * 10 * 2 ** 10 * 0.65) * 1.5 * 30

      }, // your best case estimation
      severeImpact: {
        currentlyInfected: rC * 50,
        infectionsByRequestedTime: rC * 50 * 2 ** 50,
        severeCasesByRequestedTime: (15 / 100) * rC * 50 * 2 ** 50,
        hospitalBedsByRequestedTime: (35 / 100) * tHB,
        casesForICUByRequestedTime: (5 / 100) * rC * 50 * 2 ** 50,
        casesForVentilatorsByRequestedTime: (2 / 100) * rC * 50 * 2 ** 50,
        dollarsInFlight: (rC * 50 * 2 ** 50 * 0.65) * 1.5 * 30

      } // your severe case estimation

    };
  }

  if (pT === 'weeks') {
    return {
      data: {
        region: {
          name: nam,
          avgAge: avg,
          avgDailyIncomeInUSD: avgD,
          avgDailyIncomePopulation: aVDIP
        },


        periodType: pT,
        timeToElaspse: tToE,
        reportedCases: rC,
        population: pop,
        totalHospitalBeds: tHB
      },
      // the input data you got
      impact: {
        currentlyInfected: ((rC * 10) / 7).toFixed(0),
        infectionsByRequestedTime: ((rC * 10 * 2 ** 10) / 7).toFixed(0),
        severeCasesByRequestedTime: (((15 / 100) * rC * 10 * 2 ** 10) / 7).toFixed(0),
        hospitalBedsByRequestedTime: (((35 / 100) * tHB) / 7).toFixed(0),

        casesForICUByRequestedTime: (((5 / 100) * rC * 10 * 2 ** 10) / 7).toFixed(0),
        casesForVentilatorsByRequestedTime: ((2 / 100) * rC * 10 * 2 ** 10).toFixed(0),
        dollarsInFlight: ((rC * 10 * 2 ** 10 * 0.65) * 1.5 * 30).toFixed(0)

      }, // your best case estimation
      severeImpact: {
        currentlyInfected: ((rC * 50) / 7).toFixed(0),
        infectionsByRequestedTime: ((rC * 50 * 2 ** 50) / 7).toFixed(0),
        severeCasesByRequestedTime: (((15 / 100) * rC * 50 * 2 ** 50) / 7).toFixed(0),
        hospitalBedsByRequestedTime: (((35 / 100) * tHB) / 7).toFixed(0),
        casesForICUByRequestedTime: (((5 / 100) * rC * 50 * 2 ** 50) / 7).toFixed(0),
        casesForVentilatorsByRequestedTime: (((2 / 100) * rC * 50 * 2 ** 50) / 7).toFixed(0),
        dollarsInFlight: (((rC * 50 * 2 ** 50 * 0.65) * 1.5 * 30) / 7).toFixed(0)

      }

    };
  }

  return {
    data: {
      region: {
        name: nam,
        avgAge: avg,
        avgDailyIncomeInUSD: avgD,
        avgDailyIncomePopulation: aVDIP
      },


      periodType: pT,
      timeToElaspse: tToE,
      reportedCases: rC,
      population: pop,
      totalHospitalBeds: tHB
    },
    // the input data you got
    impact: {
      currentlyInfected: (rC * 10) / 30,
      infectionsByRequestedTime: (rC * 10 * 2 ** 10) / 30,
      severeCasesByRequestedTime: ((15 / 100) * rC * 10 * 2 ** 10) / 30,
      hospitalBedsByRequestedTime: ((35 / 100) * tHB) / 30,

      casesForICUByRequestedTime: ((5 / 100) * rC * 10 * 2 ** 10) / 30,
      casesForVentilatorsByRequestedTime: ((2 / 100) * rC * 10 * 2 ** 10) / 30,
      dollarsInFlight: ((rC * 10 * 2 ** 10 * 0.65) * 1.5 * 30) / 30

    }, // your best case estimation
    severeImpact: {
      currentlyInfected: (rC * 50) / 30,
      infectionsByRequestedTime: (rC * 50 * 2 ** 50) / 30,
      severeCasesByRequestedTime: ((15 / 100) * rC * 50 * 2 ** 50) / 30,
      hospitalBedsByRequestedTime: ((35 / 100) * tHB) / 30,
      casesForICUByRequestedTime: ((5 / 100) * rC * 50 * 2 ** 50) / 30,
      casesForVentilatorsByRequestedTime: ((2 / 100) * rC * 50 * 2 ** 50) / 30,
      dollarsInFlight: ((rC * 50 * 2 ** 50 * 0.65) * 1.5 * 30) / 30

    }

  };
};

// export default covid19ImpactEstimator;
module.exports = covid19ImpactEstimator;
