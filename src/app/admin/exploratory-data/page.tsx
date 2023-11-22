'use client';
import DevelopmentTable from 'views/admin/dataTables/components/DevelopmentTable';
import SectorPercentageTable from 'views/admin/dataTables/components/SectorPercentageTable';
import PieChart from 'views/admin/dataTables/components/PieChart';
import PeRatioBarChart from 'views/admin/dataTables/components/PeRatioBarChart';
import YearlyReturnsChart from 'views/admin/dataTables/components/YearlyReturnsChart';
import StockStandardDeviationChart from 'views/admin/dataTables/components/StockStandardDeviationChart';
import YearlyStockStandardDeviationChart from 'views/admin/dataTables/components/YearlyStockStandardDeviationChart';

import CheckTable from 'views/admin/dataTables/components/CheckTable';
import ColumnsTable from 'views/admin/dataTables/components/ColumnsTable';
import ComplexTable from 'views/admin/dataTables/components/ComplexTable';
import tableDataDevelopment from 'views/admin/dataTables/variables/tableDataDevelopment';
import tableDataCheck from 'views/admin/dataTables/variables/tableDataCheck';
import tableDataColumns from 'views/admin/dataTables/variables/tableDataColumns';
import tableDataComplex from 'views/admin/dataTables/variables/tableDataComplex';
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { Box, SimpleGrid, Table, Thead, Tbody, Tr, Th, Td, useColorModeValue} from '@chakra-ui/react';
import Card from 'components/card/Card';
import AdminLayout from 'layouts/admin';
import ApexCharts from 'apexcharts'


// Define the type for the formatted data used in the chart.
interface ChartDataItem {
  name: string;
  y: number;
}

// Define the type for CSV data's expected structure
interface CompanyData {
  Symbol: string;
  Name: string;
  Sector: string; 
}

// Define the expected structure of each row in Technology Sector List.csv.
interface CompanyMarketCap {
  Symbol: string;
  Name: string;
  Price: string; 
  Change: string; 
  '% Change': string; 
  Volume: string; 
  'Avg Vol': string;
  'Market Cap (Billions)': string;
  'PE Ratio': string; 
}

interface PeRatioData {
  label: string;
  value: number;
}

export default function ExploratoryDataCharts() {

  /*
   Sector Percentages Table
  */
  const [sectorPercentages, setSectorPercentages] = useState<{ sector: string; percentage: number }[]>([]);
  // Define a background color for the card based on the color mode
  const cardBg = useColorModeValue('white', 'gray.700');
  
  useEffect(() => {
    fetch('/data/top_tech_company/List of SP 500 companies.csv')
      .then(response => response.text())
      .then(csvString => {
        Papa.parse<CompanyData>(csvString, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const data = results.data as CompanyData[];

            // Calculate sector counts
            const sectorCounts = data.reduce((acc, { Sector }) => {
              acc[Sector] = (acc[Sector] || 0) + 1;
              return acc;
            }, {} as Record<string, number>);

            // Calculate total number of entries
            const total = data.length;

            // Calculate sector percentages
            const sectorsPercentage = Object.entries(sectorCounts).map(([sector, count]) => ({
              sector,
              percentage: (count / total) * 100,
            }));

            // Sort by percentage descending
            sectorsPercentage.sort((a, b) => b.percentage - a.percentage);
            setSectorPercentages(sectorsPercentage);
          }
        });
      });
  }, []);


  /*
   Market Cap Pie Chart
  */
  const [marketCapData, setMarketCapData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/data/top_tech_company/Technology Sector List.csv');
      const csvString = await response.text();
      Papa.parse<CompanyMarketCap>(csvString, {
        header: true,
        complete: (results) => {
          const parsedData = results.data; // PapaParse will infer the correct type based on the generic provided.
          const formattedData: ChartDataItem[] = parsedData.map((item) => ({
            name: item.Symbol,
            // Check if 'Market Cap (Billions)' is not undefined before calling replace, otherwise set y to 0
            y: item['Market Cap (Billions)'] ? parseFloat(item['Market Cap (Billions)'].replace(/,/g, '')) : 0,
          }));          
          setMarketCapData(formattedData);
        }
      });
    }
  
    fetchData();
  }, []);

  /*
   Top Tech Stocks PE Bar Chart
  */
  const [topTechStocksPE, setTopTechStocksPE] = useState<PeRatioData[]>([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/data/top_tech_company/Technology Sector List.csv');
      const csvString = await response.text();
      Papa.parse(csvString, {
        header: true,
        complete: (results) => {
          const parsedData = results.data as CompanyMarketCap[];
          // Sort by PE Ratio and take the top 10
          const topTechStocks = parsedData
            .sort((a, b) => parseFloat(b['PE Ratio']) - parseFloat(a['PE Ratio']))
            .slice(0, 10)
            .map((item) => ({
              label: item.Symbol,
              value: parseFloat(item['PE Ratio']),
            }));
          setTopTechStocksPE(topTechStocks);
        },
      });
    }
  
    fetchData();
  }, []);

  
  // Calculate the color for the gradient
  const getGradient = (percentage: number) => {
    // Define your gradient colors here
    return `linear-gradient(to right, #blueStart ${percentage}%, #blueEnd ${percentage}%)`;
  };

  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        mb="20px"
        columns={{ sm: 1, md: 2 }}
        spacing={{ base: '20px', xl: '20px' }}
      >
        {/* ... other tables and charts ... */}
 
        {/* <DevelopmentTable tableData={tableDataDevelopment} /> */}
        {/* TODO: Change the style of table to similar to Horizon UI */}
        <SectorPercentageTable sectorData={sectorPercentages} />

        {marketCapData.length > 0 && <PieChart data={marketCapData} />}

        {/* TODO: PeRatioBarChart's may not be correct*/}

        <PeRatioBarChart data={topTechStocksPE} />

        {/* TODO: Yearly Best and Worst Return may not be correct, in validEntries, it may filter out companies that contain null or undefined entries */}
        <YearlyReturnsChart isBest={true} />
        <YearlyReturnsChart isBest={false} />

        {/* Daily Stock Standard Deviation Chart */}
        <StockStandardDeviationChart />
        <YearlyStockStandardDeviationChart />


      </SimpleGrid>
    </Box>
  );
}
