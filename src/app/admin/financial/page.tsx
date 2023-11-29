'use client';
/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import {
  Box,
  Flex,
  FormLabel,
  Image,
  Icon,
  Select,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
// Custom components
// import MiniCalendar from 'components/calendar/MiniCalendar';
import MiniStatistics from 'components/card/MiniStatistics';
import IconBox from 'components/icons/IconBox';
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from 'react-icons/md';
import LineCumuRet from 'views/admin/default/components/Financial/LineCumuRet';
import LineCumuRetM from 'views/admin/default/components/Financial/LineCumuRetM';
import LineCumuRetY from 'views/admin/default/components/Financial/LineCumuRetY';
import LineStockPrice from 'views/admin/default/components/Financial/LineStockPrice';
import HistoStockReturn from 'views/admin/default/components/Financial/HistoStockReturn';
import CandlestickChart from 'views/admin/default/components/Financial/CandlestickChart';
import React from 'react';


// Assets
import Usa from 'img/dashboards/usa.png';

export default function Default() {
  // Chakra Color Mode
  const[value, setValue] = React.useState('AAPL');
  const[tickName, setTickName] = React.useState('Apple Inc.')
  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
  const tickers = ["AAPL","ACN","ADBE","ADI","ADSK","AKAM","AMAT","AMD","ANET","ANSS","APH","ASML","AVGO","AVLR","BR","CAJ","CCC","CDNS",
  "CDW","CHKP","COUP","CRM","CRWD","CSCO","CTSH","CTXS","DDOG","DELL","DOCU","EPAM","ERIC","FIS","FISV","FLT","FTNT","FTV","FTVPA",
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

  const tickerOptions = tickers.map((ticker, i) =>
    {
      let option = <option key={i} value={ticker}>{names.at(i)}</option>;
      return option
    }
	)

  const getName = tickers.map((ticker, i) =>
    {
      if(value == ticker) {
        return(names.at(i))
      }
    })

  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        position="sticky"
        zIndex={10}
        top={20} 
        columns={{ base: 1, md: 1, lg: 1, '2xl': 1 }}
        gap="20px"
        mb="20px"
      >
        <Flex me="50px" mt="20px">
        <Text fontSize="30px">Company:</Text>
        </Flex>
        <Flex me="50px" mt="20px">
          
          <Select variant='filled' bg='gray.200' placeholder='AAPL'
            value = {value}
            onChange={(e) => {setValue(e.target.value); setTickName(getName.at(0));}}
          >
          {tickerOptions}
          </Select>
        </Flex>
      </SimpleGrid>

      {/* <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px" mb="20px">
        <LineCumuRet tick={value}/>
      </SimpleGrid> */}
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <Flex><LineCumuRetM tick={value} name={tickName}/></Flex>
        <Flex><Text>This is placeholder text.</Text></Flex>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <Flex><LineCumuRetY tick={value} name={tickName}/></Flex>
        <Flex><Text>This is placeholder text.</Text></Flex>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <Flex><LineStockPrice tick={value} name={tickName}/></Flex>
        <Flex><Text>This is placeholder text.</Text></Flex>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <Flex><HistoStockReturn tick={value} name={tickName}/></Flex>
        <Flex><Text>This is placeholder text.</Text></Flex>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <Flex><CandlestickChart tick={value} name={tickName}/></Flex>
        <Flex><Text>This is placeholder text.</Text></Flex>
      </SimpleGrid>
    </Box>
  );
}
