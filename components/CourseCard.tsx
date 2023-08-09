import { useState } from 'react'
import {
  Box,
  Heading,
  Text,
  Flex,
  useColorModeValue,
  HStack,
  Center,
  Button
} from '@chakra-ui/react'
import { BsFillCartCheckFill, BsCartPlus } from 'react-icons/bs'
import { motion } from "framer-motion";
import { useCart } from './CartContext';

export default function PostWithLike() {
  const [liked, setLiked] = useState(false)
  const { addToCart } = useCart();
  const handleClick = () => {
    setLiked(!liked)
    addToCart();
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
          <Box bg="black" display={'inline-block'} px={2} py={1} color="white" mb={2} borderRadius="lg">
            <Text fontSize={'xs'} fontWeight="medium">
              Lauder Business School
            </Text>
          </Box>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
            Law & Organizations
          </Heading>
          <Text color={'gray.500'} noOfLines={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat exercitationem, inventore alias iusto possimus! Ipsam tempora dicta dignissimos. Inventore nisi autem reprehenderit expedita reiciendis deserunt non minima consequatur nemo.
          </Text>
        </Box>
        <HStack borderTop={'1px'} color="black">
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            w="full">
            <Button fontSize={'md'} fontWeight={'semibold'}>
              View more
            </Button>
            <Text color="purple">
              80€
            </Text>
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