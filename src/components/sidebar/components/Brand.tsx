// Chakra imports
import { Flex, useColorModeValue, Text, Image } from '@chakra-ui/react';

// Custom components
import { HorizonLogo } from 'components/icons/Icons';
import { HSeparator } from 'components/separator/Separator';
import ProjectLogo from 'img/projectlogo/projectlogo.png'
import Teamlogo from 'img/team-logo/team-logo.jpg';
import Project from 'views/admin/profile/components/Project';

export function SidebarBrand() {
	//   Chakra color mode
	let logoColor = useColorModeValue('navy.700', 'white');

	return (
		<Flex alignItems='center' flexDirection='row'>
			<Image
  borderRadius="full"
  boxSize="100px"
  src={Teamlogo.src}
  alt="ProjectLogo"
/>

			<Image
  boxSize="100px"
  src={ProjectLogo.src}
  alt="ProjectLogo"
/>
		</Flex>
	);
}

export default SidebarBrand;
