/*eslint-disable*/

import {
  Flex,
  Text,
  useColorModeValue,
  Image,
  HStack
} from '@chakra-ui/react';
import Teamlogo from 'img/team-logo/team-logo.jpg';


export default function Footer() {
  const textColor = useColorModeValue('gray.400', 'white');
  return (
<HStack
      zIndex="3"
      justifyContent="center"
      alignItems="center"
      px={{ base: '30px', md: '50px' }}
      pb="30px"
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
        mb={{ base: '20px', xl: '0px' }}
      >
        {' '}
        <Text as="span" fontWeight="500" ms="4px">
        Created by Zephyrus‘ Flame Mapper
        &copy; {new Date().getFullYear()}
        </Text>
      </Text>
      </HStack>
  );
}
