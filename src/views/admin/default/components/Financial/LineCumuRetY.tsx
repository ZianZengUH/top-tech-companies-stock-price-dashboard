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

interface currentTick {
	tick: string;
	name: string;
}
export default function LineCumuRetY({tick, name}: currentTick) {


	// Chakra Color Mode

	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const textColorSecondary = useColorModeValue('secondaryGray.600', 'white');
	const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
	const iconColor = useColorModeValue('brand.500', 'white');
	const bgButton = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
	const bgHover = useColorModeValue({ bg: 'secondaryGray.400' }, { bg: 'whiteAlpha.50' });
	const bgFocus = useColorModeValue({ bg: 'secondaryGray.300' }, { bg: 'whiteAlpha.100' });

	const [ mounted, setMounted ] = useState(false);

	const chart : string = 'yReturns' + tick;

	return (
		<Card key={4} justifyContent='center' alignItems='center' flexDirection='column' w='100%' mb='0px'>
				<Text fontSize='25px'><b>Yearly Cumulative Returns</b></Text>
				<Box minH='260px' minW='75%' mt='auto'>
					<LineChart chartData={yReturnsAAPL} chartOptions={lineChartOptionsYearRev} />
				</Box>
		</Card>
	);
}
