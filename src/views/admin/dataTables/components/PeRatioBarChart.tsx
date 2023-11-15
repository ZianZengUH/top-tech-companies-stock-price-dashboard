import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';

interface StockPEData {
  label: string;
  value: number;
}

interface PeRatioBarChartProps {
  data: StockPEData[];
}

const PeRatioBarChart: React.FC<PeRatioBarChartProps> = ({ data }) => {
  const cardBg = useColorModeValue('white', 'gray.700');

  const options: ApexOptions = {
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
        categories: data.map(item => item.label),
      },
      yaxis: {
        title: {
          text: 'PE Ratio',
        },
      },
    };
  
    const series = [
      {
        name: 'PE Ratio',
        data: data.map(item => item.value),
      },
    ];
  
    return (
      <Box bg={cardBg} p="4" borderRadius="lg" shadow="base" width="100%">
        <ReactApexChart options={options} series={series} type="bar" />
      </Box>
    );
  };

export default PeRatioBarChart;
