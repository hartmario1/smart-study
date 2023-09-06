import { Box, Center, Flex } from "@chakra-ui/react";
import React from "react";

const ProfileLayout = ({ children }: any) => {
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
        <Box width = {{ base: 'full', md: '100%' }} minW = "350px">
          {children}
        </Box>
      </Center>
    </Flex>
  );
}

export default ProfileLayout;
