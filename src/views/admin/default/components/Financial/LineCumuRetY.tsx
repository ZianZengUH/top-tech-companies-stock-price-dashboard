// Chakra imports
import { Box,Text} from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import LineChart from 'components/charts/LineChart';
import { useEffect, useState } from 'react';
// Assets
import {lineChartOptionsYearRev} from 'variables/financialcharts';
import Papa from 'papaparse';

interface currentTick {
	tick: string;
	name: string;
}

interface file {
	x: Date, y: Number
}

export default function LineCumuRetY({tick, name}: currentTick) {
	// Chakra Color Mode
	const [info, setInfo] = useState<file[]>([]);
	useEffect(() => {
		async function fetchData() {
			let response = await fetch('/data/top_tech_company/Financial/YReturns/yReturns' + tick + '.csv')
			let csvString = await response.text();
			Papa.parse<file>(csvString, {
				header: true,
				skipEmptyLines: true,
				dynamicTyping: true,
				complete: (results) => {
					setInfo(
						results.data
					);
				}
			});
		}
		fetchData();
	});

	const newData = [{
		name: 'Yearly Revenue',
		data: info
	}]

	return (
		<Card key={4} justifyContent='center' alignItems='center' flexDirection='column' w='100%' mb='0px'>
				<Text fontSize='25px'><b>Yearly Cumulative Returns</b></Text>
				<Box minH='260px' minW='75%' mt='auto'>
					<LineChart chartData={newData} chartOptions={lineChartOptionsYearRev} />
				</Box>
		</Card>
	);
}
