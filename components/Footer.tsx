import { Button, Text, useColorModeValue, VisuallyHidden, Box, Container, Stack, Image } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FiFacebook } from 'react-icons/fi';
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import ChakraBox from './ChakraBox';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <ChakraBox
    whileTap={{ scale: 0.9 }}
    opacity="1">
      <Button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        borderRadius="full"
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </Button>
    </ChakraBox>
  )
}

const Footer = () => (
  <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Image
          objectFit='cover'
          maxW={{ base: '200px', sm: '230px' }}
          src='/smartstudy.png'
          alt="SmartStudy" />
        <Text>© 2023 SmartStudy. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'#'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'#'}>
            <FiFacebook />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'#'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
);

export default Footer;
