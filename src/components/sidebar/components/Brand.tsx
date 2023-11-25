// Chakra imports
import { Flex, useColorModeValue, Text, Image, Stack } from '@chakra-ui/react';

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
		<Flex alignItems='center'  >
			<Stack direction='row' alignItems='center' marginLeft='2em'>
			<Image
  borderRadius="full"
  boxSize="100px"
  src={Teamlogo.src}
  alt="ProjectLogo"
/>
</Stack>

<Stack direction='row' alignItems='center' marginLeft='2em'>
<Image
  boxSize="100px"
  src={ProjectLogo.src}
  alt="ProjectLogo"
/>
</Stack>
		</Flex>

		
	);
}

export default SidebarBrand;
