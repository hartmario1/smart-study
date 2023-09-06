import { Box, Center, Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "../Footer";
import Navigation from "../Navigation";

const IndexLayout = ({ children }: any) => {
  return(
    <Flex flexDirection= "column"
    h = "100vh"
    w = "100%"
    overflowY = "auto"
    css = {{
      '&::-webkit-scrollbar': {
        width: '4px'
      },
      '&::-webkit-scrollbar-track': {
        width: '6px'
      },
      '&::-webkit-scrollbar-thumb': {
        background: '#1a202c',
      }
    }}>
      <Center>
        <Box w = "70%" minW = "350px" paddingX = {{ base: '7px', md: '20px' }}>
          <Navigation />
        </Box>
      </Center>
      <Center>
        <Box width = {{ base: 'full', md: '100%' }} minW = "350px">
          {children}
        </Box>
      </Center>
      <Footer />
    </Flex>
  );
}
 
export default IndexLayout;
