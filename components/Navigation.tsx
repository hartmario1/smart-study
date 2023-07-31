import { Box, Button, ButtonGroup, Center, Flex, IconButton, Image, Link, Select, Stack, useDisclosure } from "@chakra-ui/react"
import NextLink from "next/link";
import { FiMenu, FiX } from 'react-icons/fi';
import ChakraBox from "./ChakraBox";
import { BsCart2, BsFillPersonFill } from 'react-icons/bs';

const Navigation = () => {
  const { isOpen, onToggle } = useDisclosure();

  return(
    <Flex as = "nav" p = {4} align = "center" justify = "space-between" wrap = "wrap">
      <Flex align = "center">
        <Link href = "/">
          <Button variant="unstyled">
            <Image
            objectFit='cover'
            maxW={{ base: '200px', sm: '230px' }}
            src='/smartstudy.png'
            alt="SmartStudy" />
          </Button>
        </Link>
      </Flex>

      <Flex align = "center" paddingY = "3" paddingX = "2">
        <ChakraBox
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          opacity="1">
            <IconButton display = {{ base: 'flex', md: 'none' }}
            aria-label = "Open menu"
            variant = "ghost"
            icon = {isOpen ? <FiX /> : <FiMenu />}
            onClick = {onToggle}
            />
        </ChakraBox>
      </Flex>

      <Box display = {{ base: isOpen ? 'flex' : 'none', md: 'block' }}
        flexDirection = {{ base: 'column', md: 'unset' }}
        width = {{ base: 'full', md: 'auto' }}>
        <Stack direction={['column', 'row']}>
          <Center>
            <Link as={NextLink} href="/profesori">
              <ChakraBox
                whileTap={{ scale: 0.9 }}
                opacity="1">
                <Button variant="ghost" borderRadius="2xl">Găsește un curs</Button>
              </ChakraBox>
            </Link>
          </Center>
          <Center>
            <Link>
              <ChakraBox
                whileTap={{ scale: 0.9 }}
                opacity="1">
                <Button variant="ghost" borderRadius="2xl">Aplica ca profesor</Button>
              </ChakraBox>
            </Link>
          </Center>
        </Stack>
      </Box>

      <Box display = {{ base: isOpen ? 'flex' : 'none', md: isOpen ? 'flex' : 'block' }}
        flexDirection = {{ base: 'column', md: 'unset' }}
        width = {{ base: 'full', md: 'auto' }}>
      </Box>

      <Box display = {{ base: isOpen ? 'flex' : 'none', md: 'block' }}
        flexDirection = {{ base: 'column', md: 'unset' }}
        width = {{ base: 'full', md: 'auto' }}>
        <Center>
          <Box paddingRight={1}>
            <Select borderRadius="2xl" placeholder='EN'>
              <option>DE</option>
            </Select>
          </Box>
          <ButtonGroup spacing={1} variant='outline'>
            <Link as={NextLink} href = "/inregistrare">
              <ChakraBox
                  whileTap={{ scale: 0.9 }}
                  opacity="1">
                <Button leftIcon={<BsFillPersonFill />} aria-label="Profile" borderRadius="2xl" color="black">Profile</Button>
              </ChakraBox>
            </Link>
            <Link as={NextLink} href = "/autentificare">
              <ChakraBox
                  whileTap={{ scale: 0.9 }}
                  opacity="1">
                <IconButton icon={<BsCart2 />} aria-label="Profile" borderRadius="2xl" backgroundColor="purple" _hover={{ bg: "hoverpurple" }} color="white" />
              </ChakraBox>
            </Link>    
          </ButtonGroup>
        </Center>
      </Box>
    </Flex>
  );
};

export default Navigation;
