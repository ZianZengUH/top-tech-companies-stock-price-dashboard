// Chakra imports
import { Box, Button, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import LineChart from 'components/charts/LineChart';
import CandlestickChart from 'components/charts/CandlestickChart'
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { MdBarChart, MdOutlineCalendarToday } from 'react-icons/md';
// Assets
import { RiArrowUpSFill } from 'react-icons/ri';
import { SampleCandle, SampleCandleOptions, lineChartDataTotalSpent, lineChartOptionsTotalSpent, lineChartOptionsYearRev, lineChartOptionsMonthRev, AAPLStockReturnsY, ACNStockReturnsY } from 'variables/financialcharts';
import Menu from 'components/menu/FinancialMenu';
import Papa from "papaparse";

const allowedExtensions = ["csv"];

export default function TotalSpent(props: { [x: string]: any }) {
	const { ...rest } = props;
	
	



	// useEffect(() => {
	// 	fetch('/data/top_tech_company/List of SP 500 companies.csv')
	// 	  .then(response => response.text())
	// 	  .then(csvString => {
	// 		Papa.parse<CompanyData>(csvString, {
	// 		  header: true,
	// 		  skipEmptyLines: true,
	// 		  complete: (results) => {
	// 			const data = results.data as CompanyData[];
	
	// 			// Calculate sector counts
	// 			const sectorCounts = data.reduce((acc, { Sector }) => {
	// 			  acc[Sector] = (acc[Sector] || 0) + 1;
	// 			  return acc;
	// 			}, {} as Record<string, number>);
	
	// 			// Calculate total number of entries
	// 			const total = data.length;
	
	// 			// Calculate sector percentages
	// 			const sectorsPercentage = Object.entries(sectorCounts).map(([sector, count]) => ({
	// 			  sector,
	// 			  percentage: (count / total) * 100,
	// 			}));
	
	// 			// Sort by percentage descending
	// 			sectorsPercentage.sort((a, b) => b.percentage - a.percentage);
	// 			setSectorPercentages(sectorsPercentage);
	// 		  }
	// 		});
	// 	  });
	//   }, []);


	// Chakra Color Mode

	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const textColorSecondary = useColorModeValue('secondaryGray.600', 'white');
	const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
	const iconColor = useColorModeValue('brand.500', 'white');
	const bgButton = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
	const bgHover = useColorModeValue({ bg: 'secondaryGray.400' }, { bg: 'whiteAlpha.50' });
	const bgFocus = useColorModeValue({ bg: 'secondaryGray.300' }, { bg: 'whiteAlpha.100' });

	const [ mounted, setMounted ] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setMounted(true);
		}, 3000);
		return () => {
			clearTimeout(timeout);
		};
	}, []);

	return (
		<Card justifyContent='center' alignItems='center' flexDirection='column' w='100%' mb='0px' {...rest}>
			<Flex justifyContent='center' ps='495px' pe='20px' pt='5px' w='100%'>
				<Text color='secondaryGray.600' fontSize='sm' fontWeight='500' mt='4px' me='15px'>
					Click to change company
				</Text>
				<Menu ms='auto'/>
				
			</Flex>
			<Flex w='100%' flexDirection={{ base: 'column', lg: 'row' }}>
				<Flex flexDirection='column' me='20px' mt='28px'>
					<Text color={textColor} fontSize='34px' textAlign='start' fontWeight='700' lineHeight='100%'>
						AAPL
					</Text>
					<Flex align='center' mb='20px'>
						<Text color='secondaryGray.600' fontSize='sm' fontWeight='500' mt='4px' me='12px'>
							Apple
						</Text>
						<Flex align='center'>
						</Flex>
					</Flex>
				</Flex>
				<Box minH='260px' minW='75%' mt='auto'>
					<CandlestickChart chartData={SampleCandle} chartOptions={SampleCandleOptions} />
				</Box>
			</Flex>
		</Card>
	);
}
