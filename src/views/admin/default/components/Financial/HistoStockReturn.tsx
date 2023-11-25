// Chakra imports
import { Box, Button, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import BarChart from 'components/charts/BarChart';
import { useEffect, useState } from 'react';
// Assets
import { histogramAAPL } from 'variables/financialCharts/histReturns';
import { barChartOptionsHisto } from 'variables/financialcharts';

export default function HistoStockReturn(props: { [x: string]: any }) {
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
					<BarChart chartData={histogramAAPL} chartOptions={barChartOptionsHisto} />
				</Box>
		</Card>
	);
}
