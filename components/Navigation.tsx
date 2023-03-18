import { Box, Button, ButtonGroup, Center, Flex, Heading, IconButton, Image, Link, Stack, useDisclosure } from "@chakra-ui/react"
import NextLink from "next/link";
import { FiMenu, FiX } from 'react-icons/fi';

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
              <Button variant="ghost" borderRadius="2xl">Găsește un profesor</Button>
            </Link>
          </Center>
          <Center>
            <Link>
              <Button variant="ghost" borderRadius="2xl">Aplica ca profesor</Button>
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
              <Button borderRadius="2xl" color="black">Înregistrare</Button>
            </Link>
            <Link as={NextLink} href = "/autentificare">
              <Button borderRadius="2xl" backgroundColor="purple" _hover={{ bg: "hoverpurple" }} color="white">Autentificare</Button>
            </Link>    
          </ButtonGroup>
        </Center>
      </Box>
    </Flex>
  );
};

export default Navigation;
