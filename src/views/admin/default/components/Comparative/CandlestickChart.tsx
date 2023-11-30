// Chakra imports
import { Box,Flex,Select,Text} from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import CandlestickChart from 'components/charts/CandlestickChart'
import { useEffect, useState } from 'react';
// Assets
import { SampleCandleOptions } from 'variables/financialcharts';
import { candlestickAAPL2006 } from 'variables/financialCharts/ohlc';
import  React from 'react';
import Papa from 'papaparse';

interface currentTick {
	tick: string;
	name: string;
}

interface file {
	date: Date;
	open: Number;
	high: Number;
	low: Number;
	close: Number;
}

export default function LineCumuRet({tick, name}: currentTick) {


	// Chakra Color Mode

	const years = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];

	const[value, setValue] = React.useState('2006');

	const tickerOptions = years.map((data, i) => 
		<option key={i} value={data}>{data}</option>
	)
	const [info, setInfo] = useState([]);
	useEffect(() => {
		async function fetchData() {
			let response = await fetch('/data/top_tech_company/Financial/OHLC/ohlc' + tick + value + '.csv')
			let csvString = await response.text();
			Papa.parse<file>(csvString, {
				header: true,
				skipEmptyLines: true,
				dynamicTyping: true,
				complete: (results) => {
					let parsedResults = results.data.map((items => 
						{return {x: items.date, y:[items.open, items.high, items.low, items.close]}}
					));
					setInfo(
						parsedResults
					);
			
				}	
			});
		}
		fetchData();
	});

	const newData = [{
		name: 'Open, High, Low, Close',
		data: info
	}]

	return (
		<Card justifyContent='center' alignItems='center' flexDirection='column' w='100%' mb='0px'>
			<Flex me="50px" mt="20px">
              <Select
                value = {value}
                onChange={(e) => {
					setValue(e.target.value)
				}}
              >
              {tickerOptions}
              </Select>
            </Flex>
				<Text fontSize='25px'><b>Candlestick Chart</b></Text>
				<Box minH='260px' minW='75%' mt='auto'>
					<CandlestickChart chartData={candlestickAAPL2006} chartOptions={SampleCandleOptions} />
				</Box>
		</Card>
	);
}