import { useCart } from './CartContext';
import { Popover, PopoverTrigger, PopoverContent, PopoverBody, Box, IconButton, Badge, Center, Text, Button, Heading, HStack, Flex, useColorModeValue, Divider, Link } from '@chakra-ui/react';
import { BsCart2 } from 'react-icons/bs';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';
import ChakraBox from './ChakraBox';
import NextLink from 'next/link';

const CartItem = ({ product }: any) => {
  return (
    <Center>
      <Box
        w="100%"
        rounded={'lg'}
        my={1}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="gray.300">
        <Flex justify="space-between">
          <Box p={2}>
            <Text fontSize={'sm'}>
              Law & Organizations
            </Text>
          </Box>
          <Box p={2}>
            <Text fontSize={'sm'}>
              80€
            </Text>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
};

const CartPopover= () => {
  const { cart, itemCount } = useCart();

  return (
    <Popover>
      <PopoverTrigger>
        <Box>
          <IconButton
            icon={<BsCart2 />}
            aria-label="Profile"
            borderRadius="2xl"
            backgroundColor="purple"
            _hover={{ bg: "hoverpurple" }}
            color="white"
            zIndex={1} />
          {itemCount > 0 && (
            <Badge
              position="absolute"
              top="-1"
              right="-1"
              colorScheme="red"
              borderRadius="full"
              size="16px"
              zIndex={2}>
              {itemCount}
            </Badge>
          )}
        </Box>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody bgColor="gray.100">
          {itemCount === 0 
            ? 
            <Center flexDirection={'column'} p="2">
              <MdOutlineRemoveShoppingCart size={30} /> 
              <Text color={"purple"} fontWeight="semibold">
                Your cart is empty. Add some courses!
              </Text>
            </Center>
            :
            <Box>
               {cart.map((product) => (
                <CartItem key={product.id} item={product} />
                // Correct the above line: 'item' is the prop name passed to your CartItem component
              ))}
              <Divider />
              <Flex
                px={2}
                paddingTop="1"
                alignItems="center"
                justifyContent={'space-between'}
                roundedBottom={'sm'}
                w="full">
                <Text fontWeight="semibold">
                  Subtotal:
                </Text>
                <Text color="purple" fontWeight="semibold">
                  160€
                </Text>
              </Flex>
              <Center paddingTop="2">
                <Link w="100%" as={NextLink} href="/checkout">
                  <ChakraBox
                    whileTap={{ scale: 0.9 }}
                    opacity="1">
                      <Button
                        w="100%"
                        borderRadius="xl"
                        backgroundColor="purple"
                        _hover={{ bg: "hoverpurple" }}
                        color="white">
                      Checkout!
                    </Button>
                  </ChakraBox>
                </Link>
              </Center>
            </Box>
          }
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default CartPopover;