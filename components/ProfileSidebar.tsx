import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Image,
  Button,
  Center,
  Spacer,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { RiSettings3Fill, RiLogoutBoxLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx"
import { BiMessageDetail } from "react-icons/bi";
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import ChakraBox from './ChakraBox';
import NextLink from "next/link";

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: RxDashboard },
  { name: 'Messages', icon: BiMessageDetail },
  { name: 'Settings', icon: RiSettings3Fill },
];

export default function ProfileSidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <Box minH="100vh">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }}>
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Center paddingTop="5" paddingX="4">
          <Image src = "/smartstudy.png" w={{ base: '150px', sm: '150px' }} />
        </Center>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Flex h="87vh" direction={"column"} marginX={6} marginY={6}>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
        <Spacer />
        <Center>
          <Link as={NextLink} href="">
            <ChakraBox
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              opacity="1">
              <Button variant="ghost" borderRadius="2xl" leftIcon={<RiLogoutBoxLine />}>Log Out</Button>
            </ChakraBox>
          </Link>
        </Center>
      </Flex>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}

const NavItem = ({ icon, children, }: NavItemProps) => {
  return (
    <Center paddingY="1">
      <Link as={NextLink} href="">
        <ChakraBox
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          opacity="1">
          <Button
            borderRadius="2xl"
            bgColor="white">
            {icon && (
              <Icon
                mr="4"
                fontSize="16"
                as={icon}
              />
            )}
            {children}
          </Button>
        </ChakraBox>
      </Link>
    </Center>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      borderBottomWidth="1px"
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Image paddingLeft="2" src = "/smartstudy.png" w={{ base: '150px', sm: '150px' }} />
    </Flex>
  );
};