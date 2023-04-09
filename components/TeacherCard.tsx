import { Box, Card, CardBody, Center, Divider, Flex, Heading, HStack, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import { AiFillStar } from 'react-icons/ai';

const TeacherCard = () => {
  return (
    <Box paddingTop={5}>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        borderRadius="xl"
        variant='outline'
        shadow="lg">
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
          alt='Caffe Latte'/>
        <CardBody>
          <Stack direction={['column', 'row']}>
            <Box>
              <Heading color="gray.600" size='lg'>Numele profesorului</Heading>
              <Text>Materia</Text>
              <Text py='2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione corrupti consequuntur culpa quaerat in repudiandae non voluptate voluptatem aspernatur. Quas repellendus ipsa asperiores. Nihil quos totam eligendi ipsum, inventore nulla.
              </Text>
            </Box>

            <Spacer />
            <Box>
              <Divider orientation='vertical' />
            </Box>
            <Box paddingX="2">
              <Center>
                <Text fontSize="xl" fontWeight="bold" color="purple" paddingBottom="3">
                  100RON/h
                </Text>
              </Center>
              <HStack justify="center">
                <AiFillStar color="#6366f1" />
                <Text color="gray.500" as="b">
                  5/5
                </Text>
              </HStack>
              <Center>
                <Text color="gray.500" as="b">
                  5 impresii
                </Text>
              </Center>
              <Center>
                <Text color="gray.500" as="b">
                  5 lecții
                </Text>
              </Center>
            </Box>              
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default TeacherCard;
