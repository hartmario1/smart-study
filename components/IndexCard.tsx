import { Box, chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from 'framer-motion';

const IndexCard = ({ title, content, featureIcon }: { title: string; content: string; featureIcon: JSX.Element }) => {
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  return (
    <ChakraBox
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      opacity="1"
      maxW='sm'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      backgroundColor="white">
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          {featureIcon}
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}>
          {title}
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          <Box as='span' color='gray.600' fontSize='sm'>
            {content}
          </Box>
        </Box>
      </Box>
    </ChakraBox>
  )
}

export default IndexCard;