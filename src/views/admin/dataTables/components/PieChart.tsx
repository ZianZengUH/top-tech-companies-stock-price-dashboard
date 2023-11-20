import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { Box, Text, useColorModeValue, Flex } from '@chakra-ui/react';
import Menu from 'components/menu/MainMenu';

interface MarketCapDataItem {
  name: string;
  y: number;
}

interface PieChartProps {
  data: MarketCapDataItem[];
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const series: number[] = data.map(item => item.y);

  const options: ApexOptions = {
    chart: {
      type: 'pie',
      width: '100%', // Set width to 100% of the parent container
      height: 350,   // Specify a fixed height, or use 'auto' to make it responsive
    },
    labels: data.map(item => item.name),
    legend: {
      position: 'bottom',
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
        },
      },
    },
    dataLabels: {
      enabled: true,
    },
    theme: {
      mode: useColorModeValue('light', 'dark') as 'light' | 'dark', // ensure theme mode is typed correctly
    },
    // Make sure all other necessary options are included and correctly typed
  };

  return (
    <Box bg={cardBg} p="4" borderRadius="lg" shadow="base" width="100%" maxWidth="600px" mx="auto">
      <Flex px='25px' mb="8px" justifyContent='space-between' align='center'>
        <Text color={textColor} fontSize='22px' fontWeight='700' lineHeight='100%'>
          Market Capitalization in Billions per Company of Top 100 Tech Stocks
        </Text>
				<Menu />
			</Flex>
      <ReactApexChart options={options} series={series} type="pie" />
    </Box>
  );
};

export default PieChart;
