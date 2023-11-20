import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Box, useColorModeValue, Text, Flex } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';
import Menu from 'components/menu/MainMenu';

interface StockPEData {
  label: string;
  value: number;
}

interface PeRatioBarChartProps {
  data: StockPEData[];
}

const PeRatioBarChart: React.FC<PeRatioBarChartProps> = ({ data }) => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('secondaryGray.900', 'white');

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

        <Flex px='25px' mb="8px" justifyContent='space-between' align='center'>
          <Text color={textColor} fontSize='22px' fontWeight='700' lineHeight='100%'>
            PE Ratio per Company of Top 10 Tech Stocks
          </Text>
				<Menu />
			</Flex>
      
        <ReactApexChart options={options} series={series} type="bar" />
      </Box>
    );
  };

export default PeRatioBarChart;
