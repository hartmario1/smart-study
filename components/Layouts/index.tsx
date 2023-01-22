import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Navigation from "../Navigation";

const StandardLayout = ({ children }: any) => {
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
      <Box w = "100%" minW = "350px" paddingX = "20px">
        <Navigation />
        {children}
      </Box>
    </Flex>
  );
}
 
export default StandardLayout;
