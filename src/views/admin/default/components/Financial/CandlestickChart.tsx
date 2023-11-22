

// Chakra imports
import { Box, Button, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import CandlestickChart from 'components/charts/CandlestickChart'
import { useEffect, useState } from 'react';
// Assets
import { candlestickAAPL } from 'variables/financialCharts/ohlc';
import { SampleCandle, SampleCandleOptions, lineChartDataTotalSpent, lineChartOptionsTotalSpent, lineChartOptionsYearRev, lineChartOptionsMonthRev, AAPLStockReturnsY, ACNStockReturnsY } from 'variables/financialcharts';

export default function LineCumuRet(props: { [x: string]: any }) {
	const { ...rest } = props;


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
				<Box minH='260px' minW='75%' mt='auto'>
				<CandlestickChart chartData={candlestickAAPL} chartOptions={SampleCandleOptions} />
				</Box>
		</Card>
	);
}