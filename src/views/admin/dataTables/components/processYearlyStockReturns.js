// File: processYearlyStockReturns.js

const fs = require('fs');
const Papa = require('papaparse');
const path = require('path');

// Assuming this script is located in src/views/admin/dataTables/components
// and we need to get to the public directory which is at the root
const projectRoot = path.join(__dirname, '../../../../../'); // Step out to the root of the project
const rawDataDir = path.join(projectRoot, 'public/data/top_tech_company/Technology Companies');
const processedDataFile = path.join(projectRoot, 'public/data/top_tech_company/YearlyReturns.csv');

// A list of company symbols, which would be the filenames without '.csv'
const techCompanies = fs.readdirSync(rawDataDir).map(file => file.replace('.csv', ''));

const processStockData = (symbol, data) => {
  const sortedData = data.filter(row => row.Date && row.Date.startsWith('2020')).sort((a, b) => new Date(a.Date) - new Date(b.Date));
  if (sortedData.length === 0) return null;

  const startPrice = sortedData[0]['Adj Close'];
  const endPrice = sortedData[sortedData.length - 1]['Adj Close'];
  const yearlyReturn = ((endPrice - startPrice) / startPrice) * 100;

  return {
    Symbol: symbol,
    YearlyReturn: yearlyReturn.toFixed(2) // Round to two decimal places
  };
};

const allProcessedData = techCompanies.map(symbol => {
  const rawFilePath = path.join(rawDataDir, `${symbol}.csv`);
  const rawFileContent = fs.readFileSync(rawFilePath, 'utf-8');
  const parsedData = Papa.parse(rawFileContent, { header: true, dynamicTyping: true }).data;
  
  return processStockData(symbol, parsedData);
}).filter(Boolean); // Remove any null entries

const csv = Papa.unparse(allProcessedData);
fs.writeFileSync(processedDataFile, csv);
console.log('Yearly returns data processed and saved.');
