import { Box, Image, Text } from "@chakra-ui/react";

const HomePage = () => {
  return(
    <Box boxSize="100%"
      overflowY = "auto"
      css = {{
        '&::-webkit-scrollbar': {
          width: '4px'
        },
        '&::-webkit-scrollbar-track': {
          width: '6px'
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#7252ff',
          borderRadius: '24px'
        }}}>
      <Image w="100%" src="/3.png" alt='background'>
        {/* <Text>
          Smart Study
        </Text> */}
      </Image>
    </Box>
  )
}

export default HomePage;