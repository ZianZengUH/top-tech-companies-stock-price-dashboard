// Chakra imports
import { Box,Text } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import BarChart from 'components/charts/BarChart';
import { useEffect, useState } from 'react';
// Assets
import { barChartOptionsHisto } from 'variables/financialcharts';
import { histogramAAPL } from 'variables/financialCharts/histReturns';
import React from 'react';
import Papa from 'papaparse';

interface currentTick {
	tick: string;
	name: String;
}

interface file {
	x: Number, y: Number
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
					setInfo(
						results.data
					);
				}
			});
		}
		fetchData();
	});

	const newData = [{
		name: 'Values',
		data: info
	}]

	return (
		<Card key={2} justifyContent='center' alignItems='center' flexDirection='column' w='100%' mb='0px'>
				<Text fontSize='22px'><b>Frequency of Stock Returns</b></Text>
				<Box minH='260px' minW='75%' mt='auto'>
					<BarChart chartData={histogramAAPL} chartOptions={barChartOptionsHisto} />
				</Box>
		</Card>
	);
}
