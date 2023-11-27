// Chakra imports
import { Box, Button, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import LineChart from 'components/charts/LineChart';
import { useEffect, useState } from 'react';
// Assets
import { 
	mReturnsAAPL2006,
	mReturnsAAPL2007,
	mReturnsAAPL2008,
	mReturnsAAPL2009,
	mReturnsAAPL2010,
	mReturnsAAPL2011,
	mReturnsAAPL2012,
	mReturnsAAPL2013,
	mReturnsAAPL2014,
	mReturnsAAPL2015,
	mReturnsAAPL2016,
	mReturnsAAPL2017,
	mReturnsAAPL2018,
	mReturnsAAPL2019,
	mReturnsAAPL2020,
	mReturnsACN2006,
	mReturnsACN2007,
	mReturnsACN2008,
	mReturnsACN2009,
	mReturnsACN2010,
	mReturnsACN2011,
	mReturnsACN2012,
	mReturnsACN2013,
	mReturnsACN2014,
	mReturnsACN2015,
	mReturnsACN2016,
	mReturnsACN2017,
	mReturnsACN2018,
	mReturnsACN2019,
	mReturnsACN2020,
	mReturnsADBE2006,
	mReturnsADBE2007,
	mReturnsADBE2008,
	mReturnsADBE2009,
	mReturnsADBE2010,
	mReturnsADBE2011,
	mReturnsADBE2012,
	mReturnsADBE2013,
	mReturnsADBE2014,
	mReturnsADBE2015,
	mReturnsADBE2016,
	mReturnsADBE2017,
	mReturnsADBE2018,
	mReturnsADBE2019,
	mReturnsADBE2020,
	mReturnsADI2006,
	mReturnsADI2007,
	mReturnsADI2008,
	mReturnsADI2009,
	mReturnsADI2010,
	mReturnsADI2011,
	mReturnsADI2012,
	mReturnsADI2013,
	mReturnsADI2014,
	mReturnsADI2015,
	mReturnsADI2016,
	mReturnsADI2017,
	mReturnsADI2018,
	mReturnsADI2019,
	mReturnsADI2020,
	mReturnsADSK2006,
	mReturnsADSK2007,
	mReturnsADSK2008,
	mReturnsADSK2009,
	mReturnsADSK2010,
	mReturnsADSK2011,
	mReturnsADSK2012,
	mReturnsADSK2013,
	mReturnsADSK2014,
	mReturnsADSK2015,
	mReturnsADSK2016,
	mReturnsADSK2017,
	mReturnsADSK2018,
	mReturnsADSK2019,
	mReturnsADSK2020,
	mReturnsAKAM2006,
	mReturnsAKAM2007,
	mReturnsAKAM2008,
	mReturnsAKAM2009,
	mReturnsAKAM2010,
	mReturnsAKAM2011,
	mReturnsAKAM2012,
	mReturnsAKAM2013,
	mReturnsAKAM2014,
	mReturnsAKAM2015,
	mReturnsAKAM2016,
	mReturnsAKAM2017,
	mReturnsAKAM2018,
	mReturnsAKAM2019,
	mReturnsAKAM2020,
	mReturnsAMAT2006,
	mReturnsAMAT2007,
	mReturnsAMAT2008,
	mReturnsAMAT2009,
	mReturnsAMAT2010,
	mReturnsAMAT2011,
	mReturnsAMAT2012,
	mReturnsAMAT2013,
	mReturnsAMAT2014,
	mReturnsAMAT2015,
	mReturnsAMAT2016,
	mReturnsAMAT2017,
	mReturnsAMAT2018,
	mReturnsAMAT2019,
	mReturnsAMAT2020,
	mReturnsAMD2006,
	mReturnsAMD2007,
	mReturnsAMD2008,
	mReturnsAMD2009,
	mReturnsAMD2010,
	mReturnsAMD2011,
	mReturnsAMD2012,
	mReturnsAMD2013,
	mReturnsAMD2014,
	mReturnsAMD2015,
	mReturnsAMD2016,
	mReturnsAMD2017,
	mReturnsAMD2018,
	mReturnsAMD2019,
	mReturnsAMD2020,
	mReturnsANET2014,
	mReturnsANET2015,
	mReturnsANET2016,
	mReturnsANET2017,
	mReturnsANET2018,
	mReturnsANET2019,
	mReturnsANET2020,
	mReturnsANSS2006,
	mReturnsANSS2007,
	mReturnsANSS2008,
	mReturnsANSS2009,
	mReturnsANSS2010,
	mReturnsANSS2011,
	mReturnsANSS2012,
	mReturnsANSS2013,
	mReturnsANSS2014,
	mReturnsANSS2015,
	mReturnsANSS2016,
	mReturnsANSS2017,
	mReturnsANSS2018,
	mReturnsANSS2019,
	mReturnsANSS2020,
	mReturnsAPH2006,
	mReturnsAPH2007,
	mReturnsAPH2008,
	mReturnsAPH2009,
	mReturnsAPH2010,
	mReturnsAPH2011,
	mReturnsAPH2012,
	mReturnsAPH2013,
	mReturnsAPH2014,
	mReturnsAPH2015,
	mReturnsAPH2016,
	mReturnsAPH2017,
	mReturnsAPH2018,
	mReturnsAPH2019,
	mReturnsAPH2020,
	mReturnsASML2006,
	mReturnsASML2007,
	mReturnsASML2008,
	mReturnsASML2009,
	mReturnsASML2010,
	mReturnsASML2011,
	mReturnsASML2012,
	mReturnsASML2013,
	mReturnsASML2014,
	mReturnsASML2015,
	mReturnsASML2016,
	mReturnsASML2017,
	mReturnsASML2018,
	mReturnsASML2019,
	mReturnsASML2020,
	mReturnsAVGO2009,
	mReturnsAVGO2010,
	mReturnsAVGO2011,
	mReturnsAVGO2012,
	mReturnsAVGO2013,
	mReturnsAVGO2014,
	mReturnsAVGO2015,
	mReturnsAVGO2016,
	mReturnsAVGO2017,
	mReturnsAVGO2018,
	mReturnsAVGO2019,
	mReturnsAVGO2020,
	mReturnsAVLR2018,
	mReturnsAVLR2019,
	mReturnsAVLR2020,
	mReturnsBR2007,
	mReturnsBR2008,
	mReturnsBR2009,
	mReturnsBR2010,
	mReturnsBR2011,
	mReturnsBR2012,
	mReturnsBR2013,
	mReturnsBR2014,
	mReturnsBR2015,
	mReturnsBR2016,
	mReturnsBR2017,
	mReturnsBR2018,
	mReturnsBR2019,
	mReturnsBR2020,
	mReturnsCAJ2006,
	mReturnsCAJ2007,
	mReturnsCAJ2008,
	mReturnsCAJ2009,
	mReturnsCAJ2010,
	mReturnsCAJ2011,
	mReturnsCAJ2012,
	mReturnsCAJ2013,
	mReturnsCAJ2014,
	mReturnsCAJ2015,
	mReturnsCAJ2016,
	mReturnsCAJ2017,
	mReturnsCAJ2018,
	mReturnsCAJ2019,
	mReturnsCAJ2020,
	mReturnsCCC2018,
	mReturnsCCC2019,
	mReturnsCCC2020,
	mReturnsCDNS2006,
	mReturnsCDNS2007,
	mReturnsCDNS2008,
	mReturnsCDNS2009,
	mReturnsCDNS2010,
	mReturnsCDNS2011,
	mReturnsCDNS2012,
	mReturnsCDNS2013,
	mReturnsCDNS2014,
	mReturnsCDNS2015,
	mReturnsCDNS2016,
	mReturnsCDNS2017,
	mReturnsCDNS2018,
	mReturnsCDNS2019,
	mReturnsCDNS2020,
	mReturnsCDW2013,
	mReturnsCDW2014,
	mReturnsCDW2015,
	mReturnsCDW2016,
	mReturnsCDW2017,
	mReturnsCDW2018,
	mReturnsCDW2019,
	mReturnsCDW2020,
	mReturnsCHKP2006,
	mReturnsCHKP2007,
	mReturnsCHKP2008,
	mReturnsCHKP2009,
	mReturnsCHKP2010,
	mReturnsCHKP2011,
	mReturnsCHKP2012,
	mReturnsCHKP2013,
	mReturnsCHKP2014,
	mReturnsCHKP2015,
	mReturnsCHKP2016,
	mReturnsCHKP2017,
	mReturnsCHKP2018,
	mReturnsCHKP2019,
	mReturnsCHKP2020,
	mReturnsCOUP2016,
	mReturnsCOUP2017,
	mReturnsCOUP2018,
	mReturnsCOUP2019,
	mReturnsCOUP2020,
	mReturnsCRM2006,
	mReturnsCRM2007,
	mReturnsCRM2008,
	mReturnsCRM2009,
	mReturnsCRM2010,
	mReturnsCRM2011,
	mReturnsCRM2012,
	mReturnsCRM2013,
	mReturnsCRM2014,
	mReturnsCRM2015,
	mReturnsCRM2016,
	mReturnsCRM2017,
	mReturnsCRM2018,
	mReturnsCRM2019,
	mReturnsCRM2020,
	mReturnsCRWD2019,
	mReturnsCRWD2020,
	mReturnsCSCO2006,
	mReturnsCSCO2007,
	mReturnsCSCO2008,
	mReturnsCSCO2009,
	mReturnsCSCO2010,
	mReturnsCSCO2011,
	mReturnsCSCO2012,
	mReturnsCSCO2013,
	mReturnsCSCO2014,
	mReturnsCSCO2015,
	mReturnsCSCO2016,
	mReturnsCSCO2017,
	mReturnsCSCO2018,
	mReturnsCSCO2019,
	mReturnsCSCO2020,
	mReturnsCTSH2006,
	mReturnsCTSH2007,
	mReturnsCTSH2008,
	mReturnsCTSH2009,
	mReturnsCTSH2010,
	mReturnsCTSH2011,
	mReturnsCTSH2012,
	mReturnsCTSH2013,
	mReturnsCTSH2014,
	mReturnsCTSH2015,
	mReturnsCTSH2016,
	mReturnsCTSH2017,
	mReturnsCTSH2018,
	mReturnsCTSH2019,
	mReturnsCTSH2020,
	mReturnsCTXS2006,
	mReturnsCTXS2007,
	mReturnsCTXS2008,
	mReturnsCTXS2009,
	mReturnsCTXS2010,
	mReturnsCTXS2011,
	mReturnsCTXS2012,
	mReturnsCTXS2013,
	mReturnsCTXS2014,
	mReturnsCTXS2015,
	mReturnsCTXS2016,
	mReturnsCTXS2017,
	mReturnsCTXS2018,
	mReturnsCTXS2019,
	mReturnsCTXS2020,
	mReturnsDDOG2019,
	mReturnsDDOG2020,
	mReturnsDELL2016,
	mReturnsDELL2017,
	mReturnsDELL2018,
	mReturnsDELL2019,
	mReturnsDELL2020,
	mReturnsDOCU2018,
	mReturnsDOCU2019,
	mReturnsDOCU2020,
	mReturnsEPAM2012,
	mReturnsEPAM2013,
	mReturnsEPAM2014,
	mReturnsEPAM2015,
	mReturnsEPAM2016,
	mReturnsEPAM2017,
	mReturnsEPAM2018,
	mReturnsEPAM2019,
	mReturnsEPAM2020,
	mReturnsERIC2006,
	mReturnsERIC2007,
	mReturnsERIC2008,
	mReturnsERIC2009,
	mReturnsERIC2010,
	mReturnsERIC2011,
	mReturnsERIC2012,
	mReturnsERIC2013,
	mReturnsERIC2014,
	mReturnsERIC2015,
	mReturnsERIC2016,
	mReturnsERIC2017,
	mReturnsERIC2018,
	mReturnsERIC2019,
	mReturnsERIC2020,
	mReturnsFIS2006,
	mReturnsFIS2007,
	mReturnsFIS2008,
	mReturnsFIS2009,
	mReturnsFIS2010,
	mReturnsFIS2011,
	mReturnsFIS2012,
	mReturnsFIS2013,
	mReturnsFIS2014,
	mReturnsFIS2015,
	mReturnsFIS2016,
	mReturnsFIS2017,
	mReturnsFIS2018,
	mReturnsFIS2019,
	mReturnsFIS2020,
	mReturnsFISV2006,
	mReturnsFISV2007,
	mReturnsFISV2008,
	mReturnsFISV2009,
	mReturnsFISV2010,
	mReturnsFISV2011,
	mReturnsFISV2012,
	mReturnsFISV2013,
	mReturnsFISV2014,
	mReturnsFISV2015,
	mReturnsFISV2016,
	mReturnsFISV2017,
	mReturnsFISV2018,
	mReturnsFISV2019,
	mReturnsFISV2020,
	mReturnsFLT2011,
	mReturnsFLT2012,
	mReturnsFLT2013,
	mReturnsFLT2014,
	mReturnsFLT2015,
	mReturnsFLT2016,
	mReturnsFLT2017,
	mReturnsFLT2018,
	mReturnsFLT2019,
	mReturnsFLT2020,
	mReturnsFTNT2009,
	mReturnsFTNT2010,
	mReturnsFTNT2011,
	mReturnsFTNT2012,
	mReturnsFTNT2013,
	mReturnsFTNT2014,
	mReturnsFTNT2015,
	mReturnsFTNT2016,
	mReturnsFTNT2017,
	mReturnsFTNT2018,
	mReturnsFTNT2019,
	mReturnsFTNT2020,
	mReturnsFTV2016,
	mReturnsFTV2017,
	mReturnsFTV2018,
	mReturnsFTV2019,
	mReturnsFTV2020,
	mReturnsFTVPA2018,
	mReturnsFTVPA2019,
	mReturnsFTVPA2020,
	mReturnsGIB2006,
	mReturnsGIB2007,
	mReturnsGIB2008,
	mReturnsGIB2009,
	mReturnsGIB2010,
	mReturnsGIB2011,
	mReturnsGIB2012,
	mReturnsGIB2013,
	mReturnsGIB2014,
	mReturnsGIB2015,
	mReturnsGIB2016,
	mReturnsGIB2017,
	mReturnsGIB2018,
	mReturnsGIB2019,
	mReturnsGIB2020,
	mReturnsGLW2006,
	mReturnsGLW2007,
	mReturnsGLW2008,
	mReturnsGLW2009,
	mReturnsGLW2010,
	mReturnsGLW2011,
	mReturnsGLW2012,
	mReturnsGLW2013,
	mReturnsGLW2014,
	mReturnsGLW2015,
	mReturnsGLW2016,
	mReturnsGLW2017,
	mReturnsGLW2018,
	mReturnsGLW2019,
	mReturnsGLW2020,
	mReturnsGRMN2006,
	mReturnsGRMN2007,
	mReturnsGRMN2008,
	mReturnsGRMN2009,
	mReturnsGRMN2010,
	mReturnsGRMN2011,
	mReturnsGRMN2012,
	mReturnsGRMN2013,
	mReturnsGRMN2014,
	mReturnsGRMN2015,
	mReturnsGRMN2016,
	mReturnsGRMN2017,
	mReturnsGRMN2018,
	mReturnsGRMN2019,
	mReturnsGRMN2020,
	mReturnsHPQ2006,
	mReturnsHPQ2007,
	mReturnsHPQ2008,
	mReturnsHPQ2009,
	mReturnsHPQ2010,
	mReturnsHPQ2011,
	mReturnsHPQ2012,
	mReturnsHPQ2013,
	mReturnsHPQ2014,
	mReturnsHPQ2015,
	mReturnsHPQ2016,
	mReturnsHPQ2017,
	mReturnsHPQ2018,
	mReturnsHPQ2019,
	mReturnsHPQ2020,
	mReturnsHUBS2014,
	mReturnsHUBS2015,
	mReturnsHUBS2016,
	mReturnsHUBS2017,
	mReturnsHUBS2018,
	mReturnsHUBS2019,
	mReturnsHUBS2020,
	mReturnsIBM2006,
	mReturnsIBM2007,
	mReturnsIBM2008,
	mReturnsIBM2009,
	mReturnsIBM2010,
	mReturnsIBM2011,
	mReturnsIBM2012,
	mReturnsIBM2013,
	mReturnsIBM2014,
	mReturnsIBM2015,
	mReturnsIBM2016,
	mReturnsIBM2017,
	mReturnsIBM2018,
	mReturnsIBM2019,
	mReturnsIBM2020,
	mReturnsINFY2006,
	mReturnsINFY2007,
	mReturnsINFY2008,
	mReturnsINFY2009,
	mReturnsINFY2010,
	mReturnsINFY2011,
	mReturnsINFY2012,
	mReturnsINFY2013,
	mReturnsINFY2014,
	mReturnsINFY2015,
	mReturnsINFY2016,
	mReturnsINFY2017,
	mReturnsINFY2018,
	mReturnsINFY2019,
	mReturnsINFY2020,
	mReturnsINTC2006,
	mReturnsINTC2007,
	mReturnsINTC2008,
	mReturnsINTC2009,
	mReturnsINTC2010,
	mReturnsINTC2011,
	mReturnsINTC2012,
	mReturnsINTC2013,
	mReturnsINTC2014,
	mReturnsINTC2015,
	mReturnsINTC2016,
	mReturnsINTC2017,
	mReturnsINTC2018,
	mReturnsINTC2019,
	mReturnsINTC2020,
	mReturnsINTU2006,
	mReturnsINTU2007,
	mReturnsINTU2008,
	mReturnsINTU2009,
	mReturnsINTU2010,
	mReturnsINTU2011,
	mReturnsINTU2012,
	mReturnsINTU2013,
	mReturnsINTU2014,
	mReturnsINTU2015,
	mReturnsINTU2016,
	mReturnsINTU2017,
	mReturnsINTU2018,
	mReturnsINTU2019,
	mReturnsINTU2020,
	mReturnsKEYS2014,
	mReturnsKEYS2015,
	mReturnsKEYS2016,
	mReturnsKEYS2017,
	mReturnsKEYS2018,
	mReturnsKEYS2019,
	mReturnsKEYS2020,
	mReturnsKLAC2006,
	mReturnsKLAC2007,
	mReturnsKLAC2008,
	mReturnsKLAC2009,
	mReturnsKLAC2010,
	mReturnsKLAC2011,
	mReturnsKLAC2012,
	mReturnsKLAC2013,
	mReturnsKLAC2014,
	mReturnsKLAC2015,
	mReturnsKLAC2016,
	mReturnsKLAC2017,
	mReturnsKLAC2018,
	mReturnsKLAC2019,
	mReturnsKLAC2020,
	mReturnsLRCX2006,
	mReturnsLRCX2007,
	mReturnsLRCX2008,
	mReturnsLRCX2009,
	mReturnsLRCX2010,
	mReturnsLRCX2011,
	mReturnsLRCX2012,
	mReturnsLRCX2013,
	mReturnsLRCX2014,
	mReturnsLRCX2015,
	mReturnsLRCX2016,
	mReturnsLRCX2017,
	mReturnsLRCX2018,
	mReturnsLRCX2019,
	mReturnsLRCX2020,
	mReturnsMCHP2006,
	mReturnsMCHP2007,
	mReturnsMCHP2008,
	mReturnsMCHP2009,
	mReturnsMCHP2010,
	mReturnsMCHP2011,
	mReturnsMCHP2012,
	mReturnsMCHP2013,
	mReturnsMCHP2014,
	mReturnsMCHP2015,
	mReturnsMCHP2016,
	mReturnsMCHP2017,
	mReturnsMCHP2018,
	mReturnsMCHP2019,
	mReturnsMCHP2020,
	mReturnsMRVL2006,
	mReturnsMRVL2007,
	mReturnsMRVL2008,
	mReturnsMRVL2009,
	mReturnsMRVL2010,
	mReturnsMRVL2011,
	mReturnsMRVL2012,
	mReturnsMRVL2013,
	mReturnsMRVL2014,
	mReturnsMRVL2015,
	mReturnsMRVL2016,
	mReturnsMRVL2017,
	mReturnsMRVL2018,
	mReturnsMRVL2019,
	mReturnsMRVL2020,
	mReturnsMSFT2006,
	mReturnsMSFT2007,
	mReturnsMSFT2008,
	mReturnsMSFT2009,
	mReturnsMSFT2010,
	mReturnsMSFT2011,
	mReturnsMSFT2012,
	mReturnsMSFT2013,
	mReturnsMSFT2014,
	mReturnsMSFT2015,
	mReturnsMSFT2016,
	mReturnsMSFT2017,
	mReturnsMSFT2018,
	mReturnsMSFT2019,
	mReturnsMSFT2020,
	mReturnsMSI2006,
	mReturnsMSI2007,
	mReturnsMSI2008,
	mReturnsMSI2009,
	mReturnsMSI2010,
	mReturnsMSI2011,
	mReturnsMSI2012,
	mReturnsMSI2013,
	mReturnsMSI2014,
	mReturnsMSI2015,
	mReturnsMSI2016,
	mReturnsMSI2017,
	mReturnsMSI2018,
	mReturnsMSI2019,
	mReturnsMSI2020,
	mReturnsMU2006,
	mReturnsMU2007,
	mReturnsMU2008,
	mReturnsMU2009,
	mReturnsMU2010,
	mReturnsMU2011,
	mReturnsMU2012,
	mReturnsMU2013,
	mReturnsMU2014,
	mReturnsMU2015,
	mReturnsMU2016,
	mReturnsMU2017,
	mReturnsMU2018,
	mReturnsMU2019,
	mReturnsMU2020,
	mReturnsMXIM2006,
	mReturnsMXIM2007,
	mReturnsMXIM2008,
	mReturnsMXIM2009,
	mReturnsMXIM2010,
	mReturnsMXIM2011,
	mReturnsMXIM2012,
	mReturnsMXIM2013,
	mReturnsMXIM2014,
	mReturnsMXIM2015,
	mReturnsMXIM2016,
	mReturnsMXIM2017,
	mReturnsMXIM2018,
	mReturnsMXIM2019,
	mReturnsMXIM2020,
	mReturnsNET2019,
	mReturnsNET2020,
	mReturnsNOW2012,
	mReturnsNOW2013,
	mReturnsNOW2014,
	mReturnsNOW2015,
	mReturnsNOW2016,
	mReturnsNOW2017,
	mReturnsNOW2018,
	mReturnsNOW2019,
	mReturnsNOW2020,
	mReturnsNVDA2006,
	mReturnsNVDA2007,
	mReturnsNVDA2008,
	mReturnsNVDA2009,
	mReturnsNVDA2010,
	mReturnsNVDA2011,
	mReturnsNVDA2012,
	mReturnsNVDA2013,
	mReturnsNVDA2014,
	mReturnsNVDA2015,
	mReturnsNVDA2016,
	mReturnsNVDA2017,
	mReturnsNVDA2018,
	mReturnsNVDA2019,
	mReturnsNVDA2020,
	mReturnsNXPI2010,
	mReturnsNXPI2011,
	mReturnsNXPI2012,
	mReturnsNXPI2013,
	mReturnsNXPI2014,
	mReturnsNXPI2015,
	mReturnsNXPI2016,
	mReturnsNXPI2017,
	mReturnsNXPI2018,
	mReturnsNXPI2019,
	mReturnsNXPI2020,
	mReturnsOKTA2017,
	mReturnsOKTA2018,
	mReturnsOKTA2019,
	mReturnsOKTA2020,
	mReturnsORCL2006,
	mReturnsORCL2007,
	mReturnsORCL2008,
	mReturnsORCL2009,
	mReturnsORCL2010,
	mReturnsORCL2011,
	mReturnsORCL2012,
	mReturnsORCL2013,
	mReturnsORCL2014,
	mReturnsORCL2015,
	mReturnsORCL2016,
	mReturnsORCL2017,
	mReturnsORCL2018,
	mReturnsORCL2019,
	mReturnsORCL2020,
	mReturnsPANW2012,
	mReturnsPANW2013,
	mReturnsPANW2014,
	mReturnsPANW2015,
	mReturnsPANW2016,
	mReturnsPANW2017,
	mReturnsPANW2018,
	mReturnsPANW2019,
	mReturnsPANW2020,
	mReturnsPAYC2014,
	mReturnsPAYC2015,
	mReturnsPAYC2016,
	mReturnsPAYC2017,
	mReturnsPAYC2018,
	mReturnsPAYC2019,
	mReturnsPAYC2020,
	mReturnsPLTR2020,
	mReturnsQCOM2006,
	mReturnsQCOM2007,
	mReturnsQCOM2008,
	mReturnsQCOM2009,
	mReturnsQCOM2010,
	mReturnsQCOM2011,
	mReturnsQCOM2012,
	mReturnsQCOM2013,
	mReturnsQCOM2014,
	mReturnsQCOM2015,
	mReturnsQCOM2016,
	mReturnsQCOM2017,
	mReturnsQCOM2018,
	mReturnsQCOM2019,
	mReturnsQCOM2020,
	mReturnsQRVO2015,
	mReturnsQRVO2016,
	mReturnsQRVO2017,
	mReturnsQRVO2018,
	mReturnsQRVO2019,
	mReturnsQRVO2020,
	mReturnsRNG2013,
	mReturnsRNG2014,
	mReturnsRNG2015,
	mReturnsRNG2016,
	mReturnsRNG2017,
	mReturnsRNG2018,
	mReturnsRNG2019,
	mReturnsRNG2020,
	mReturnsSAP2006,
	mReturnsSAP2007,
	mReturnsSAP2008,
	mReturnsSAP2009,
	mReturnsSAP2010,
	mReturnsSAP2011,
	mReturnsSAP2012,
	mReturnsSAP2013,
	mReturnsSAP2014,
	mReturnsSAP2015,
	mReturnsSAP2016,
	mReturnsSAP2017,
	mReturnsSAP2018,
	mReturnsSAP2019,
	mReturnsSAP2020,
	mReturnsSHOP2015,
	mReturnsSHOP2016,
	mReturnsSHOP2017,
	mReturnsSHOP2018,
	mReturnsSHOP2019,
	mReturnsSHOP2020,
	mReturnsSNE2006,
	mReturnsSNE2007,
	mReturnsSNE2008,
	mReturnsSNE2009,
	mReturnsSNE2010,
	mReturnsSNE2011,
	mReturnsSNE2012,
	mReturnsSNE2013,
	mReturnsSNE2014,
	mReturnsSNE2015,
	mReturnsSNE2016,
	mReturnsSNE2017,
	mReturnsSNE2018,
	mReturnsSNE2019,
	mReturnsSNE2020,
	mReturnsSNPS2006,
	mReturnsSNPS2007,
	mReturnsSNPS2008,
	mReturnsSNPS2009,
	mReturnsSNPS2010,
	mReturnsSNPS2011,
	mReturnsSNPS2012,
	mReturnsSNPS2013,
	mReturnsSNPS2014,
	mReturnsSNPS2015,
	mReturnsSNPS2016,
	mReturnsSNPS2017,
	mReturnsSNPS2018,
	mReturnsSNPS2019,
	mReturnsSNPS2020,
	mReturnsSPLK2012,
	mReturnsSPLK2013,
	mReturnsSPLK2014,
	mReturnsSPLK2015,
	mReturnsSPLK2016,
	mReturnsSPLK2017,
	mReturnsSPLK2018,
	mReturnsSPLK2019,
	mReturnsSPLK2020,
	mReturnsSQ2015,
	mReturnsSQ2016,
	mReturnsSQ2017,
	mReturnsSQ2018,
	mReturnsSQ2019,
	mReturnsSQ2020,
	mReturnsSSNC2010,
	mReturnsSSNC2011,
	mReturnsSSNC2012,
	mReturnsSSNC2013,
	mReturnsSSNC2014,
	mReturnsSSNC2015,
	mReturnsSSNC2016,
	mReturnsSSNC2017,
	mReturnsSSNC2018,
	mReturnsSSNC2019,
	mReturnsSSNC2020,
	mReturnsSTM2006,
	mReturnsSTM2007,
	mReturnsSTM2008,
	mReturnsSTM2009,
	mReturnsSTM2010,
	mReturnsSTM2011,
	mReturnsSTM2012,
	mReturnsSTM2013,
	mReturnsSTM2014,
	mReturnsSTM2015,
	mReturnsSTM2016,
	mReturnsSTM2017,
	mReturnsSTM2018,
	mReturnsSTM2019,
	mReturnsSTM2020,
	mReturnsSTX2006,
	mReturnsSTX2007,
	mReturnsSTX2008,
	mReturnsSTX2009,
	mReturnsSTX2010,
	mReturnsSTX2011,
	mReturnsSTX2012,
	mReturnsSTX2013,
	mReturnsSTX2014,
	mReturnsSTX2015,
	mReturnsSTX2016,
	mReturnsSTX2017,
	mReturnsSTX2018,
	mReturnsSTX2019,
	mReturnsSTX2020,
	mReturnsSWKS2006,
	mReturnsSWKS2007,
	mReturnsSWKS2008,
	mReturnsSWKS2009,
	mReturnsSWKS2010,
	mReturnsSWKS2011,
	mReturnsSWKS2012,
	mReturnsSWKS2013,
	mReturnsSWKS2014,
	mReturnsSWKS2015,
	mReturnsSWKS2016,
	mReturnsSWKS2017,
	mReturnsSWKS2018,
	mReturnsSWKS2019,
	mReturnsSWKS2020,
	mReturnsTEAM2016,
	mReturnsTEAM2017,
	mReturnsTEAM2018,
	mReturnsTEAM2019,
	mReturnsTEAM2020,
	mReturnsTEL2007,
	mReturnsTEL2008,
	mReturnsTEL2009,
	mReturnsTEL2010,
	mReturnsTEL2011,
	mReturnsTEL2012,
	mReturnsTEL2013,
	mReturnsTEL2014,
	mReturnsTEL2015,
	mReturnsTEL2016,
	mReturnsTEL2017,
	mReturnsTEL2018,
	mReturnsTEL2019,
	mReturnsTEL2020,
	mReturnsTER2006,
	mReturnsTER2007,
	mReturnsTER2008,
	mReturnsTER2009,
	mReturnsTER2010,
	mReturnsTER2011,
	mReturnsTER2012,
	mReturnsTER2013,
	mReturnsTER2014,
	mReturnsTER2015,
	mReturnsTER2016,
	mReturnsTER2017,
	mReturnsTER2018,
	mReturnsTER2019,
	mReturnsTER2020,
	mReturnsTRMB2006,
	mReturnsTRMB2007,
	mReturnsTRMB2008,
	mReturnsTRMB2009,
	mReturnsTRMB2010,
	mReturnsTRMB2011,
	mReturnsTRMB2012,
	mReturnsTRMB2013,
	mReturnsTRMB2014,
	mReturnsTRMB2015,
	mReturnsTRMB2016,
	mReturnsTRMB2017,
	mReturnsTRMB2018,
	mReturnsTRMB2019,
	mReturnsTRMB2020,
	mReturnsTSM2006,
	mReturnsTSM2007,
	mReturnsTSM2008,
	mReturnsTSM2009,
	mReturnsTSM2010,
	mReturnsTSM2011,
	mReturnsTSM2012,
	mReturnsTSM2013,
	mReturnsTSM2014,
	mReturnsTSM2015,
	mReturnsTSM2016,
	mReturnsTSM2017,
	mReturnsTSM2018,
	mReturnsTSM2019,
	mReturnsTSM2020,
	mReturnsTXN2006,
	mReturnsTXN2007,
	mReturnsTXN2008,
	mReturnsTXN2009,
	mReturnsTXN2010,
	mReturnsTXN2011,
	mReturnsTXN2012,
	mReturnsTXN2013,
	mReturnsTXN2014,
	mReturnsTXN2015,
	mReturnsTXN2016,
	mReturnsTXN2017,
	mReturnsTXN2018,
	mReturnsTXN2019,
	mReturnsTXN2020,
	mReturnsTYL2006,
	mReturnsTYL2007,
	mReturnsTYL2008,
	mReturnsTYL2009,
	mReturnsTYL2010,
	mReturnsTYL2011,
	mReturnsTYL2012,
	mReturnsTYL2013,
	mReturnsTYL2014,
	mReturnsTYL2015,
	mReturnsTYL2016,
	mReturnsTYL2017,
	mReturnsTYL2018,
	mReturnsTYL2019,
	mReturnsTYL2020,
	mReturnsU2020,
	mReturnsUBER2019,
	mReturnsUBER2020,
	mReturnsUI2011,
	mReturnsUI2012,
	mReturnsUI2013,
	mReturnsUI2014,
	mReturnsUI2015,
	mReturnsUI2016,
	mReturnsUI2017,
	mReturnsUI2018,
	mReturnsUI2019,
	mReturnsUI2020,
	mReturnsUMC2006,
	mReturnsUMC2007,
	mReturnsUMC2008,
	mReturnsUMC2009,
	mReturnsUMC2010,
	mReturnsUMC2011,
	mReturnsUMC2012,
	mReturnsUMC2013,
	mReturnsUMC2014,
	mReturnsUMC2015,
	mReturnsUMC2016,
	mReturnsUMC2017,
	mReturnsUMC2018,
	mReturnsUMC2019,
	mReturnsUMC2020,
	mReturnsVMW2007,
	mReturnsVMW2008,
	mReturnsVMW2009,
	mReturnsVMW2010,
	mReturnsVMW2011,
	mReturnsVMW2012,
	mReturnsVMW2013,
	mReturnsVMW2014,
	mReturnsVMW2015,
	mReturnsVMW2016,
	mReturnsVMW2017,
	mReturnsVMW2018,
	mReturnsVMW2019,
	mReturnsVMW2020,
	mReturnsVRSN2006,
	mReturnsVRSN2007,
	mReturnsVRSN2008,
	mReturnsVRSN2009,
	mReturnsVRSN2010,
	mReturnsVRSN2011,
	mReturnsVRSN2012,
	mReturnsVRSN2013,
	mReturnsVRSN2014,
	mReturnsVRSN2015,
	mReturnsVRSN2016,
	mReturnsVRSN2017,
	mReturnsVRSN2018,
	mReturnsVRSN2019,
	mReturnsVRSN2020,
	mReturnsWDAY2012,
	mReturnsWDAY2013,
	mReturnsWDAY2014,
	mReturnsWDAY2015,
	mReturnsWDAY2016,
	mReturnsWDAY2017,
	mReturnsWDAY2018,
	mReturnsWDAY2019,
	mReturnsWDAY2020,
	mReturnsWIT2006,
	mReturnsWIT2007,
	mReturnsWIT2008,
	mReturnsWIT2009,
	mReturnsWIT2010,
	mReturnsWIT2011,
	mReturnsWIT2012,
	mReturnsWIT2013,
	mReturnsWIT2014,
	mReturnsWIT2015,
	mReturnsWIT2016,
	mReturnsWIT2017,
	mReturnsWIT2018,
	mReturnsWIT2019,
	mReturnsWIT2020,
	mReturnsWORK2019,
	mReturnsWORK2020,
	mReturnsXLNX2006,
	mReturnsXLNX2007,
	mReturnsXLNX2008,
	mReturnsXLNX2009,
	mReturnsXLNX2010,
	mReturnsXLNX2011,
	mReturnsXLNX2012,
	mReturnsXLNX2013,
	mReturnsXLNX2014,
	mReturnsXLNX2015,
	mReturnsXLNX2016,
	mReturnsXLNX2017,
	mReturnsXLNX2018,
	mReturnsXLNX2019,
	mReturnsXLNX2020,
	mReturnsZBRA2006,
	mReturnsZBRA2007,
	mReturnsZBRA2008,
	mReturnsZBRA2009,
	mReturnsZBRA2010,
	mReturnsZBRA2011,
	mReturnsZBRA2012,
	mReturnsZBRA2013,
	mReturnsZBRA2014,
	mReturnsZBRA2015,
	mReturnsZBRA2016,
	mReturnsZBRA2017,
	mReturnsZBRA2018,
	mReturnsZBRA2019,
	mReturnsZBRA2020,
	mReturnsZEN2014,
	mReturnsZEN2015,
	mReturnsZEN2016,
	mReturnsZEN2017,
	mReturnsZEN2018,
	mReturnsZEN2019,
	mReturnsZEN2020,
	mReturnsZI2020,
	mReturnsZS2018,
	mReturnsZS2019,
	mReturnsZS2020
  } from 'variables/financialCharts/mReturns';
import { lineChartDataTotalSpent, lineChartOptionsTotalSpent, lineChartOptionsYearRev, lineChartOptionsMonthRev} from 'variables/financialcharts';

export default function LineCumuRetM(props: { [x: string]: any }) {
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
				<Text fontSize='50px'>Cumulative Stock Returns (Monthly)</Text>
				<Box minH='260px' minW='75%' mt='auto'>
					<LineChart chartData={mReturnsAAPL2006} chartOptions={lineChartOptionsMonthRev} />
				</Box>
		</Card>
	);
}
