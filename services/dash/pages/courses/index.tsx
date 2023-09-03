import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Heading, Link, Menu, MenuButton, MenuItem, MenuList, Stack } from "@chakra-ui/react";
import { useState } from "react";
import StandardLayout from "../../components/Layouts/standard";
import CourseCard from "../../components/CourseCard";

const Profesori = () => {
  const [selectedUniversity, setSelectedUniversity] = useState("Select your university");
  const [selectedProgramme, setSelectedProgramme] = useState("Select your programme");

  const handleUniversityClick = (university: string) => {
    setSelectedUniversity(university);
  };

  const handleProgrammeClick = (programme: string) => {
    setSelectedProgramme(programme);
  };

  return (
    <StandardLayout>
      <Box paddingBottom="8">
        <Center paddingY = {{ base: 'none', md: '6' }} paddingBottom = {{ base: '6', md: 'none' }}>
          <Heading color="gray.600">
            Find{' '}
            <Link color='purple' href='/courses/#'>
              the course
            </Link>
            {' '}you need and start getting higher grades!
          </Heading>
        </Center>
        <Box borderRadius="2xl" backgroundColor="gray.50">
          <Stack direction={['column', 'row']} padding="5">
            <Menu>
              <MenuButton w={"100%"} as={Button} rightIcon={<ChevronDownIcon />}>
                {selectedUniversity}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => handleUniversityClick("Wirtschaft Universität")}>Wirtschaft Universität</MenuItem>
                <MenuItem onClick={() => handleUniversityClick("Lauder Business School")}>Lauder Business School</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton w={"100%"} as={Button} rightIcon={<ChevronDownIcon />}>
                {selectedProgramme}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => handleProgrammeClick("Wirtschaft Universität")}>Wirtschaft Universität</MenuItem>
                <MenuItem onClick={() => handleProgrammeClick("Lauder Business School")}>Lauder Business School</MenuItem>
              </MenuList>
            </Menu>
            <Box paddingTop={{ base: "1", md: "0" }}>
              <Button 
                width={{ base: 'none', md: '30%' }}
                minW="100%"
                borderRadius="lg"
                backgroundColor="purple"
                _hover={{ bg: "hoverpurple" }}
                color="white">
                  Filter
              </Button>
            </Box>
          </Stack>
        </Box>
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </Box>
    </StandardLayout>
  );
};

export default Profesori;
