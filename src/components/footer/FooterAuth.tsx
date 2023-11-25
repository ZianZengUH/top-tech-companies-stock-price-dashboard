/* eslint-disable */

import {
  Flex,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Teamlogo from 'img/team-logo/team-logo.jpg';


export default function Footer(props: { [x: string]: any }) {
  let textColor = useColorModeValue('gray.400', 'white');
  let linkColor = useColorModeValue({ base: 'gray.400', lg: 'white' }, 'white');
  return (
    <Flex
      zIndex="3"
      flexDirection={{
        base: 'column',
        lg: 'row',
      }}
      alignItems={{
        base: 'center',
        xl: 'start',
      }}
      justifyContent="space-between"
      px={{ base: '30px', md: '0px' }}
      pb="30px"
      {...props}
    >
                    <Image
  borderRadius="full"
  boxSize="60px"
  src={Teamlogo.src}
  alt="team-logo"
/>

      <Text
        color={textColor}
        textAlign={{
          base: 'center',
          xl: 'start',
        }}
        mb={{ base: '20px', lg: '0px' }}
      >
        {' '}
        <Text as="span" fontWeight="500" ms="4px">
        Created by Zephyrus‘ Flame Mapper
        &copy; {new Date().getFullYear()}
        </Text>
      </Text>
    </Flex>
  );
}
