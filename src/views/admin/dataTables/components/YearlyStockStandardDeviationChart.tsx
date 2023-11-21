import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Box, useColorModeValue, Text, Flex } from '@chakra-ui/react';
import Papa from 'papaparse';
import { ApexOptions } from 'apexcharts';

interface StockData {
  Date: string;
  High: number;
  Low: number;
  Open: number;
  Close: number;
  Volume: number;
  'Adj Close': number;
}

//list of tech company symbols
const techCompanies =['AAPL','MSFT','TSM','NVDA','CRM','ADBE','INTC','ASML','CSCO','ORCL','QCOM','AVGO','ACN','TXN','SAP','SHOP','SNE',
'IBM','AMD','NOW','SQ','FIS','INTU','UBER','SNOW','FISV','AMAT','MU','INFY','LRCX','VMW','ADSK','TEAM','DELL','ADI','WDAY',
'NXPI','CTSH','ERIC','DOCU','PLTR','KLAC','APH','TEL','U','MCHP','STM','SNPS','XLNX','CRWD','SPLK','CDNS','MRVL','OKTA',
'HPQ','MSI','PANW','GLW','DDOG','FTV-PA','ANSS','WIT','RNG','FTV','PAYC','SWKS','COUP','VRSN','STNE','GRMN','MXIM','KEYS','FLT',
'NET','ANET','CAJ','ZBRA','ZS','FTNT','EPAM','CDW','GIB','TER','SSNC','ZI','UMC','WORK','BR','HUBS','QRVO','CHKP','AKAM','TYL',
'CCC','UI','ZEN','CTXS','TRMB','AVLR','STX'];

const YearlyStockStandardDeviationChart: React.FC = () => {
  const [standardDeviations, setStandardDeviations] = useState<{ symbol: string; stdDev: number }[]>([]);
  const [chartOptions, setChartOptions] = useState<ApexOptions>({
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [],
    },
    yaxis: {
      title: {
        text: 'Standard Deviation',
      },
      labels: {
        formatter: (val: number) => val.toFixed(2),
      },
    },
    colors: ['#0000FF'],
  });

  useEffect(() => {
    const calculateStandardDeviation = (values: number[]) => {
      const mean = values.reduce((a, b) => a + b, 0) / values.length;
      const variance = values.reduce((a, b) => a + (b - mean) ** 2, 0) / values.length;
      return Math.sqrt(variance);
    };

    const loadChartData = async () => {
      const promises = techCompanies.map(async (symbol) => {
        const response = await fetch(`/data/top_tech_company/Technology Companies/${symbol}.csv`);
        const text = await response.text();
        const data: StockData[] = await new Promise((resolve, reject) => {
          Papa.parse<StockData>(text, {
            header: true,
            dynamicTyping: true,
            complete: (results) => {
              resolve(results.data);
            },
            error: (error:any) => reject(error.message),
          });
        });

        // Calculate the standard deviation here
        const yearlyReturns = data.map((day, index, array) => {
          if (index === 0) return null;
          const previousDay = array[index - 1];
          return (day['Adj Close'] - previousDay['Adj Close']) / previousDay['Adj Close'];
        }).filter((x): x is number => x !== null);

        const stdDev = calculateStandardDeviation(yearlyReturns);
        return { symbol, stdDev };
      });

      const results = await Promise.all(promises);
      results.sort((a, b) => b.stdDev - a.stdDev);

      setStandardDeviations(results);
      setChartOptions(prevOptions => ({
        ...prevOptions,
        xaxis: {
          categories: results.map(item => item.symbol),
        },
      }));
    };

    loadChartData();
  }, []);

  return (
    <Box bg={useColorModeValue('white', 'gray.700')} p="4" borderRadius="lg" shadow="base" width="100%">
      <Flex px='25px' mb="8px" justifyContent='space-between' align='center'>
        <Text fontSize='22px' fontWeight='700' lineHeight='100%' color={useColorModeValue('secondaryGray.900', 'white')}>
          Yearly Stocks Standard Deviation
        </Text>
      </Flex>
      <ReactApexChart
        options={chartOptions}
        series={[{ name: 'Standard Deviation', data: standardDeviations.map(sd => sd.stdDev) }]}
        type="bar"
        height={350}
      />
    </Box>
  );
};

export default YearlyStockStandardDeviationChart;

// import React, { useState, useEffect } from 'react';
// import ReactApexChart from 'react-apexcharts';
// import { Box, useColorModeValue, Text, Flex } from '@chakra-ui/react';
// import Papa from 'papaparse';

// interface StockData {
//     Date: string;
//     'Adj Close': number;
//   }

// //list of tech company symbols
// const techCompanies =['AAPL','MSFT','TSM','NVDA','CRM','ADBE','INTC','ASML','CSCO','ORCL','QCOM','AVGO','ACN','TXN','SAP','SHOP','SNE', 'IBM','AMD','NOW','SQ','FIS','INTU','UBER','SNOW','FISV','AMAT','MU','INFY','LRCX','VMW','ADSK','TEAM','DELL','ADI','WDAY', 'NXPI','CTSH','ERIC','DOCU','PLTR','KLAC','APH','TEL','U','MCHP','STM','SNPS','XLNX','CRWD','SPLK','CDNS','MRVL','OKTA','HPQ','MSI','PANW','GLW','DDOG','FTV-PA','ANSS','WIT','RNG','FTV','PAYC','SWKS','COUP','VRSN','STNE','GRMN','MXIM','KEYS','FLT','NET','ANET','CAJ','ZBRA','ZS','FTNT','EPAM','CDW','GIB','TER','SSNC','ZI','UMC','WORK','BR','HUBS','QRVO','CHKP','AKAM','TYL',  'CCC','UI','ZEN','CTXS','TRMB','AVLR','STX'];  

// // Function to fetch data from CSV
// const fetchStockData = async (symbol: string) => {
//   const response = await fetch(`/data/top_tech_company/Technology Companies/${symbol}.csv`);
//   const text = await response.text();
//   return new Promise((resolve, reject) => {
//     Papa.parse(text, {
//       header: true,
//       dynamicTyping: true,
//       complete: (results) => {
//         resolve(results.data);
//       },
//       error: (error:any) => reject(error.message),
//     });
//   });
// };

// // Function to calculate standard deviation
// const calculateStandardDeviation = (values: number[]) => {
//   const mean = values.reduce((acc, val) => acc + val, 0) / values.length;
//   const variance = values.reduce((acc, val) => acc + (val - mean) ** 2, 0) / values.length;
//   return Math.sqrt(variance);
// };

// const YearlyStockStandardDeviationChart: React.FC = () => {
//   const [standardDeviations, setStandardDeviations] = useState([]);
//   const [chartOptions, setChartOptions] = useState({
//     chart: {
//       type: 'bar',
//       height: 350,
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     xaxis: {
//       categories: [],
//     },
//     yaxis: {
//       title: {
//         text: 'Standard Deviation',
//       },
//       labels: {
//         formatter: (val: number) => val.toFixed(2), // Formatter to ensure two decimal places
//       },
//     },
//     colors: ['#0000FF'],
//   });

//   useEffect(() => {
//     const loadChartData = async () => {

//         const standardDeviationsPromises = techCompanies.map(async (symbol) => {
//             const stockData: StockData[] = await fetchStockData(symbol) as StockData[]; // Cast to StockData[]
//             const yearlyData = stockData.filter((data) => new Date(data.Date).getFullYear() === 2020);
//             const yearlyReturns = yearlyData.map((day, index, array) => {
//               if (index === 0) return null; // Skip the first day
//               const previousDay = array[index - 1];
//               return (day['Adj Close'] - previousDay['Adj Close']) / previousDay['Adj Close'];
//             }).filter((x): x is number => x !== null); // Use type predicate to filter out nulls
        
//             const stdDev = calculateStandardDeviation(yearlyReturns);
//             return { symbol, stdDev };
//           });

//       const stdDeviationsResults = await Promise.all(standardDeviationsPromises);
//       stdDeviationsResults.sort((a, b) => b.stdDev - a.stdDev);

//       setStandardDeviations(stdDeviationsResults.map((x) => x.stdDev));
//       setChartOptions({
//         ...chartOptions,
//         xaxis: {
//           categories: stdDeviationsResults.map((x) => x.symbol),
//         },
//       });
//     };

//     loadChartData();
//   }, []);

//   return (
//     <Box bg={useColorModeValue('white', 'gray.700')} p="4" borderRadius="lg" shadow="base" width="100%">
//       <Flex px='25px' mb="8px" justifyContent='space-between' align='center'>
//         <Text fontSize='22px' fontWeight='700' lineHeight='100%' color={useColorModeValue('secondaryGray.900', 'white')}>
//           Yearly Stocks Standard Deviation (2020)
//         </Text>
//       </Flex>
//       <ReactApexChart
//         options={chartOptions}
//         series={[{ name: 'Standard Deviation', data: standardDeviations }]}
//         type="bar"
//         height={350}
//       />
//     </Box>
//   );
// };

// export default YearlyStockStandardDeviationChart;