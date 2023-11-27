// Chakra imports
import { Box, Button, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import BarChart from 'components/charts/BarChart';
import { useEffect, useState } from 'react';
// Assets
import { 
	histogramAAPL,
	histogramACN,
	histogramADBE,
	histogramADI,
	histogramADSK,
	histogramAKAM,
	histogramAMAT,
	histogramAMD,
	histogramANET,
	histogramANSS,
	histogramAPH,
	histogramASML,
	histogramAVGO,
	histogramAVLR,
	histogramBR,
	histogramCAJ,
	histogramCCC,
	histogramCDNS,
	histogramCDW,
	histogramCHKP,
	histogramCOUP,
	histogramCRM,
	histogramCRWD,
	histogramCSCO,
	histogramCTSH,
	histogramCTXS,
	histogramDDOG,
	histogramDELL,
	histogramDOCU,
	histogramEPAM,
	histogramERIC,
	histogramFIS,
	histogramFISV,
	histogramFLT,
	histogramFTNT,
	histogramFTV,
	histogramFTVPA,
	histogramGIB,
	histogramGLW,
	histogramGRMN,
	histogramHPQ,
	histogramHUBS,
	histogramIBM,
	histogramINFY,
	histogramINTC,
	histogramINTU,
	histogramKEYS,
	histogramKLAC,
	histogramLRCX,
	histogramMCHP,
	histogramMRVL,
	histogramMSFT,
	histogramMSI,
	histogramMU,
	histogramMXIM,
	histogramNET,
	histogramNOW,
	histogramNVDA,
	histogramNXPI,
	histogramOKTA,
	histogramORCL,
	histogramPANW,
	histogramPAYC,
	histogramPLTR,
	histogramQCOM,
	histogramQRVO,
	histogramRNG,
	histogramSAP,
	histogramSHOP,
	histogramSNE,
	histogramSNPS,
	histogramSPLK,
	histogramSQ,
	histogramSSNC,
	histogramSTM,
	histogramSTX,
	histogramSWKS,
	histogramTEAM,
	histogramTEL,
	histogramTER,
	histogramTRMB,
	histogramTSM,
	histogramTXN,
	histogramTYL,
	histogramU,
	histogramUBER,
	histogramUI,
	histogramUMC,
	histogramVMW,
	histogramVRSN,
	histogramWDAY,
	histogramWIT,
	histogramWORK,
	histogramXLNX,
	histogramZBRA,
	histogramZEN,
	histogramZI,
	histogramZS
  } from 'variables/financialCharts/histReturns';
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
				<Text fontSize='50px'>Frequency of Stock Returns</Text>
				<Box minH='260px' minW='75%' mt='auto'>
					<BarChart chartData={histogramAAPL} chartOptions={barChartOptionsHisto} />
				</Box>
		</Card>
	);
}
