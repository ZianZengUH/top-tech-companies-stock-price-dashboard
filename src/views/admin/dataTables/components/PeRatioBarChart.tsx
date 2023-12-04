import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Box, useColorModeValue, Text, Flex, Tooltip } from '@chakra-ui/react';
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
          <Tooltip   label={
            <>
            This chart displays the PE (Price-to-Earnings) Ratio for the top 10 tech stocks. The PE Ratio is a key metric used to evaluate the valuation of a company's stock.<br /><br />
            A PE ratio evaluates a company's stock price relative to its earnings. A high PE ratio suggests the stock is valued higher by the market, often reflecting investor expectations of future growth, but it could also indicate overvaluation. Conversely, a low PE ratio might signal an undervalued stock or that investors have concerns about the company's future earnings. This ratio varies by industry, so it's best compared within the same sector. The PE ratio is a useful tool but should be considered alongside other financial metrics for a well-rounded investment analysis.
            </>
            }
              hasArrow
            >
          <Text color={textColor} fontSize='22px' fontWeight='700' lineHeight='100%' cursor="help">
            PE Ratio per Company of Top 10 Tech Stocks
          </Text>
        </Tooltip>
			</Flex>
      
        <ReactApexChart options={options} series={series} type="bar" />
      </Box>
    );
  };

export default PeRatioBarChart;
