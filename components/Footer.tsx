import { Button, Link, Wrap, WrapItem, Text } from '@chakra-ui/react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';

const Footer = () => (
  <Wrap paddingTop = "5" justify = "center" align = "center" paddingBottom="20">
    <WrapItem>
      <Text>
          © 2023
        {' '}
        <Link href = "/">
            SmartStudy.
        </Link>
        {' '}
          All rights reserved.
      </Text>
    </WrapItem>

    {/* Social */}
    <WrapItem>
      <Link href = "https://www.instagram.com/soulkiller.io/" isExternal>
        <Button variant = "link">
          <WrapItem>
            <FiInstagram />
          </WrapItem>
        </Button>
      </Link>
      <Link href = "https://twitter.com/SoulkillerIO" isExternal>
        <Button variant = "link">
          <WrapItem>
            <FiFacebook />
          </WrapItem>
        </Button>
      </Link>
    </WrapItem>

    {/* Legal */}
    <WrapItem>
      <Link href = "/terms">
        <Button variant = "link">
          <WrapItem paddingX = "2" color="purple">
            Terms of Service
          </WrapItem>
        </Button>
      </Link>
      <Link href = "/privacy">
        <Button variant = "link">
          <WrapItem paddingX = "2" color="purple">
            Privacy
          </WrapItem>
        </Button>
      </Link>
    </WrapItem>
  </Wrap>
);

export default Footer;
