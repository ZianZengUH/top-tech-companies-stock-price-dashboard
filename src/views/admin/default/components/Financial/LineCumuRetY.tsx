// Chakra imports
import { Box, Button, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import LineChart from 'components/charts/LineChart';
import { useEffect, useState } from 'react';
// Assets
import { 
	yReturnsAAPL,
	yReturnsACN,
	yReturnsADBE,
	yReturnsADI,
	yReturnsADSK,
	yReturnsAKAM,
	yReturnsAMAT,
	yReturnsAMD,
	yReturnsANET,
	yReturnsANSS,
	yReturnsAPH,
	yReturnsASML,
	yReturnsAVGO,
	yReturnsAVLR,
	yReturnsBR,
	yReturnsCAJ,
	yReturnsCCC,
	yReturnsCDNS,
	yReturnsCDW,
	yReturnsCHKP,
	yReturnsCOUP,
	yReturnsCRM,
	yReturnsCRWD,
	yReturnsCSCO,
	yReturnsCTSH,
	yReturnsCTXS,
	yReturnsDDOG,
	yReturnsDELL,
	yReturnsDOCU,
	yReturnsEPAM,
	yReturnsERIC,
	yReturnsFIS,
	yReturnsFISV,
	yReturnsFLT,
	yReturnsFTNT,
	yReturnsFTV,
	yReturnsFTVPA,
	yReturnsGIB,
	yReturnsGLW,
	yReturnsGRMN,
	yReturnsHPQ,
	yReturnsHUBS,
	yReturnsIBM,
	yReturnsINFY,
	yReturnsINTC,
	yReturnsINTU,
	yReturnsKEYS,
	yReturnsKLAC,
	yReturnsLRCX,
	yReturnsMCHP,
	yReturnsMRVL,
	yReturnsMSFT,
	yReturnsMSI,
	yReturnsMU,
	yReturnsMXIM,
	yReturnsNET,
	yReturnsNOW,
	yReturnsNVDA,
	yReturnsNXPI,
	yReturnsOKTA,
	yReturnsORCL,
	yReturnsPANW,
	yReturnsPAYC,
	yReturnsPLTR,
	yReturnsQCOM,
	yReturnsQRVO,
	yReturnsRNG,
	yReturnsSAP,
	yReturnsSHOP,
	yReturnsSNE,
	yReturnsSNPS,
	yReturnsSPLK,
	yReturnsSQ,
	yReturnsSSNC,
	yReturnsSTM,
	yReturnsSTX,
	yReturnsSWKS,
	yReturnsTEAM,
	yReturnsTEL,
	yReturnsTER,
	yReturnsTRMB,
	yReturnsTSM,
	yReturnsTXN,
	yReturnsTYL,
	yReturnsU,
	yReturnsUBER,
	yReturnsUI,
	yReturnsUMC,
	yReturnsVMW,
	yReturnsVRSN,
	yReturnsWDAY,
	yReturnsWIT,
	yReturnsWORK,
	yReturnsXLNX,
	yReturnsZBRA,
	yReturnsZEN,
	yReturnsZI,
	yReturnsZS
  } from 'variables/financialCharts/yReturns';
import { lineChartDataTotalSpent, lineChartOptionsTotalSpent, lineChartOptionsYearRev, lineChartOptionsMonthRev} from 'variables/financialcharts';

export default function LineCumuRetY(props: { [x: string]: any }) {
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
				<Text fontSize='50px'>Cumulative Stock Returns (Yearly)</Text>
				<Box minH='260px' minW='75%' mt='auto'>
					<LineChart chartData={yReturnsAAPL} chartOptions={lineChartOptionsYearRev} />
				</Box>
		</Card>
	);
}
