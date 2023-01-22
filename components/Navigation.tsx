import { Box, Button, ButtonGroup, Center, Flex, Heading, IconButton, Link, LinkOverlay, useDisclosure } from "@chakra-ui/react"
import NextLink from "next/link";
import { FiMenu, FiX } from 'react-icons/fi';

const Navigation = () => {
  const { isOpen, onToggle } = useDisclosure();

  return(
    <Flex as = "nav" p = {4} align = "center" justify = "space-between" wrap = "wrap">
      <Flex align = "center" mr = {5}>
        <LinkOverlay href = "/">
          <Button variant="unstyled">
            <Heading size='md' color="black">SmartStudy</Heading>
          </Button>
        </LinkOverlay>
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
        <Button variant="ghost" borderRadius="2xl">Găsește un profesor</Button>
        <Button variant="ghost" borderRadius="2xl">Aplica ca profesor</Button>
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
