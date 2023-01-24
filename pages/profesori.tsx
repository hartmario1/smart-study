import { Box, Button, Center, FormControl, FormLabel, Heading, Link, Select, Stack } from "@chakra-ui/react";
import StandardLayout from "../components/Layouts";
import TeacherCard from "../components/TeacherCard";

const Profesori = () => {
  return (
    <StandardLayout>
      <Center paddingY = {{ base: 'none', md: '6' }} paddingBottom = {{ base: '6', md: 'none' }}>
        <Heading color="gray.600">
          Găsește{' '}
          <Link color='purple' href='/profesori/#'>
            profesorul
          </Link>
          {' '}potrivit pentru tine!
        </Heading>
      </Center>
      <Box borderRadius="2xl" backgroundColor="gray.50">
        <Stack direction={['column', 'row']} padding="5">
          <FormControl>
            <FormLabel paddingLeft="2">Materie</FormLabel>
            <Select placeholder='Select' size='lg'>
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel paddingLeft="2">Nivel</FormLabel>
            <Select placeholder='Select' size='lg'>
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel paddingLeft="2">Preț</FormLabel>
            <Select placeholder='Select' size='lg'>
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
            </Select>
          </FormControl>
          <Box paddingTop={{ base: 'none', md: '35px' }}>
            <Button 
              width={{ base: 'none', md: '30%' }}
              minW="100px"
              borderRadius="2xl"
              backgroundColor="purple"
              _hover={{ bg: "hoverpurple" }}
              color="white">Filtrează
            </Button>
          </Box>
        </Stack>
      </Box>

      <TeacherCard />
      <TeacherCard />
      <TeacherCard />
      <TeacherCard />
      <TeacherCard />
    </StandardLayout>
  );
};

export default Profesori;
