import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Box, useColorModeValue, Text, Flex, Tooltip } from '@chakra-ui/react';
import Papa from 'papaparse';
import { ApexOptions } from 'apexcharts';


//list of tech company symbols
const techCompanies =['AAPL','MSFT','TSM','NVDA','CRM','ADBE','INTC','ASML','CSCO','ORCL','QCOM','AVGO','ACN','TXN','SAP','SHOP','SNE',
'IBM','AMD','NOW','SQ','FIS','INTU','UBER','SNOW','FISV','AMAT','MU','INFY','LRCX','VMW','ADSK','TEAM','DELL','ADI','WDAY',
'NXPI','CTSH','ERIC','DOCU','PLTR','KLAC','APH','TEL','U','MCHP','STM','SNPS','XLNX','CRWD','SPLK','CDNS','MRVL','OKTA',
'HPQ','MSI','PANW','GLW','DDOG','FTV-PA','ANSS','WIT','RNG','FTV','PAYC','SWKS','COUP','VRSN','STNE','GRMN','MXIM','KEYS','FLT',
'NET','ANET','CAJ','ZBRA','ZS','FTNT','EPAM','CDW','GIB','TER','SSNC','ZI','UMC','WORK','BR','HUBS','QRVO','CHKP','AKAM','TYL',
'CCC','UI','ZEN','CTXS','TRMB','AVLR','STX'];

interface StockData {
  Date: string;
  High: number;
  Low: number;
  Open: number;
  Close: number;
  Volume: number;
  'Adj Close': number;
}

interface VolatilityData {
  symbol: string;
  volatility: number;
}

const MostVolatileStocksChart: React.FC = () => {
  const [volatilityData, setVolatilityData] = useState<VolatilityData[]>([]);
  const [chartOptions, setChartOptions] = useState<ApexOptions>({
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: true,
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
        text: 'Volatility (Standard Deviation)',
      },
    },
    colors: ['#FF4560'],
  });

  useEffect(() => {
    const calculateStandardDeviation = (values: number[]): number => {
      const mean = values.reduce((a, b) => a + b, 0) / values.length;
      const variance = values.reduce((a, b) => a + (b - mean) ** 2, 0) / values.length;
      return Math.sqrt(variance);
    };

    const fetchStockData = async (symbol: string): Promise<StockData[]> => {
        const response = await fetch(`/data/top_tech_company/Technology Companies/${symbol}.csv`);
        const text = await response.text();
        return new Promise<StockData[]>((resolve, reject) => {
          Papa.parse<StockData>(text, {
            header: true,
            dynamicTyping: true,
            complete: (results) => {
              if (results.data) {
                resolve(results.data);
              } else {
                reject(new Error('No data found'));
              }
            },
            // Update the error callback here
            error: (error:any, file:any) => {
              console.error(`Error parsing ${file}:`, error.message);
              reject(error.message);
            },
          });
        });
      };

    const loadVolatilityData = async () => {
      const promises = techCompanies.map(async (symbol) => {
        const data = await fetchStockData(symbol);
        const yearData = data.filter(entry => entry.Date && entry.Date.startsWith('2020'));
        const dailyReturns: number[] = yearData.map((day, index, array) => {
          if (index === 0) return NaN; // Skip the first entry
          const previousDay = array[index - 1];
          return (day['Adj Close'] - previousDay['Adj Close']) / previousDay['Adj Close'];
        }).filter((x) => !isNaN(x));

        const volatility = calculateStandardDeviation(dailyReturns);
        return { symbol, volatility };
      });

      const results = (await Promise.all(promises)).filter(result => !isNaN(result.volatility));
      results.sort((a, b) => b.volatility - a.volatility);

      // Slice the array to keep only the top 20 entries
      const top20Results = results.slice(0, 20);

      setVolatilityData(top20Results);
      setChartOptions(prevOptions => ({
        ...prevOptions,
        xaxis: {
          categories: top20Results.map(item => item.symbol),
        },
      }));
    };

    loadVolatilityData();
  }, []);

  return (
    <Box bg={useColorModeValue('white', 'gray.700')} p="4" borderRadius="lg" shadow="base" width="100%">
      <Flex px='25px' mb="8px" justifyContent='space-between' align='center'>
      <Tooltip label="This chart displays the volatility of the top 20 tech stocks in 2020. Volatility is measured as the standard deviation of daily returns throughout the year." hasArrow>
          <Text fontSize='22px' fontWeight='700' lineHeight='100%' color={useColorModeValue('secondaryGray.900', 'white')} cursor="help">
            Most Volatile Stocks 2020
          </Text>
        </Tooltip>
      </Flex>
      <ReactApexChart
        options={chartOptions}
        series={[{ name: 'Volatility', data: volatilityData.map(item => item.volatility) }]}
        type="bar"
        height={350}
      />
    </Box>
  );
};

export default MostVolatileStocksChart;
