import { Box, Center, Heading, Stack } from "@chakra-ui/react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Calendar } from 'react-date-range';
import ProfileLayout from "../components/Layouts/profile";
import { useState } from "react";
import { subDays, addDays } from 'date-fns'

const Profile = () => {
  const [state] = useState([
    {
      startDate: subDays(new Date(), 7),
      endDate: addDays(new Date(), 1),
      key: "selection"
    }
  ]);

  return (
    <ProfileLayout>
      <Center>
        <Stack align="center" direction={['column-reverse', 'row']}>
          <Center bgColor="blackAlpha.100" w={"550px"} h={"470px"} borderRadius="xl">
            <Calendar
              ranges={state}
              direction="horizontal"
              color="#6366f1"
              rangeColors={["#6366f1"]}
              style = {{ width: "500px" }}
            />
          </Center>
          <Box bgColor="blackAlpha.100" w={"550px"} h={"470px"} borderRadius="xl">
            <Heading
              fontWeight={800}
              letterSpacing="-0.08rem"
              mb={4}
              fontSize={{ base: 'xl', sm: '2xl' }}
              color="blackAlpha.800"
              paddingBottom="2">Mesaje
            </Heading>
          </Box>
        </Stack>
      </Center>
    </ProfileLayout>
  );
}; 

export default Profile;
