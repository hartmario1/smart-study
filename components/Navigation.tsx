import { Box, Button, ButtonGroup, Center, Flex, Heading, HStack, IconButton, Spacer, useDisclosure } from "@chakra-ui/react"
import Link from "next/link";
import { FiMenu, FiX } from 'react-icons/fi';

const Navigation = () => {
  const { isOpen, onToggle } = useDisclosure();

  return(
    <Flex as = "nav" p = {4} align = "center" justify = "space-between" wrap = "wrap">
      <Flex align = "center" mr = {5}>
        <Link href = "/">
          <Button variant="link">
            <Heading size='md' color="black">SmartStudy</Heading>
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
        <Button variant="ghost">Găsește un profesor</Button>
        <Button variant="ghost">Aplica ca profesor</Button>
      </Box>

      <Box display = {{ base: isOpen ? 'flex' : 'none', md: isOpen ? 'flex' : 'block' }}
        flexDirection = {{ base: 'column', md: 'unset' }}
        width = {{ base: 'full', md: 'auto' }}>
      </Box>

      <Box display = {{ base: isOpen ? 'flex' : 'none', md: 'block' }}
        flexDirection = {{ base: 'column', md: 'unset' }}
        width = {{ base: 'full', md: 'auto' }}>
        <Center>
          <Link href = "/inregistrare">
            <Button variant="link">
              <Button color="black" marginRight="1">Înregistrare</Button>
            </Button>
          </Link>
          <Link href = "/autentificare">
            <Button variant="link">
              <Button marginLeft="1" colorScheme="blue">Autentificare</Button>
            </Button>
          </Link>    
        </Center>
      </Box>
    </Flex>
  );
};

export default Navigation;
