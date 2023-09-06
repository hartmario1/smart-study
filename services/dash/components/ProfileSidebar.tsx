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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { RiSettings3Fill, RiLogoutBoxLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx"
import { BiMessageDetail } from "react-icons/bi";
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import ChakraBox from './ChakraBox';
import NextLink from "next/link";
import { GiLouvrePyramid } from 'react-icons/gi';

interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: RxDashboard, href: '/profil' },
  { name: 'Messages', icon: BiMessageDetail, href: '/mesaje' },
  { name: 'Settings', icon: RiSettings3Fill, href: '/setari' },
];

export default function ProfileSidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <Box minH="100vh">
      <SidebarContent
        onClose_={() => onClose}
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
          <SidebarContent onClose_={onClose} />
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
  onClose_: () => void;
}

const SidebarContent = ({ onClose_, ...rest }: SidebarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
          <Image src = "/smartstudy.png" w={{ base: '150px', sm: '150px' }} alt="teacher_purple" />
        </Center>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose_} />
      </Flex>
      <Flex h="87vh" direction={"column"} marginX={6} marginY={6}>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon} href={link.href}>
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
              <Button variant="ghost" onClick={onOpen} borderRadius="2xl" leftIcon={<RiLogoutBoxLine />}>Log Out</Button>

              <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Deconectare</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    Ești sigur că vrei să te deconectezi? Nu v-a mai fi posibil să accesezi contul până când nu te vei reconecta!
                  </ModalBody>
                  <ModalFooter>
                    <Button w="100%" bgColor="red.500" color="white" onClick={onClose}>Deconectare</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
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
  href: string;
}

const NavItem = ({ icon, children, href }: NavItemProps) => {
  return (
    <Center paddingY="1">
      <Link as={NextLink} href={href}>
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
      <Image paddingLeft="2" src = "/smartstudy.png" w={{ base: '150px', sm: '150px' }} alt="teacher_purple" />
    </Flex>
  );
};