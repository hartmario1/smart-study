import { Badge, Box, Button, ButtonGroup, Center, Flex, IconButton, Image, Link, Stack, useDisclosure } from "@chakra-ui/react"
import NextLink from "next/link";
import { FiMenu, FiX } from 'react-icons/fi';
import ChakraBox from "./ChakraBox";
import { BsCart2, BsFillPersonFill } from 'react-icons/bs';
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import CartPopover from "./CartPopover";

const Navigation = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { t, lang } = useTranslation('common');
  const router = useRouter();

  const toggleLanguage = () => {
    const newLocale = lang === 'en' ? 'de' : 'en';
    router.push(router.pathname, router.pathname, { locale: newLocale });
  }
  
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
            <Link as={NextLink} href="/courses">
              <ChakraBox
                whileTap={{ scale: 0.9 }}
                opacity="1">
                <Button variant="ghost" borderRadius="2xl">{t('navFind')}</Button>
              </ChakraBox>
            </Link>
          </Center>
          <Center>
            <Link as={NextLink} href="/become">
              <ChakraBox
                whileTap={{ scale: 0.9 }}
                opacity="1">
                <Button variant="ghost" borderRadius="2xl">{t('navBecome')}</Button>
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
            <Link as={NextLink} href = "" locale="de">
              <ChakraBox
                  whileTap={{ scale: 0.9 }}
                  opacity="1">
                <Button borderRadius="2xl" color="black" onClick={toggleLanguage}>
                  {lang === 'en' ? 'DE' : 'EN'}
                </Button>
              </ChakraBox>
            </Link>
            <Link as={NextLink} href = "/inregistrare">
              <ChakraBox
                  whileTap={{ scale: 0.9 }}
                  opacity="1">
                <Button leftIcon={<BsFillPersonFill />} aria-label="Profile" borderRadius="2xl" color="black">{t('navProfile')}</Button>
              </ChakraBox>
            </Link>

            <Flex align="center" position="relative">
              <CartPopover />
            </Flex>
          </ButtonGroup>
        </Center>
      </Box>
    </Flex>
  );
};

export default Navigation;
