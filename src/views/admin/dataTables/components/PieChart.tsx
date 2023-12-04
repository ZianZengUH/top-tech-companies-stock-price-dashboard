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
  // const series: number[] = data.map(item => item.y);
  const top50Data = data.slice(0, 50);
  const totalMarketCap = top50Data.reduce((acc, item) => acc + item.y, 0);
  const series = top50Data.map(item => item.y);
  const labels = top50Data.map(item => item.name);

  const options: ApexOptions = {
    chart: {
      type: 'pie',
      width: '100%', // Set width to 100% of the parent container
      height: 500,  
      toolbar: {
        show: true,
        tools: {
          download: true, // Enables the download icon
        },
      },
    },
    labels: labels,
    legend: {
      show: false,  // Hide the legend to use labels within the chart
    },
    // legend: {
    //   position: 'bottom',
    // },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '12px', 
        fontWeight: 'bold',
      },
      formatter: function (val, opts) {
        // Ensure 'val' is a number regardless of its initial type
        let value = typeof val === 'number' ? val : parseFloat(val.toString());
    
        // Display label for top 30 companies 
        if (opts.seriesIndex < 30) {
          const name = opts.w.config.labels[opts.seriesIndex];
          return name + ': ' + value.toFixed(2) + '%';
        } else {
          return ''; // Return an empty string for segments beyond the top 30
        }
      },
      offsetX: 0,
      offsetY: 0,
      dropShadow: {
        enabled: false
      }
    },  
    tooltip: {
      enabled: true,
      y: {
        formatter: (value, { seriesIndex }) => {
          const name = top50Data[seriesIndex].name;
          const marketCap = value; // This is the market cap
          const percentage = (marketCap / totalMarketCap) * 100;
          return `$${marketCap.toFixed(2)} Billion (${percentage.toFixed(2)}%)`;
        }
      }
    },
    plotOptions: {
      pie: {
        expandOnClick: false, // Prevents pie segments from separating on click
        donut: {
          size: '45%',  // Adjust donut size for better label visibility
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '12px', // Adjust as needed
            },
            value: {
              show: true,
              fontSize: '12px', // Adjust as needed
            }
          }
        },
      },
    },
    theme: {
      mode: useColorModeValue('light', 'dark') as 'light' | 'dark', // ensure theme mode is typed correctly
    },
    // Make sure all other necessary options are included and correctly typed
  };

  return (
    
    <Box className="card-container" bg={cardBg}>
      <Flex px='25px' mb="8px" justifyContent='space-between' align='center' mt="25px">
        <Text color={textColor} fontSize='22px' fontWeight='700' lineHeight='100%'>
          Market Capitalization in Billions per Company of Top 50 Tech Stocks
        </Text>
			</Flex>
      <ReactApexChart options={options} series={series} type="pie" />
    </Box>
  );
};

export default PieChart;
