'use client';
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
// Custom components
import LineCumuRetM from 'views/admin/default/components/Financial/LineCumuRetM';
import LineCumuRetY from 'views/admin/default/components/Financial/LineCumuRetY';
import LineStockPrice from 'views/admin/default/components/Financial/LineStockPrice';
import HistoStockReturn from 'views/admin/default/components/Financial/HistoStockReturn';
import CandlestickChart from 'views/admin/default/components/Financial/CandlestickChart';
import React from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';


// Assets

export default function Default() {
  // Chakra Color Mode
  const[value, setValue] = React.useState('AAPL');
  const[tickName, setTickName] = React.useState('Apple Inc.')
  const[value2, setValue2] = React.useState('AAPL');
  const[tickName2, setTickName2] = React.useState('Apple Inc.')

  const tickers = ["AAPL","ACN","ADBE","ADI","ADSK","AKAM","AMAT","AMD","ANET","ANSS","APH","ASML","AVGO","AVLR","BR","CAJ","CCC","CDNS",
  "CDW","CHKP","COUP","CRM","CRWD","CSCO","CTSH","CTXS","DDOG","DELL","DOCU","EPAM","ERIC","FIS","FISV","FLT","FTNT","FTV","FTV-PA",
  "GIB","GLW","GRMN","HPQ","HUBS","IBM","INFY","INTC","INTU","KEYS","KLAC","LRCX","MCHP","MRVL","MSFT","MSI","MU","MXIM","NET","NOW",
  "NVDA","NXPI","OKTA","ORCL","PANW","PAYC","PLTR","QCOM","QRVO","RNG","SAP","SHOP","SNE","SNPS","SPLK","SQ","SSNC","STM","STX","SWKS",
  "TEAM","TEL","TER","TRMB","TSM","TXN","TYL","U","UBER","UI","UMC","VMW","VRSN","WDAY","WIT","WORK","XLNX","ZBRA","ZEN","ZI","ZS"];

  const names = [
    'Apple Inc.',
    'Accenture plc',
    'Adobe Inc.',
    'Analog Devices Inc.',
    'Autodesk Inc.',
    'Akamai Technologies Inc.',
    'Applied Materials Inc.',
    'Advanced Micro Devices Inc.',
    'Arista Networks Inc.',
    'ANSYS Inc.',
    'Amphenol Corporation',
    'ASML Holding N.V.',
    'Broadcom Inc.',
    'Avalara Inc.',
    'Broadridge Financial Solutions Inc.',
    'Canon Inc.',
    'Clarivate Plc',
    'Cadence Design Systems Inc.',
    'CDW Corporation',
    'Check Point Software Technologies Ltd.',
    'Coupa Software Incorporated',
    'salesforce.com inc.',
    'CrowdStrike Holdings Inc.',
    'Cisco Systems Inc.',
    'Cognizant Technology Solutions Corporation',
    'Citrix Systems Inc.',
    'Datadog Inc.',
    'Dell Technologies Inc.',
    'DocuSign Inc.',
    'EPAM Systems Inc.',
    'Telefonaktiebolaget LM Ericsson (publ)',
    'Fidelity National Information Services Inc.',
    'Fiserv Inc.',
    'FLEETCOR Technologies Inc.',
    'Fortinet Inc.',
    'Fortive Corporation',
    'Fortive Corporation',
    'CGI Inc.',
    'Corning Incorporated',
    'Garmin Ltd.',
    'HP Inc.',
    'HubSpot Inc.',
    'International Business Machines Corporation',
    'Infosys Limited',
    'Intel Corporation',
    'Intuit Inc.',
    'Keysight Technologies Inc.',
    'KLA Corporation',
    'Lam Research Corporation',
    'Microchip Technology Incorporated',
    'Marvell Technology Group Ltd.',
    'Microsoft Corporation',
    'Motorola Solutions Inc.',
    'Micron Technology Inc.',
    'Maxim Integrated Products Inc.',
    'Cloudflare Inc.',
    'ServiceNow Inc.',
    'NVIDIA Corporation',
    'NXP Semiconductors N.V.',
    'Okta Inc.',
    'Oracle Corporation',
    'Palo Alto Networks Inc.',
    'Paycom Software Inc.',
    'Palantir Technologies Inc.',
    'QUALCOMM Incorporated',
    'Qorvo Inc.',
    'RingCentral Inc.',
    'SAP SE',
    'Shopify Inc.',
    'Sony Corporation',
    'Synopsys Inc.',
    'Splunk Inc.',
    'Square Inc.',
    'SS&C Technologies Holdings Inc.',
    'STMicroelectronics N.V.',
    'Seagate Technology plc',
    'Skyworks Solutions Inc.',
    'Atlassian Corporation Plc',
    'TE Connectivity Ltd.',
    'Teradyne Inc.',
    'Trimble Inc.',
    'Taiwan Semiconductor Manufacturing Company Limited',
    'Texas Instruments Incorporated',
    'Tyler Technologies Inc.',
    'Unity Software Inc.',
    'Uber Technologies Inc.',
    'Ubiquiti Inc.',
    'United Microelectronics Corporation',
    'VMware Inc.',
    'VeriSign Inc.',
    'Workday Inc.',
    'Wipro Limited',
    'Slack Technologies Inc.',
    'Xilinx Inc.',
    'Zebra Technologies Corporation',
    'Zendesk Inc.',
    'ZoomInfo Technologies Inc.',
    'Zscaler Inc.',
  ];

  const [chartType1, setChartType1] = React.useState('Monthly Cumulative Stock Returns (By Year)');
  const [chartType2, setChartType2] = React.useState('Monthly Cumulative Stock Returns (By Year)');

  const chartOptions = [
    'Monthly Cumulative Stock Returns (By Year)',
    'Yearly Cumulative Returns',
    'Daily Stock Price (By Year)',
    'Frequency of Stock Returns',
    'Candlestick Chart',
]
const handleFirstChartTypeChange = (chartOption: React.SetStateAction<string>) => {
  setChartType1(chartOption);
};
const handleSecondChartTypeChange = (chartOption: React.SetStateAction<string>) => {
  setChartType2(chartOption);
};

const renderChart1 = () => {
  switch (chartType1) {
    case chartOptions[0]:
      return <LineCumuRetM tick={value} name={tickName}/>;
    case chartOptions[1]:
      return <LineCumuRetY tick={value} name={tickName} />;
    case chartOptions[2]:
      return <LineStockPrice tick={value} name={tickName} />;
    case chartOptions[3]:
      return <HistoStockReturn tick={value} name={tickName} />;
    case chartOptions[4]:
      return <CandlestickChart tick={value} name={tickName} />;
    default:
      return null; 
  }
};
const renderChart2 = () => {
  switch (chartType2) {
    case chartOptions[0]:
      return <LineCumuRetM tick={value2} name={tickName2} />;
    case chartOptions[1]:
      return <LineCumuRetY tick={value2} name={tickName2} />;
    case chartOptions[2]:
      return <LineStockPrice tick={value2} name={tickName} />;
    case chartOptions[3]:
      return <HistoStockReturn tick={value2} name={tickName2} />;
    case chartOptions[4]:
      return <CandlestickChart tick={value2} name={tickName2} />;
    default:
      return null; 
  }
};

  // const tickerOptions = tickers.map((ticker, i) =>
  //   {
  //     let option = <option key={i} value={ticker}>{names.at(i)}</option>;
  //     return option
  //   }
	// )
  // const getName = tickers.map((ticker, i) =>
  //   {
  //     if(value == ticker) {
  //       return(names.at(i))
  //     }
  //   })

  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        position="sticky"
        zIndex={10}
        top={20} 
        columns={{ base: 1, md: 2, lg: 2, '2xl': 1 }}
        gap="20px"
        mb="20px"
      >
        <Flex me="50px" mt="20px">
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg='gray.200' width='10em'>
              {tickName}
            </MenuButton>
            <MenuList>
              {tickers.map((ticker, i) => (
                <MenuItem key={i} onClick={() => { setValue(ticker); setTickName(names[i]); }}>
                  {names[i]}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} bg='gray.200' rightIcon={<ChevronDownIcon />} marginLeft='2em'>
              {chartType1}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => handleFirstChartTypeChange(chartOptions[0])}>Monthly Cumulative Stock Returns (By Year)</MenuItem>
              <MenuItem onClick={() => handleFirstChartTypeChange(chartOptions[1])}>Yearly Cumulative Returns</MenuItem>
              <MenuItem onClick={() => handleFirstChartTypeChange(chartOptions[2])}>Daily Stock Price (By Year)</MenuItem>
              <MenuItem onClick={() => handleFirstChartTypeChange(chartOptions[3])}>Frequency of Stock Returns</MenuItem>
              <MenuItem onClick={() => handleFirstChartTypeChange(chartOptions[4])}>Candlestick Chart</MenuItem>
            </MenuList>
          </Menu>
          </Flex>
          <Flex me="50px" mt="20px">
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg='gray.200' width='10em'>
              {tickName2}
            </MenuButton>
            <MenuList>
              {tickers.map((ticker, i) => (
                <MenuItem key={i} onClick={() => { setValue2(ticker); setTickName2(names[i]); }}>
                  {names[i]}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>         
          <Menu>
            <MenuButton as={Button}  bg='gray.200'rightIcon={<ChevronDownIcon />} marginLeft='2em' >
              {chartType2}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => handleSecondChartTypeChange(chartOptions[0])}>Monthly Cumulative Stock Returns (By Year)</MenuItem>
              <MenuItem onClick={() => handleSecondChartTypeChange(chartOptions[1])}>Yearly Cumulative Returns</MenuItem>
              <MenuItem onClick={() => handleSecondChartTypeChange(chartOptions[2])}>Daily Stock Price (By Year)</MenuItem>
              <MenuItem onClick={() => handleSecondChartTypeChange(chartOptions[3])}>Frequency of Stock Returns</MenuItem>
              <MenuItem onClick={() => handleSecondChartTypeChange(chartOptions[4])}>Candlestick Chart</MenuItem>
            </MenuList>
          </Menu>
          </Flex>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <Flex>         
        {renderChart1()}
        </Flex>
        <Flex>
        {renderChart2()}
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
