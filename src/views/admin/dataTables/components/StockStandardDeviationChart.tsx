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

interface StockReturnData {
  symbol: string;
  standardDeviation: number;
}

interface StockData {
  Date: string;
  'Adj Close': number;
}

const StockStandardDeviationChart: React.FC = () => {
  const [standardDeviations, setStandardDeviations] = useState<StockReturnData[]>([]);
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
        formatter: (value) => value.toFixed(2),
      },
    },
    colors: ['#008FFB'],
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
            resolve(results.data as StockData[]);
          },
          error: (error: any) => {
            reject(error.message);
          },
        });
      });
    };

    const calculateStandardDeviation = (values: number[]) => {
      // Filter out non-numeric or invalid values
      const validValues = values.filter(value => isFinite(value));
    
      if (validValues.length === 0) {
        console.warn('No valid values provided for standard deviation calculation.');
        return NaN;
      }
    
      const mean = validValues.reduce((acc, val) => acc + val, 0) / validValues.length;
      if (!isFinite(mean)) {
        console.warn('Mean is not finite, check your valid values:', validValues);
        return NaN;
      }
    
      const variance = validValues.reduce((acc, val) => acc + (val - mean) ** 2, 0) / validValues.length;
      if (!isFinite(variance)) {
        console.warn('Variance is not finite, check your valid values:', validValues);
        return NaN;
      }
    
      const standardDeviation = Math.sqrt(variance);
      if (!isFinite(standardDeviation)) {
        console.warn('Standard deviation is not finite, check your valid values:', validValues);
        return NaN;
      }
    
      return standardDeviation;
    };
    

    const processAllStocks = async () => {
      const promises = techCompanies.map(async (symbol) => {
        const data = await fetchStockData(symbol);
        const dailyReturns = data.map((day, index, array) => {
          if (index === 0) return null;
          const previousDay = array[index - 1];
          return (day['Adj Close'] - previousDay['Adj Close']) / previousDay['Adj Close'];
        }).filter(returnValue => returnValue !== null);

        const standardDeviation = calculateStandardDeviation(dailyReturns);
        return { symbol, standardDeviation };
      });

      const results = await Promise.all(promises);
      const sortedResults = results.sort((a, b) => b.standardDeviation - a.standardDeviation).slice(0, 50);

      // console.log("Sorted Results:", sortedResults); // Log the sorted results

      setStandardDeviations(sortedResults);
      setChartOptions(prevOptions => ({
        ...prevOptions,
        xaxis: {
          categories: sortedResults.map(item => item.symbol),
        },
      }));
    };

    processAllStocks();
  }, []);

  const series = [{
    name: 'Standard Deviation',
    data: standardDeviations.map(item => item.standardDeviation),
  }];

  return (
    <Box bg={cardBg} p="4" borderRadius="lg" shadow="base" width="100%">
      <Flex px='25px' mb="8px" justifyContent='space-between' align='center'>
        <Text color={textColor} fontSize='22px' fontWeight='700' lineHeight='100%'>
          Daily Stocks Standard Deviation
        </Text>
      </Flex>
      <ReactApexChart options={chartOptions} series={series} type="bar" />
    </Box>
  );
};

export default StockStandardDeviationChart;
