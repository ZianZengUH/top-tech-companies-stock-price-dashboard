// import React from 'react';
// import ReactApexChart from 'react-apexcharts';
// import { ApexOptions } from 'apexcharts';

// // Define a type for the data items
// type MarketCapDataItem = {
//   name: string;
//   y: number;
// };

// // Define a type for the props
// interface PieChartProps {
//   data: MarketCapDataItem[];
// }

// const PieChart: React.FC<PieChartProps> = ({ data }) => {
//   // Series data for the ApexChart
//   const series: number[] = data.map((item) => item.y);

//   // Options for the ApexChart
//   const options: ApexOptions = {
//     chart: {
//       type: 'pie',
//       // Add any additional options required by ApexCharts here
//     },
//     labels: data.map((item) => item.name),
//     responsive: [
//       {
//         breakpoint: 480,
//         options: {
//           chart: {
//             width: 200,
//           },
//           legend: {
//             position: 'bottom',
//           },
//         },
//       },
//     ],
//     legend: {
//       position: 'right',
//       offsetY: 0,
//       height: 230,
//     },
//     // It's important to ensure all options match the expected type
//   };

//   return (
//     <div id="chart">
//       <ReactApexChart options={options} series={series} type="pie" width={380} />
//     </div>
//   );
// };

// export default PieChart;

import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { Box, useColorModeValue } from '@chakra-ui/react';

interface MarketCapDataItem {
  name: string;
  y: number;
}

interface PieChartProps {
  data: MarketCapDataItem[];
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const cardBg = useColorModeValue('white', 'gray.700');

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
    <ReactApexChart options={options} series={series} type="pie" />
  </Box>
  );
};

export default PieChart;
