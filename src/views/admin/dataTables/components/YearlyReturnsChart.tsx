import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Box, useColorModeValue, Text, Flex } from '@chakra-ui/react';
import Papa from 'papaparse';
import { ApexOptions } from 'apexcharts';

//list of tech company symbols
const techCompanies =['AAPL','MSFT','TSM','NVDA','CRM','ADBE','INTC','ASML','CSCO','ORCL','QCOM','AVGO','ACN','TXN','SAP','SHOP','SNE',
'IBM','AMD','NOW','SQ','FIS','INTU','UBER','SNOW','FISV','AMAT','MU','INFY','LRCX','VMW','ADSK','TEAM','DELL','ADI','WDAY',
'NXPI','CTSH','ERIC','DOCU','PLTR','KLAC','APH','TEL','U','MCHP','STM','SNPS','XLNX','CRWD','SPLK','CDNS','MRVL','OKTA',
'HPQ','MSI','PANW','GLW','DDOG','FTV-PA','ANSS','WIT','RNG','FTV','PAYC','SWKS','COUP','VRSN','STNE','GRMN','MXIM','KEYS','FLT',
'NET','ANET','CAJ','ZBRA','ZS','FTNT','EPAM','CDW','GIB','TER','SSNC','ZI','UMC','WORK','BR','HUBS','QRVO','CHKP','AKAM','TYL',
'CCC','UI','ZEN','CTXS','TRMB','AVLR','STX'];

interface YearlyReturnsChartProps {
  isBest: boolean;
}

interface StockReturnData {
  symbol: string;
  yearlyReturn: number | null;
}

interface StockData {
  Date: string;
  High: number;
  Low: number;
  Open: number;
  Close: number;
  Volume: number;
  'Adj Close': number;
}

const YearlyReturnsChart: React.FC<YearlyReturnsChartProps> = ({ isBest }) => {
  const [yearlyReturns, setYearlyReturns] = useState<StockReturnData[]>([]);
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
        text: 'Cumulative Return (%)',
      },
    },
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'],
  });
  const cardBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('secondaryGray.900', 'white');

  useEffect(() => {
    const fetchStockData = async (symbol: string): Promise<StockData[]> => {
      const response = await fetch(`/data/top_tech_company/Technology Companies/${symbol}.csv`);
      const text = await response.text();
    
      return new Promise<StockData[]>((resolve, reject) => {
        Papa.parse<StockData>(text, {
          header: true,
          dynamicTyping: true,
          complete: (results) => {
            // console.log(results.data); // Log the parsed data to the console
            resolve(results.data as StockData[]);
          },
          error: (error: any) => {  // Here you can replace 'any' with a more specific type if you know the structure of the error.
            // console.error(error.message); // Log any parsing errors
            reject(error.message);
          }
        });
      });
    };
    

    // const calculateReturns = (data: StockData[]): number | null => {
    //   const validEntries = data.filter(entry => entry.Date && entry.Date.startsWith('2020'));

    //   const sortedEntries = validEntries.sort((a, b) => new Date(a.Date).getTime() - new Date(b.Date).getTime());
    //   if (sortedEntries.length === 0) {
    //     // Handle the case where no data is available for 2020
    //     return null;
    //   }

    //   const startData = sortedEntries[0];
    //   const endData = sortedEntries[sortedEntries.length - 1];
      
    //   // If we don't have both, return null
    //   if (!startData || !endData) return null;
    
    //   const startPrice = startData['Adj Close'];
    //   const endPrice = endData['Adj Close'];
    
    //   // Calculate the return percentage
    //   return ((endPrice - startPrice) / startPrice) * 100;
    // };

    const calculateReturns = (data: StockData[]): number | null => {
      const validEntries = data.filter(entry => entry.Date && entry.Date.startsWith('2020'));
    
      const sortedEntries = validEntries.sort((a, b) => new Date(a.Date).getTime() - new Date(b.Date).getTime());
    
      if (sortedEntries.length === 0) {
        // Handle the case where no data is available for 2020
        return null;
      }
      
      let cumulativeReturn = 1; // Start with a base of 1 (100%)
    
      for (let i = 1; i < sortedEntries.length; i++) {
        const previousClose = sortedEntries[i - 1]['Adj Close'];
        const currentClose = sortedEntries[i]['Adj Close'];
        const dailyReturn = (currentClose - previousClose) / previousClose;
        cumulativeReturn *= (1 + dailyReturn);
      }
      
      // Subtract 1 to get the actual cumulative return as a percentage
      cumulativeReturn = (cumulativeReturn - 1) * 100;
    
      return cumulativeReturn;
    };
    
    

    const processAllStocks = async () => {
      const promises = techCompanies.map(async (symbol) => {
        const data = await fetchStockData(symbol);
        const yearlyReturn = calculateReturns(data);
        return { symbol, yearlyReturn: yearlyReturn ?? 0 }; // Use nullish coalescing to handle null
      });

      // Promise.all(promises).then((results) => {
      //   const validResults = results.filter(r => r.yearlyReturn !== null);
      //   validResults.sort((a, b) => isBest ? b.yearlyReturn! - a.yearlyReturn! : a.yearlyReturn! - b.yearlyReturn!);
      //   setYearlyReturns(validResults.slice(0, 10)); // Get the top 10 results
      //   console.log('Yearly Returns State Updated: ', validResults.slice(0, 10));
      //   setChartOptions(prevOptions => ({
      //     ...prevOptions,
      //     xaxis: {
      //       ...prevOptions.xaxis,
      //       categories: validResults.slice(0, 10).map(item => item.symbol),
      //     },
      //   }));
      // });
      Promise.all(promises).then((results) => {
        const validResults = results.filter(r => r.yearlyReturn !== null);
        validResults.sort((a, b) => isBest ? b.yearlyReturn! - a.yearlyReturn! : a.yearlyReturn! - b.yearlyReturn!);
        setYearlyReturns(validResults.slice(0, 10)); // Get the top 10 results for best or worst
        // console.log('Yearly Returns State Updated: ', validResults.slice(0, 10));
        setChartOptions(prevOptions => ({
          ...prevOptions,
          xaxis: {
            ...prevOptions.xaxis,
            categories: validResults.slice(0, 10).map(item => item.symbol),
          },
          yaxis: {
            ...prevOptions.yaxis,
            labels: {
              formatter: (value) => value.toFixed(2), // Format y-axis labels to two decimal places
            },
          },
        }));
      });
      
    };

    processAllStocks();
  }, [isBest]);

  const series = [{
    name: 'Cumulative Return',
    data: yearlyReturns.map(item => item.yearlyReturn ?? 0), // Use nullish coalescing to handle null
  }];

  return (
    <Box bg={cardBg} p="4" borderRadius="lg" shadow="base" width="100%">
      <Flex px='25px' mb="8px" justifyContent='space-between' align='center'>
        <Text color={textColor} fontSize='22px' fontWeight='700' lineHeight='100%'>
          {isBest ? 'Best' : 'Worst'} Yearly Cumulative Returns in 2020
        </Text>
      </Flex>
      <ReactApexChart options={chartOptions} series={series} type="bar" />
    </Box>
  );
};

export default YearlyReturnsChart;
