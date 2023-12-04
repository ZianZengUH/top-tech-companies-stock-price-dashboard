// Chakra imports
import {Box,Flex,Select,Text} from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import LineChart from 'components/charts/LineChart';
import { useMemo, useEffect, useState } from 'react';
// Assets
import { lineChartOptionsMonthRev} from 'variables/financialcharts';
import Papa from 'papaparse';

interface currentTick {
	tick: string;
	name: string;
	cutoff: number;
}

interface file {
	x: Date, y: Number
}

export default function LineCumuRetM({tick, name, cutoff}: currentTick) {

	
	const years = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
	const [value, setValue] = useState(years.slice(cutoff).at(0));

	const tickerOptions = useMemo(() => years.slice(cutoff).map((data, i) => 
		<option key={i} value={data}>{data}</option>
	), [tick]);

	useEffect(() => {
		async function fetchData() {
			setValue(years.slice(cutoff).at(0))
		}
		fetchData();
	}, [tick]);

	const [info, setInfo] = useState<file[]>([]);
	useEffect(() => {
		async function fetchData() {
			let response = await fetch('/data/top_tech_company/Financial/MReturns/mReturns' + tick + value + '.csv')
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
		name: 'Monthly Revenue',
		data: info
	}]

	return (
		<Card justifyContent='center' alignItems='center' flexDirection='column' w='100%' mb='0px'>
				<Flex me="50px" mt="20px">
              <Select
                value = {value}
                onChange={(e) => {setValue(e.target.value);}}
              >
              {tickerOptions}
              </Select>
            </Flex>
				<Text fontSize='25px'><b>Monthly Cumulative Stock Returns (By Year)</b></Text>
				<Box minH='260px' minW='75%' mt='auto'>
					<LineChart chartData={newData} chartOptions={lineChartOptionsMonthRev} />
				</Box>
		</Card>
	);
}
