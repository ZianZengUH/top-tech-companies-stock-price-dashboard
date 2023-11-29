// Chakra imports
import { Box, Button, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import LineChart from 'components/charts/LineChart';
import { useEffect, useState } from 'react';
// Assets
import { 
	adjReturnsAAPL2006,
	adjReturnsAAPL2007,
	adjReturnsAAPL2008,
	adjReturnsAAPL2009,
	adjReturnsAAPL2010,
	adjReturnsAAPL2011,
	adjReturnsAAPL2012,
	adjReturnsAAPL2013,
	adjReturnsAAPL2014,
	adjReturnsAAPL2015,
	adjReturnsAAPL2016,
	adjReturnsAAPL2017,
	adjReturnsAAPL2018,
	adjReturnsAAPL2019,
	adjReturnsAAPL2020,
	adjReturnsACN2006,
	adjReturnsACN2007,
	adjReturnsACN2008,
	adjReturnsACN2009,
	adjReturnsACN2010,
	adjReturnsACN2011,
	adjReturnsACN2012,
	adjReturnsACN2013,
	adjReturnsACN2014,
	adjReturnsACN2015,
	adjReturnsACN2016,
	adjReturnsACN2017,
	adjReturnsACN2018,
	adjReturnsACN2019,
	adjReturnsACN2020,
	adjReturnsADBE2006,
	adjReturnsADBE2007,
	adjReturnsADBE2008,
	adjReturnsADBE2009,
	adjReturnsADBE2010,
	adjReturnsADBE2011,
	adjReturnsADBE2012,
	adjReturnsADBE2013,
	adjReturnsADBE2014,
	adjReturnsADBE2015,
	adjReturnsADBE2016,
	adjReturnsADBE2017,
	adjReturnsADBE2018,
	adjReturnsADBE2019,
	adjReturnsADBE2020,
	adjReturnsADI2006,
	adjReturnsADI2007,
	adjReturnsADI2008,
	adjReturnsADI2009,
	adjReturnsADI2010,
	adjReturnsADI2011,
	adjReturnsADI2012,
	adjReturnsADI2013,
	adjReturnsADI2014,
	adjReturnsADI2015,
	adjReturnsADI2016,
	adjReturnsADI2017,
	adjReturnsADI2018,
	adjReturnsADI2019,
	adjReturnsADI2020,
	adjReturnsADSK2006,
	adjReturnsADSK2007,
	adjReturnsADSK2008,
	adjReturnsADSK2009,
	adjReturnsADSK2010,
	adjReturnsADSK2011,
	adjReturnsADSK2012,
	adjReturnsADSK2013,
	adjReturnsADSK2014,
	adjReturnsADSK2015,
	adjReturnsADSK2016,
	adjReturnsADSK2017,
	adjReturnsADSK2018,
	adjReturnsADSK2019,
	adjReturnsADSK2020,
	adjReturnsAKAM2006,
	adjReturnsAKAM2007,
	adjReturnsAKAM2008,
	adjReturnsAKAM2009,
	adjReturnsAKAM2010,
	adjReturnsAKAM2011,
	adjReturnsAKAM2012,
	adjReturnsAKAM2013,
	adjReturnsAKAM2014,
	adjReturnsAKAM2015,
	adjReturnsAKAM2016,
	adjReturnsAKAM2017,
	adjReturnsAKAM2018,
	adjReturnsAKAM2019,
	adjReturnsAKAM2020,
	adjReturnsAMAT2006,
	adjReturnsAMAT2007,
	adjReturnsAMAT2008,
	adjReturnsAMAT2009,
	adjReturnsAMAT2010,
	adjReturnsAMAT2011,
	adjReturnsAMAT2012,
	adjReturnsAMAT2013,
	adjReturnsAMAT2014,
	adjReturnsAMAT2015,
	adjReturnsAMAT2016,
	adjReturnsAMAT2017,
	adjReturnsAMAT2018,
	adjReturnsAMAT2019,
	adjReturnsAMAT2020,
	adjReturnsAMD2006,
	adjReturnsAMD2007,
	adjReturnsAMD2008,
	adjReturnsAMD2009,
	adjReturnsAMD2010,
	adjReturnsAMD2011,
	adjReturnsAMD2012,
	adjReturnsAMD2013,
	adjReturnsAMD2014,
	adjReturnsAMD2015,
	adjReturnsAMD2016,
	adjReturnsAMD2017,
	adjReturnsAMD2018,
	adjReturnsAMD2019,
	adjReturnsAMD2020,
	adjReturnsANET2014,
	adjReturnsANET2015,
	adjReturnsANET2016,
	adjReturnsANET2017,
	adjReturnsANET2018,
	adjReturnsANET2019,
	adjReturnsANET2020,
	adjReturnsANSS2006,
	adjReturnsANSS2007,
	adjReturnsANSS2008,
	adjReturnsANSS2009,
	adjReturnsANSS2010,
	adjReturnsANSS2011,
	adjReturnsANSS2012,
	adjReturnsANSS2013,
	adjReturnsANSS2014,
	adjReturnsANSS2015,
	adjReturnsANSS2016,
	adjReturnsANSS2017,
	adjReturnsANSS2018,
	adjReturnsANSS2019,
	adjReturnsANSS2020,
	adjReturnsAPH2006,
	adjReturnsAPH2007,
	adjReturnsAPH2008,
	adjReturnsAPH2009,
	adjReturnsAPH2010,
	adjReturnsAPH2011,
	adjReturnsAPH2012,
	adjReturnsAPH2013,
	adjReturnsAPH2014,
	adjReturnsAPH2015,
	adjReturnsAPH2016,
	adjReturnsAPH2017,
	adjReturnsAPH2018,
	adjReturnsAPH2019,
	adjReturnsAPH2020,
	adjReturnsASML2006,
	adjReturnsASML2007,
	adjReturnsASML2008,
	adjReturnsASML2009,
	adjReturnsASML2010,
	adjReturnsASML2011,
	adjReturnsASML2012,
	adjReturnsASML2013,
	adjReturnsASML2014,
	adjReturnsASML2015,
	adjReturnsASML2016,
	adjReturnsASML2017,
	adjReturnsASML2018,
	adjReturnsASML2019,
	adjReturnsASML2020,
	adjReturnsAVGO2009,
	adjReturnsAVGO2010,
	adjReturnsAVGO2011,
	adjReturnsAVGO2012,
	adjReturnsAVGO2013,
	adjReturnsAVGO2014,
	adjReturnsAVGO2015,
	adjReturnsAVGO2016,
	adjReturnsAVGO2017,
	adjReturnsAVGO2018,
	adjReturnsAVGO2019,
	adjReturnsAVGO2020,
	adjReturnsAVLR2018,
	adjReturnsAVLR2019,
	adjReturnsAVLR2020,
	adjReturnsBR2007,
	adjReturnsBR2008,
	adjReturnsBR2009,
	adjReturnsBR2010,
	adjReturnsBR2011,
	adjReturnsBR2012,
	adjReturnsBR2013,
	adjReturnsBR2014,
	adjReturnsBR2015,
	adjReturnsBR2016,
	adjReturnsBR2017,
	adjReturnsBR2018,
	adjReturnsBR2019,
	adjReturnsBR2020,
	adjReturnsCAJ2006,
	adjReturnsCAJ2007,
	adjReturnsCAJ2008,
	adjReturnsCAJ2009,
	adjReturnsCAJ2010,
	adjReturnsCAJ2011,
	adjReturnsCAJ2012,
	adjReturnsCAJ2013,
	adjReturnsCAJ2014,
	adjReturnsCAJ2015,
	adjReturnsCAJ2016,
	adjReturnsCAJ2017,
	adjReturnsCAJ2018,
	adjReturnsCAJ2019,
	adjReturnsCAJ2020,
	adjReturnsCCC2018,
	adjReturnsCCC2019,
	adjReturnsCCC2020,
	adjReturnsCDNS2006,
	adjReturnsCDNS2007,
	adjReturnsCDNS2008,
	adjReturnsCDNS2009,
	adjReturnsCDNS2010,
	adjReturnsCDNS2011,
	adjReturnsCDNS2012,
	adjReturnsCDNS2013,
	adjReturnsCDNS2014,
	adjReturnsCDNS2015,
	adjReturnsCDNS2016,
	adjReturnsCDNS2017,
	adjReturnsCDNS2018,
	adjReturnsCDNS2019,
	adjReturnsCDNS2020,
	adjReturnsCDW2013,
	adjReturnsCDW2014,
	adjReturnsCDW2015,
	adjReturnsCDW2016,
	adjReturnsCDW2017,
	adjReturnsCDW2018,
	adjReturnsCDW2019,
	adjReturnsCDW2020,
	adjReturnsCHKP2006,
	adjReturnsCHKP2007,
	adjReturnsCHKP2008,
	adjReturnsCHKP2009,
	adjReturnsCHKP2010,
	adjReturnsCHKP2011,
	adjReturnsCHKP2012,
	adjReturnsCHKP2013,
	adjReturnsCHKP2014,
	adjReturnsCHKP2015,
	adjReturnsCHKP2016,
	adjReturnsCHKP2017,
	adjReturnsCHKP2018,
	adjReturnsCHKP2019,
	adjReturnsCHKP2020,
	adjReturnsCOUP2016,
	adjReturnsCOUP2017,
	adjReturnsCOUP2018,
	adjReturnsCOUP2019,
	adjReturnsCOUP2020,
	adjReturnsCRM2006,
	adjReturnsCRM2007,
	adjReturnsCRM2008,
	adjReturnsCRM2009,
	adjReturnsCRM2010,
	adjReturnsCRM2011,
	adjReturnsCRM2012,
	adjReturnsCRM2013,
	adjReturnsCRM2014,
	adjReturnsCRM2015,
	adjReturnsCRM2016,
	adjReturnsCRM2017,
	adjReturnsCRM2018,
	adjReturnsCRM2019,
	adjReturnsCRM2020,
	adjReturnsCRWD2019,
	adjReturnsCRWD2020,
	adjReturnsCSCO2006,
	adjReturnsCSCO2007,
	adjReturnsCSCO2008,
	adjReturnsCSCO2009,
	adjReturnsCSCO2010,
	adjReturnsCSCO2011,
	adjReturnsCSCO2012,
	adjReturnsCSCO2013,
	adjReturnsCSCO2014,
	adjReturnsCSCO2015,
	adjReturnsCSCO2016,
	adjReturnsCSCO2017,
	adjReturnsCSCO2018,
	adjReturnsCSCO2019,
	adjReturnsCSCO2020,
	adjReturnsCTSH2006,
	adjReturnsCTSH2007,
	adjReturnsCTSH2008,
	adjReturnsCTSH2009,
	adjReturnsCTSH2010,
	adjReturnsCTSH2011,
	adjReturnsCTSH2012,
	adjReturnsCTSH2013,
	adjReturnsCTSH2014,
	adjReturnsCTSH2015,
	adjReturnsCTSH2016,
	adjReturnsCTSH2017,
	adjReturnsCTSH2018,
	adjReturnsCTSH2019,
	adjReturnsCTSH2020,
	adjReturnsCTXS2006,
	adjReturnsCTXS2007,
	adjReturnsCTXS2008,
	adjReturnsCTXS2009,
	adjReturnsCTXS2010,
	adjReturnsCTXS2011,
	adjReturnsCTXS2012,
	adjReturnsCTXS2013,
	adjReturnsCTXS2014,
	adjReturnsCTXS2015,
	adjReturnsCTXS2016,
	adjReturnsCTXS2017,
	adjReturnsCTXS2018,
	adjReturnsCTXS2019,
	adjReturnsCTXS2020,
	adjReturnsDDOG2019,
	adjReturnsDDOG2020,
	adjReturnsDELL2016,
	adjReturnsDELL2017,
	adjReturnsDELL2018,
	adjReturnsDELL2019,
	adjReturnsDELL2020,
	adjReturnsDOCU2018,
	adjReturnsDOCU2019,
	adjReturnsDOCU2020,
	adjReturnsEPAM2012,
	adjReturnsEPAM2013,
	adjReturnsEPAM2014,
	adjReturnsEPAM2015,
	adjReturnsEPAM2016,
	adjReturnsEPAM2017,
	adjReturnsEPAM2018,
	adjReturnsEPAM2019,
	adjReturnsEPAM2020,
	adjReturnsERIC2006,
	adjReturnsERIC2007,
	adjReturnsERIC2008,
	adjReturnsERIC2009,
	adjReturnsERIC2010,
	adjReturnsERIC2011,
	adjReturnsERIC2012,
	adjReturnsERIC2013,
	adjReturnsERIC2014,
	adjReturnsERIC2015,
	adjReturnsERIC2016,
	adjReturnsERIC2017,
	adjReturnsERIC2018,
	adjReturnsERIC2019,
	adjReturnsERIC2020,
	adjReturnsFIS2006,
	adjReturnsFIS2007,
	adjReturnsFIS2008,
	adjReturnsFIS2009,
	adjReturnsFIS2010,
	adjReturnsFIS2011,
	adjReturnsFIS2012,
	adjReturnsFIS2013,
	adjReturnsFIS2014,
	adjReturnsFIS2015,
	adjReturnsFIS2016,
	adjReturnsFIS2017,
	adjReturnsFIS2018,
	adjReturnsFIS2019,
	adjReturnsFIS2020,
	adjReturnsFISV2006,
	adjReturnsFISV2007,
	adjReturnsFISV2008,
	adjReturnsFISV2009,
	adjReturnsFISV2010,
	adjReturnsFISV2011,
	adjReturnsFISV2012,
	adjReturnsFISV2013,
	adjReturnsFISV2014,
	adjReturnsFISV2015,
	adjReturnsFISV2016,
	adjReturnsFISV2017,
	adjReturnsFISV2018,
	adjReturnsFISV2019,
	adjReturnsFISV2020,
	adjReturnsFLT2010,
	adjReturnsFLT2011,
	adjReturnsFLT2012,
	adjReturnsFLT2013,
	adjReturnsFLT2014,
	adjReturnsFLT2015,
	adjReturnsFLT2016,
	adjReturnsFLT2017,
	adjReturnsFLT2018,
	adjReturnsFLT2019,
	adjReturnsFLT2020,
	adjReturnsFTNT2009,
	adjReturnsFTNT2010,
	adjReturnsFTNT2011,
	adjReturnsFTNT2012,
	adjReturnsFTNT2013,
	adjReturnsFTNT2014,
	adjReturnsFTNT2015,
	adjReturnsFTNT2016,
	adjReturnsFTNT2017,
	adjReturnsFTNT2018,
	adjReturnsFTNT2019,
	adjReturnsFTNT2020,
	adjReturnsFTV2016,
	adjReturnsFTV2017,
	adjReturnsFTV2018,
	adjReturnsFTV2019,
	adjReturnsFTV2020,
	adjReturnsFTVPA2018,
	adjReturnsFTVPA2019,
	adjReturnsFTVPA2020,
	adjReturnsGIB2006,
	adjReturnsGIB2007,
	adjReturnsGIB2008,
	adjReturnsGIB2009,
	adjReturnsGIB2010,
	adjReturnsGIB2011,
	adjReturnsGIB2012,
	adjReturnsGIB2013,
	adjReturnsGIB2014,
	adjReturnsGIB2015,
	adjReturnsGIB2016,
	adjReturnsGIB2017,
	adjReturnsGIB2018,
	adjReturnsGIB2019,
	adjReturnsGIB2020,
	adjReturnsGLW2006,
	adjReturnsGLW2007,
	adjReturnsGLW2008,
	adjReturnsGLW2009,
	adjReturnsGLW2010,
	adjReturnsGLW2011,
	adjReturnsGLW2012,
	adjReturnsGLW2013,
	adjReturnsGLW2014,
	adjReturnsGLW2015,
	adjReturnsGLW2016,
	adjReturnsGLW2017,
	adjReturnsGLW2018,
	adjReturnsGLW2019,
	adjReturnsGLW2020,
	adjReturnsGRMN2006,
	adjReturnsGRMN2007,
	adjReturnsGRMN2008,
	adjReturnsGRMN2009,
	adjReturnsGRMN2010,
	adjReturnsGRMN2011,
	adjReturnsGRMN2012,
	adjReturnsGRMN2013,
	adjReturnsGRMN2014,
	adjReturnsGRMN2015,
	adjReturnsGRMN2016,
	adjReturnsGRMN2017,
	adjReturnsGRMN2018,
	adjReturnsGRMN2019,
	adjReturnsGRMN2020,
	adjReturnsHPQ2006,
	adjReturnsHPQ2007,
	adjReturnsHPQ2008,
	adjReturnsHPQ2009,
	adjReturnsHPQ2010,
	adjReturnsHPQ2011,
	adjReturnsHPQ2012,
	adjReturnsHPQ2013,
	adjReturnsHPQ2014,
	adjReturnsHPQ2015,
	adjReturnsHPQ2016,
	adjReturnsHPQ2017,
	adjReturnsHPQ2018,
	adjReturnsHPQ2019,
	adjReturnsHPQ2020,
	adjReturnsHUBS2014,
	adjReturnsHUBS2015,
	adjReturnsHUBS2016,
	adjReturnsHUBS2017,
	adjReturnsHUBS2018,
	adjReturnsHUBS2019,
	adjReturnsHUBS2020,
	adjReturnsIBM2006,
	adjReturnsIBM2007,
	adjReturnsIBM2008,
	adjReturnsIBM2009,
	adjReturnsIBM2010,
	adjReturnsIBM2011,
	adjReturnsIBM2012,
	adjReturnsIBM2013,
	adjReturnsIBM2014,
	adjReturnsIBM2015,
	adjReturnsIBM2016,
	adjReturnsIBM2017,
	adjReturnsIBM2018,
	adjReturnsIBM2019,
	adjReturnsIBM2020,
	adjReturnsINFY2006,
	adjReturnsINFY2007,
	adjReturnsINFY2008,
	adjReturnsINFY2009,
	adjReturnsINFY2010,
	adjReturnsINFY2011,
	adjReturnsINFY2012,
	adjReturnsINFY2013,
	adjReturnsINFY2014,
	adjReturnsINFY2015,
	adjReturnsINFY2016,
	adjReturnsINFY2017,
	adjReturnsINFY2018,
	adjReturnsINFY2019,
	adjReturnsINFY2020,
	adjReturnsINTC2006,
	adjReturnsINTC2007,
	adjReturnsINTC2008,
	adjReturnsINTC2009,
	adjReturnsINTC2010,
	adjReturnsINTC2011,
	adjReturnsINTC2012,
	adjReturnsINTC2013,
	adjReturnsINTC2014,
	adjReturnsINTC2015,
	adjReturnsINTC2016,
	adjReturnsINTC2017,
	adjReturnsINTC2018,
	adjReturnsINTC2019,
	adjReturnsINTC2020,
	adjReturnsINTU2006,
	adjReturnsINTU2007,
	adjReturnsINTU2008,
	adjReturnsINTU2009,
	adjReturnsINTU2010,
	adjReturnsINTU2011,
	adjReturnsINTU2012,
	adjReturnsINTU2013,
	adjReturnsINTU2014,
	adjReturnsINTU2015,
	adjReturnsINTU2016,
	adjReturnsINTU2017,
	adjReturnsINTU2018,
	adjReturnsINTU2019,
	adjReturnsINTU2020,
	adjReturnsKEYS2014,
	adjReturnsKEYS2015,
	adjReturnsKEYS2016,
	adjReturnsKEYS2017,
	adjReturnsKEYS2018,
	adjReturnsKEYS2019,
	adjReturnsKEYS2020,
	adjReturnsKLAC2006,
	adjReturnsKLAC2007,
	adjReturnsKLAC2008,
	adjReturnsKLAC2009,
	adjReturnsKLAC2010,
	adjReturnsKLAC2011,
	adjReturnsKLAC2012,
	adjReturnsKLAC2013,
	adjReturnsKLAC2014,
	adjReturnsKLAC2015,
	adjReturnsKLAC2016,
	adjReturnsKLAC2017,
	adjReturnsKLAC2018,
	adjReturnsKLAC2019,
	adjReturnsKLAC2020,
	adjReturnsLRCX2006,
	adjReturnsLRCX2007,
	adjReturnsLRCX2008,
	adjReturnsLRCX2009,
	adjReturnsLRCX2010,
	adjReturnsLRCX2011,
	adjReturnsLRCX2012,
	adjReturnsLRCX2013,
	adjReturnsLRCX2014,
	adjReturnsLRCX2015,
	adjReturnsLRCX2016,
	adjReturnsLRCX2017,
	adjReturnsLRCX2018,
	adjReturnsLRCX2019,
	adjReturnsLRCX2020,
	adjReturnsMCHP2006,
	adjReturnsMCHP2007,
	adjReturnsMCHP2008,
	adjReturnsMCHP2009,
	adjReturnsMCHP2010,
	adjReturnsMCHP2011,
	adjReturnsMCHP2012,
	adjReturnsMCHP2013,
	adjReturnsMCHP2014,
	adjReturnsMCHP2015,
	adjReturnsMCHP2016,
	adjReturnsMCHP2017,
	adjReturnsMCHP2018,
	adjReturnsMCHP2019,
	adjReturnsMCHP2020,
	adjReturnsMRVL2006,
	adjReturnsMRVL2007,
	adjReturnsMRVL2008,
	adjReturnsMRVL2009,
	adjReturnsMRVL2010,
	adjReturnsMRVL2011,
	adjReturnsMRVL2012,
	adjReturnsMRVL2013,
	adjReturnsMRVL2014,
	adjReturnsMRVL2015,
	adjReturnsMRVL2016,
	adjReturnsMRVL2017,
	adjReturnsMRVL2018,
	adjReturnsMRVL2019,
	adjReturnsMRVL2020,
	adjReturnsMSFT2006,
	adjReturnsMSFT2007,
	adjReturnsMSFT2008,
	adjReturnsMSFT2009,
	adjReturnsMSFT2010,
	adjReturnsMSFT2011,
	adjReturnsMSFT2012,
	adjReturnsMSFT2013,
	adjReturnsMSFT2014,
	adjReturnsMSFT2015,
	adjReturnsMSFT2016,
	adjReturnsMSFT2017,
	adjReturnsMSFT2018,
	adjReturnsMSFT2019,
	adjReturnsMSFT2020,
	adjReturnsMSI2006,
	adjReturnsMSI2007,
	adjReturnsMSI2008,
	adjReturnsMSI2009,
	adjReturnsMSI2010,
	adjReturnsMSI2011,
	adjReturnsMSI2012,
	adjReturnsMSI2013,
	adjReturnsMSI2014,
	adjReturnsMSI2015,
	adjReturnsMSI2016,
	adjReturnsMSI2017,
	adjReturnsMSI2018,
	adjReturnsMSI2019,
	adjReturnsMSI2020,
	adjReturnsMU2006,
	adjReturnsMU2007,
	adjReturnsMU2008,
	adjReturnsMU2009,
	adjReturnsMU2010,
	adjReturnsMU2011,
	adjReturnsMU2012,
	adjReturnsMU2013,
	adjReturnsMU2014,
	adjReturnsMU2015,
	adjReturnsMU2016,
	adjReturnsMU2017,
	adjReturnsMU2018,
	adjReturnsMU2019,
	adjReturnsMU2020,
	adjReturnsMXIM2006,
	adjReturnsMXIM2007,
	adjReturnsMXIM2008,
	adjReturnsMXIM2009,
	adjReturnsMXIM2010,
	adjReturnsMXIM2011,
	adjReturnsMXIM2012,
	adjReturnsMXIM2013,
	adjReturnsMXIM2014,
	adjReturnsMXIM2015,
	adjReturnsMXIM2016,
	adjReturnsMXIM2017,
	adjReturnsMXIM2018,
	adjReturnsMXIM2019,
	adjReturnsMXIM2020,
	adjReturnsNET2019,
	adjReturnsNET2020,
	adjReturnsNOW2012,
	adjReturnsNOW2013,
	adjReturnsNOW2014,
	adjReturnsNOW2015,
	adjReturnsNOW2016,
	adjReturnsNOW2017,
	adjReturnsNOW2018,
	adjReturnsNOW2019,
	adjReturnsNOW2020,
	adjReturnsNVDA2006,
	adjReturnsNVDA2007,
	adjReturnsNVDA2008,
	adjReturnsNVDA2009,
	adjReturnsNVDA2010,
	adjReturnsNVDA2011,
	adjReturnsNVDA2012,
	adjReturnsNVDA2013,
	adjReturnsNVDA2014,
	adjReturnsNVDA2015,
	adjReturnsNVDA2016,
	adjReturnsNVDA2017,
	adjReturnsNVDA2018,
	adjReturnsNVDA2019,
	adjReturnsNVDA2020,
	adjReturnsNXPI2010,
	adjReturnsNXPI2011,
	adjReturnsNXPI2012,
	adjReturnsNXPI2013,
	adjReturnsNXPI2014,
	adjReturnsNXPI2015,
	adjReturnsNXPI2016,
	adjReturnsNXPI2017,
	adjReturnsNXPI2018,
	adjReturnsNXPI2019,
	adjReturnsNXPI2020,
	adjReturnsOKTA2017,
	adjReturnsOKTA2018,
	adjReturnsOKTA2019,
	adjReturnsOKTA2020,
	adjReturnsORCL2006,
	adjReturnsORCL2007,
	adjReturnsORCL2008,
	adjReturnsORCL2009,
	adjReturnsORCL2010,
	adjReturnsORCL2011,
	adjReturnsORCL2012,
	adjReturnsORCL2013,
	adjReturnsORCL2014,
	adjReturnsORCL2015,
	adjReturnsORCL2016,
	adjReturnsORCL2017,
	adjReturnsORCL2018,
	adjReturnsORCL2019,
	adjReturnsORCL2020,
	adjReturnsPANW2012,
	adjReturnsPANW2013,
	adjReturnsPANW2014,
	adjReturnsPANW2015,
	adjReturnsPANW2016,
	adjReturnsPANW2017,
	adjReturnsPANW2018,
	adjReturnsPANW2019,
	adjReturnsPANW2020,
	adjReturnsPAYC2014,
	adjReturnsPAYC2015,
	adjReturnsPAYC2016,
	adjReturnsPAYC2017,
	adjReturnsPAYC2018,
	adjReturnsPAYC2019,
	adjReturnsPAYC2020,
	adjReturnsPLTR2020,
	adjReturnsQCOM2006,
	adjReturnsQCOM2007,
	adjReturnsQCOM2008,
	adjReturnsQCOM2009,
	adjReturnsQCOM2010,
	adjReturnsQCOM2011,
	adjReturnsQCOM2012,
	adjReturnsQCOM2013,
	adjReturnsQCOM2014,
	adjReturnsQCOM2015,
	adjReturnsQCOM2016,
	adjReturnsQCOM2017,
	adjReturnsQCOM2018,
	adjReturnsQCOM2019,
	adjReturnsQCOM2020,
	adjReturnsQRVO2015,
	adjReturnsQRVO2016,
	adjReturnsQRVO2017,
	adjReturnsQRVO2018,
	adjReturnsQRVO2019,
	adjReturnsQRVO2020,
	adjReturnsRNG2013,
	adjReturnsRNG2014,
	adjReturnsRNG2015,
	adjReturnsRNG2016,
	adjReturnsRNG2017,
	adjReturnsRNG2018,
	adjReturnsRNG2019,
	adjReturnsRNG2020,
	adjReturnsSAP2006,
	adjReturnsSAP2007,
	adjReturnsSAP2008,
	adjReturnsSAP2009,
	adjReturnsSAP2010,
	adjReturnsSAP2011,
	adjReturnsSAP2012,
	adjReturnsSAP2013,
	adjReturnsSAP2014,
	adjReturnsSAP2015,
	adjReturnsSAP2016,
	adjReturnsSAP2017,
	adjReturnsSAP2018,
	adjReturnsSAP2019,
	adjReturnsSAP2020,
	adjReturnsSHOP2015,
	adjReturnsSHOP2016,
	adjReturnsSHOP2017,
	adjReturnsSHOP2018,
	adjReturnsSHOP2019,
	adjReturnsSHOP2020,
	adjReturnsSNE2006,
	adjReturnsSNE2007,
	adjReturnsSNE2008,
	adjReturnsSNE2009,
	adjReturnsSNE2010,
	adjReturnsSNE2011,
	adjReturnsSNE2012,
	adjReturnsSNE2013,
	adjReturnsSNE2014,
	adjReturnsSNE2015,
	adjReturnsSNE2016,
	adjReturnsSNE2017,
	adjReturnsSNE2018,
	adjReturnsSNE2019,
	adjReturnsSNE2020,
	adjReturnsSNPS2006,
	adjReturnsSNPS2007,
	adjReturnsSNPS2008,
	adjReturnsSNPS2009,
	adjReturnsSNPS2010,
	adjReturnsSNPS2011,
	adjReturnsSNPS2012,
	adjReturnsSNPS2013,
	adjReturnsSNPS2014,
	adjReturnsSNPS2015,
	adjReturnsSNPS2016,
	adjReturnsSNPS2017,
	adjReturnsSNPS2018,
	adjReturnsSNPS2019,
	adjReturnsSNPS2020,
	adjReturnsSPLK2012,
	adjReturnsSPLK2013,
	adjReturnsSPLK2014,
	adjReturnsSPLK2015,
	adjReturnsSPLK2016,
	adjReturnsSPLK2017,
	adjReturnsSPLK2018,
	adjReturnsSPLK2019,
	adjReturnsSPLK2020,
	adjReturnsSQ2015,
	adjReturnsSQ2016,
	adjReturnsSQ2017,
	adjReturnsSQ2018,
	adjReturnsSQ2019,
	adjReturnsSQ2020,
	adjReturnsSSNC2010,
	adjReturnsSSNC2011,
	adjReturnsSSNC2012,
	adjReturnsSSNC2013,
	adjReturnsSSNC2014,
	adjReturnsSSNC2015,
	adjReturnsSSNC2016,
	adjReturnsSSNC2017,
	adjReturnsSSNC2018,
	adjReturnsSSNC2019,
	adjReturnsSSNC2020,
	adjReturnsSTM2006,
	adjReturnsSTM2007,
	adjReturnsSTM2008,
	adjReturnsSTM2009,
	adjReturnsSTM2010,
	adjReturnsSTM2011,
	adjReturnsSTM2012,
	adjReturnsSTM2013,
	adjReturnsSTM2014,
	adjReturnsSTM2015,
	adjReturnsSTM2016,
	adjReturnsSTM2017,
	adjReturnsSTM2018,
	adjReturnsSTM2019,
	adjReturnsSTM2020,
	adjReturnsSTX2006,
	adjReturnsSTX2007,
	adjReturnsSTX2008,
	adjReturnsSTX2009,
	adjReturnsSTX2010,
	adjReturnsSTX2011,
	adjReturnsSTX2012,
	adjReturnsSTX2013,
	adjReturnsSTX2014,
	adjReturnsSTX2015,
	adjReturnsSTX2016,
	adjReturnsSTX2017,
	adjReturnsSTX2018,
	adjReturnsSTX2019,
	adjReturnsSTX2020,
	adjReturnsSWKS2006,
	adjReturnsSWKS2007,
	adjReturnsSWKS2008,
	adjReturnsSWKS2009,
	adjReturnsSWKS2010,
	adjReturnsSWKS2011,
	adjReturnsSWKS2012,
	adjReturnsSWKS2013,
	adjReturnsSWKS2014,
	adjReturnsSWKS2015,
	adjReturnsSWKS2016,
	adjReturnsSWKS2017,
	adjReturnsSWKS2018,
	adjReturnsSWKS2019,
	adjReturnsSWKS2020,
	adjReturnsTEAM2015,
	adjReturnsTEAM2016,
	adjReturnsTEAM2017,
	adjReturnsTEAM2018,
	adjReturnsTEAM2019,
	adjReturnsTEAM2020,
	adjReturnsTEL2007,
	adjReturnsTEL2008,
	adjReturnsTEL2009,
	adjReturnsTEL2010,
	adjReturnsTEL2011,
	adjReturnsTEL2012,
	adjReturnsTEL2013,
	adjReturnsTEL2014,
	adjReturnsTEL2015,
	adjReturnsTEL2016,
	adjReturnsTEL2017,
	adjReturnsTEL2018,
	adjReturnsTEL2019,
	adjReturnsTEL2020,
	adjReturnsTER2006,
	adjReturnsTER2007,
	adjReturnsTER2008,
	adjReturnsTER2009,
	adjReturnsTER2010,
	adjReturnsTER2011,
	adjReturnsTER2012,
	adjReturnsTER2013,
	adjReturnsTER2014,
	adjReturnsTER2015,
	adjReturnsTER2016,
	adjReturnsTER2017,
	adjReturnsTER2018,
	adjReturnsTER2019,
	adjReturnsTER2020,
	adjReturnsTRMB2006,
	adjReturnsTRMB2007,
	adjReturnsTRMB2008,
	adjReturnsTRMB2009,
	adjReturnsTRMB2010,
	adjReturnsTRMB2011,
	adjReturnsTRMB2012,
	adjReturnsTRMB2013,
	adjReturnsTRMB2014,
	adjReturnsTRMB2015,
	adjReturnsTRMB2016,
	adjReturnsTRMB2017,
	adjReturnsTRMB2018,
	adjReturnsTRMB2019,
	adjReturnsTRMB2020,
	adjReturnsTSM2006,
	adjReturnsTSM2007,
	adjReturnsTSM2008,
	adjReturnsTSM2009,
	adjReturnsTSM2010,
	adjReturnsTSM2011,
	adjReturnsTSM2012,
	adjReturnsTSM2013,
	adjReturnsTSM2014,
	adjReturnsTSM2015,
	adjReturnsTSM2016,
	adjReturnsTSM2017,
	adjReturnsTSM2018,
	adjReturnsTSM2019,
	adjReturnsTSM2020,
	adjReturnsTXN2006,
	adjReturnsTXN2007,
	adjReturnsTXN2008,
	adjReturnsTXN2009,
	adjReturnsTXN2010,
	adjReturnsTXN2011,
	adjReturnsTXN2012,
	adjReturnsTXN2013,
	adjReturnsTXN2014,
	adjReturnsTXN2015,
	adjReturnsTXN2016,
	adjReturnsTXN2017,
	adjReturnsTXN2018,
	adjReturnsTXN2019,
	adjReturnsTXN2020,
	adjReturnsTYL2006,
	adjReturnsTYL2007,
	adjReturnsTYL2008,
	adjReturnsTYL2009,
	adjReturnsTYL2010,
	adjReturnsTYL2011,
	adjReturnsTYL2012,
	adjReturnsTYL2013,
	adjReturnsTYL2014,
	adjReturnsTYL2015,
	adjReturnsTYL2016,
	adjReturnsTYL2017,
	adjReturnsTYL2018,
	adjReturnsTYL2019,
	adjReturnsTYL2020,
	adjReturnsU2020,
	adjReturnsUBER2019,
	adjReturnsUBER2020,
	adjReturnsUI2011,
	adjReturnsUI2012,
	adjReturnsUI2013,
	adjReturnsUI2014,
	adjReturnsUI2015,
	adjReturnsUI2016,
	adjReturnsUI2017,
	adjReturnsUI2018,
	adjReturnsUI2019,
	adjReturnsUI2020,
	adjReturnsUMC2006,
	adjReturnsUMC2007,
	adjReturnsUMC2008,
	adjReturnsUMC2009,
	adjReturnsUMC2010,
	adjReturnsUMC2011,
	adjReturnsUMC2012,
	adjReturnsUMC2013,
	adjReturnsUMC2014,
	adjReturnsUMC2015,
	adjReturnsUMC2016,
	adjReturnsUMC2017,
	adjReturnsUMC2018,
	adjReturnsUMC2019,
	adjReturnsUMC2020,
	adjReturnsVMW2007,
	adjReturnsVMW2008,
	adjReturnsVMW2009,
	adjReturnsVMW2010,
	adjReturnsVMW2011,
	adjReturnsVMW2012,
	adjReturnsVMW2013,
	adjReturnsVMW2014,
	adjReturnsVMW2015,
	adjReturnsVMW2016,
	adjReturnsVMW2017,
	adjReturnsVMW2018,
	adjReturnsVMW2019,
	adjReturnsVMW2020,
	adjReturnsVRSN2006,
	adjReturnsVRSN2007,
	adjReturnsVRSN2008,
	adjReturnsVRSN2009,
	adjReturnsVRSN2010,
	adjReturnsVRSN2011,
	adjReturnsVRSN2012,
	adjReturnsVRSN2013,
	adjReturnsVRSN2014,
	adjReturnsVRSN2015,
	adjReturnsVRSN2016,
	adjReturnsVRSN2017,
	adjReturnsVRSN2018,
	adjReturnsVRSN2019,
	adjReturnsVRSN2020,
	adjReturnsWDAY2012,
	adjReturnsWDAY2013,
	adjReturnsWDAY2014,
	adjReturnsWDAY2015,
	adjReturnsWDAY2016,
	adjReturnsWDAY2017,
	adjReturnsWDAY2018,
	adjReturnsWDAY2019,
	adjReturnsWDAY2020,
	adjReturnsWIT2006,
	adjReturnsWIT2007,
	adjReturnsWIT2008,
	adjReturnsWIT2009,
	adjReturnsWIT2010,
	adjReturnsWIT2011,
	adjReturnsWIT2012,
	adjReturnsWIT2013,
	adjReturnsWIT2014,
	adjReturnsWIT2015,
	adjReturnsWIT2016,
	adjReturnsWIT2017,
	adjReturnsWIT2018,
	adjReturnsWIT2019,
	adjReturnsWIT2020,
	adjReturnsWORK2019,
	adjReturnsWORK2020,
	adjReturnsXLNX2006,
	adjReturnsXLNX2007,
	adjReturnsXLNX2008,
	adjReturnsXLNX2009,
	adjReturnsXLNX2010,
	adjReturnsXLNX2011,
	adjReturnsXLNX2012,
	adjReturnsXLNX2013,
	adjReturnsXLNX2014,
	adjReturnsXLNX2015,
	adjReturnsXLNX2016,
	adjReturnsXLNX2017,
	adjReturnsXLNX2018,
	adjReturnsXLNX2019,
	adjReturnsXLNX2020,
	adjReturnsZBRA2006,
	adjReturnsZBRA2007,
	adjReturnsZBRA2008,
	adjReturnsZBRA2009,
	adjReturnsZBRA2010,
	adjReturnsZBRA2011,
	adjReturnsZBRA2012,
	adjReturnsZBRA2013,
	adjReturnsZBRA2014,
	adjReturnsZBRA2015,
	adjReturnsZBRA2016,
	adjReturnsZBRA2017,
	adjReturnsZBRA2018,
	adjReturnsZBRA2019,
	adjReturnsZBRA2020,
	adjReturnsZEN2014,
	adjReturnsZEN2015,
	adjReturnsZEN2016,
	adjReturnsZEN2017,
	adjReturnsZEN2018,
	adjReturnsZEN2019,
	adjReturnsZEN2020,
	adjReturnsZI2020,
	adjReturnsZS2018,
	adjReturnsZS2019,
	adjReturnsZS2020
  } from 'variables/financialCharts/adjClose';
import { lineChartDataTotalSpent, lineChartOptionsTotalSpent, lineChartOptionsYearRev, lineChartOptionsMonthRev} from 'variables/financialcharts';

interface currentTick {
	tick: string;
}
export default function LineStockPrice({tick}: currentTick) {


	// Chakra Color Mode

	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const textColorSecondary = useColorModeValue('secondaryGray.600', 'white');
	const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
	const iconColor = useColorModeValue('brand.500', 'white');
	const bgButton = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
	const bgHover = useColorModeValue({ bg: 'secondaryGray.400' }, { bg: 'whiteAlpha.50' });
	const bgFocus = useColorModeValue({ bg: 'secondaryGray.300' }, { bg: 'whiteAlpha.100' });

	const [ mounted, setMounted ] = useState(false);

	const chart : string = 'adjReturns' + tick + '2020';

	useEffect(() => {
		const timeout = setTimeout(() => {
			setMounted(true);
		}, 3000);
		return () => {
			clearTimeout(timeout);
		};
	}, []);

	return (
		<Card justifyContent='center' alignItems='center' flexDirection='column' w='100%' mb='0px'>
				<Text fontSize='50px'>Stock Price</Text>
				<Text fontSize='50px'>{chart}</Text>
				<Box minH='260px' minW='75%' mt='auto'>
					<LineChart chartData={adjReturnsAAPL2006} chartOptions={lineChartOptionsYearRev} />
				</Box>
		</Card>
	);
}
