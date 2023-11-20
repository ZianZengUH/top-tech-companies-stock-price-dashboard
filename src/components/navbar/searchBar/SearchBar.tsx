import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useState } from 'react';
export function SearchBar (props: {
  onSearch: (query: string) => void; // Callback function for search action
  variant?: string
  background?: string
  children?: JSX.Element
  placeholder?: string
  borderRadius?: string | number
  [x: string]: any
}) {
  // Pass the computed styles into the `__css` prop
  const {
    onSearch,
    variant,
    background,
    children,
    placeholder,
    borderRadius,
    ...rest
  } = props

  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = () => {
    // Trigger the search action with the current search query
    onSearch(searchQuery);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update the search query as the user types
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Trigger search when the user presses Enter
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  // Chakra Color Mode
  const searchIconColor = useColorModeValue('gray.700', 'white')
  const inputBg = useColorModeValue('secondaryGray.300', 'navy.900')
  const inputText = useColorModeValue('gray.700', 'gray.100')
  return (
    <InputGroup w={{ base: '100%', md: '200px' }} {...rest}>
      <InputLeftElement>
        <IconButton
          aria-label='search'
          bg='inherit'
          borderRadius='inherit'
          _active={{
            bg: 'inherit',
            transform: 'none',
            borderColor: 'transparent'
          }}
          _focus={{
            boxShadow: 'none'
          }}
          icon={<SearchIcon color={searchIconColor} w='15px' h='15px' />}
          onClick={handleSearch} // Trigger search on icon click

        />
      </InputLeftElement>

      <Input
        variant='search'
        fontSize='sm'
        bg={background ? background : inputBg}
        color={inputText}
        fontWeight='500'
        _placeholder={{ color: 'gray.400', fontSize: '14px' }}
        borderRadius={borderRadius ? borderRadius : '30px'}
        placeholder={placeholder ? placeholder : 'Search...'}
        value={searchQuery}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
    </InputGroup>
  )
}
