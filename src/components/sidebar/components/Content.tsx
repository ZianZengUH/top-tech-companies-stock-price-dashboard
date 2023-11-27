// chakra imports
import { Box, Flex, Stack,
	Button,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	Input,
	FormLabel,
	Checkbox, 
	CheckboxGroup } from '@chakra-ui/react';
import { HSeparator } from 'components/separator/Separator';
//   Custom components
import Brand from 'components/sidebar/components/Brand';
import Links from 'components/sidebar/components/Links';
import React, { useState } from 'react';
import { MdBuild } from 'react-icons/md';
import { IRoute } from 'types/navigation';

// FUNCTIONS

interface SidebarContentProps {
	routes: IRoute[];
}

function SidebarContent(props: SidebarContentProps) {
	const { routes } = props;
	const { isOpen, onOpen, onClose } = useDisclosure()
	const firstField = React.useRef()
	const [isChartVisible, setIsChartVisible] = useState(true);
	const toggleChartVisibility = () => {
		setIsChartVisible(!isChartVisible);
	  };
	// SIDEBAR
	return (
		<Flex direction='column' height='100%' pt='25px' borderRadius='30px'>
			<Brand />
			<Stack direction='column' mt='8px' alignItems='center'>
				<Box ps='20px' pe={{ lg: '16px', '2xl': '16px' }} >
				{/* <Button leftIcon={<MdBuild />} onClick={onOpen}>
       				 Tool bar
      				</Button>
					<Drawer
						isOpen={isOpen}
						placement="left"
						onClose={onClose}
						initialFocusRef={firstField}
					>
						<DrawerOverlay />
						<DrawerContent>
						<DrawerCloseButton />
						<DrawerHeader>Filter Panel</DrawerHeader>
						<DrawerBody>

							<Stack spacing="24px">
							<Box>
								<FormLabel htmlFor="username">Search</FormLabel>
								<Input
								ref={firstField}
								id="username"
								placeholder="Search here"
								/>
							</Box>
							<Box>
								<FormLabel htmlFor="filter">Filter</FormLabel>
					<CheckboxGroup defaultValue={['table','barchart', 'piechart']} >
					<Stack spacing={[1, 5]} direction={'column'}>
					<Checkbox colorScheme='blue' value='table' >Pie Chart</Checkbox>
					<Checkbox colorScheme='blue' value='barchart'>Bar Chart</Checkbox>
					<Checkbox colorScheme='blue' value='piechart'>Pie Chart</Checkbox>
					</Stack>
						</CheckboxGroup>
							</Box>
							</Stack>
						</DrawerBody>
						<DrawerFooter>
							<Button variant="outline" mr={3} onClick={onClose}>
							Cancel
							</Button>
							<Button colorScheme="brand">Save</Button>
						</DrawerFooter>
						</DrawerContent>
					</Drawer> */}
				</Box>
			</Stack>
			
			<HSeparator mb='20px' />

			<Stack direction='column' mt='8px' mb='auto'>
				<Box ps='20px' pe={{ lg: '16px', '2xl': '16px' }} >
					<Links routes={routes} />
				</Box>
			</Stack>
		</Flex>
	);
}

export default SidebarContent;
