import { useState } from 'react'
import {
  Box,
  Heading,
  Text,
  Flex,
  useColorModeValue,
  HStack,
  Center,
  Button,
  Link,
  VStack
} from '@chakra-ui/react'
import { BsFillCartCheckFill, BsCartPlus } from 'react-icons/bs'
import { motion } from "framer-motion";
import { useCart } from './CartContext';
import ChakraBox from './ChakraBox';
import NextLink from 'next/link';

export default function PostWithLike() {
  const [liked, setLiked] = useState(false)
  const { addToCart, removeFromCart } = useCart();

  const product = { id: '1',
    university: 'Lauder Business School',
    course: 'Law & Organizations',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat exercitationem, inventore alias iusto possimus! Ipsam tempora dicta dignissimos. Inventore nisi autem reprehenderit expedita reiciendis deserunt non minima consequatur nemo.',
    price: "80.00",
    pricehour: "20.00",
    year: 1,
    hours: 4,
  }

  const handleClick = () => {
    if (liked) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
    setLiked(!liked);
  }

  return (
    <Center>
      <Box
        w="100%"
        rounded={'2xl'}
        my={4}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="purple"
        boxShadow={useColorModeValue('6px 6px 0 #6366f1', '6px 6px 0 cyan')}>
        <Box p={4}>
          <Flex
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            mb="2"
            w="full">
            <Box bg="black" display={'inline-block'} px={2} py={1} color="white" borderRadius="lg">
              <Text fontSize={'xs'} fontWeight="medium">
                {product.university}
              </Text>
            </Box>

            <HStack spacing={2}>
              <Box bg="gray.200" display={'inline-block'} px={2} py={1} color="white" borderRadius="lg">
                <Text fontSize={'xs'} fontWeight="medium" color="purple">
                  Year {product.year}
                </Text>
              </Box>
              <Box bg="gray.200" display={'inline-block'} px={2} py={1} color="white" borderRadius="lg">
                <Text fontSize={'xs'} fontWeight="medium" color="purple">
                  {product.hours} hours
                </Text>
              </Box>
            </HStack>
          </Flex>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
            {product.course}
          </Heading>
          <Text color={'gray.500'} noOfLines={2}>
            {product.description}
          </Text>
        </Box>
        <HStack borderTop={'1px'} color="black">
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            w="full">
              <Link as={NextLink} href="/courses/slug">
                <ChakraBox
                  whileTap={{ scale: 0.9 }}
                  opacity="1">
                  <Button fontSize={'md'} fontWeight={'semibold'}>
                    View more
                  </Button>
                </ChakraBox>
              </Link>

              <VStack spacing={0}>
                <Text
                  color={'purple'}
                  fontWeight={'semibold'}
                  fontSize={'md'}>
                  €{product.pricehour}/hour
                </Text>
                <Text
                  color={'purple'}
                  fontWeight={300}
                  fontSize={'md'}>
                  €{product.price} total
                </Text>
              </VStack>
            
          </Flex>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            borderLeft={'1px'}
            cursor="pointer"
            onClick={handleClick} > 
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: liked ? 1.1 : 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 10 }}>
              {liked ? (
                <BsFillCartCheckFill fill="#6366f1" fontSize={'24px'} />
              ) : (
                <BsCartPlus fontSize={'24px'} />
              )}
            </motion.div>
          </Flex>
        </HStack>
      </Box>
    </Center>
  )
}