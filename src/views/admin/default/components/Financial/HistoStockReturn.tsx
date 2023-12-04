// Chakra imports
import { Box,Text } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import BarChart from 'components/charts/FinanceBarChart';
import { useEffect, useState } from 'react';
// Assets
import { barChartOptionsHisto } from 'variables/financialcharts';
import Papa from 'papaparse';

interface currentTick {
	tick: string;
	name: string;
}

interface file {
	x: string, y: number
}

export default function HistoStockReturn({tick, name}: currentTick) {
	// Chakra Color Mode
	const [info, setInfo] = useState<file[]>([]);
	useEffect(() => {
		async function fetchData() {
			let response = await fetch('/data/top_tech_company/Financial/Histo/histogram' + tick + '.csv')
			let csvString = await response.text();
			Papa.parse<file>(csvString, {
				header: true,
				skipEmptyLines: true,
				dynamicTyping: true,
				complete: (results) => {
					let parsedResults = results.data.map((items =>
						{return {x: items.x.toString(), y: items.y}}
					));
					setInfo(parsedResults);
				}
			});
		}
		fetchData();
	}, [tick]);

	const newData = [{
		name: 'values',
		data: info
	}];

	return (
		<Card key={2} justifyContent='center' alignItems='center' flexDirection='column' w='100%' mb='0px'>
				<Text fontSize='22px'><b>Frequency of Stock Returns</b></Text>
				<Box minH='260px' minW='75%' mt='auto'>
					<BarChart chartData={newData} chartOptions={barChartOptionsHisto} />
				</Box>
		</Card>
	);
}
