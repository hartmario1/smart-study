import { Box, Button, ButtonGroup, Center, Flex, Heading, IconButton, Image, Link, Stack, useDisclosure } from "@chakra-ui/react"
import NextLink from "next/link";
import { FiMenu, FiX } from 'react-icons/fi';
import ChakraBox from "./ChakraBox";

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
        <IconButton display = {{ base: 'flex', md: 'none' }}
          aria-label = "Open menu"
          variant = "ghost"
          icon = {isOpen ? <FiX /> : <FiMenu />}
          onClick = {onToggle}
        />
      </Flex>

      <Box display = {{ base: isOpen ? 'flex' : 'none', md: 'block' }}
        flexDirection = {{ base: 'column', md: 'unset' }}
        width = {{ base: 'full', md: 'auto' }}>
        <Stack direction={['column', 'row']}>
          <Center>
            <Link as={NextLink} href="/profesori">
              <ChakraBox
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                opacity="1">
                <Button variant="ghost" borderRadius="2xl">Găsește un profesor</Button>
              </ChakraBox>
            </Link>
          </Center>
          <Center>
            <Link>
              <ChakraBox
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
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
          <ButtonGroup spacing={1} variant='outline'>
            <Link as={NextLink} href = "/inregistrare">
              <ChakraBox
                  whileHover={{ scale: 0.9 }}
                  whileTap={{ scale: 0.8 }}
                  opacity="1">
                <Button borderRadius="2xl" color="black">Înregistrare</Button>
              </ChakraBox>
            </Link>
            <Link as={NextLink} href = "/autentificare">
              <ChakraBox
                  whileHover={{ scale: 0.9 }}
                  whileTap={{ scale: 0.8 }}
                  opacity="1">
                <Button borderRadius="2xl" backgroundColor="purple" _hover={{ bg: "hoverpurple" }} color="white">Autentificare</Button>
              </ChakraBox>
            </Link>    
          </ButtonGroup>
        </Center>
      </Box>
    </Flex>
  );
};

export default Navigation;
