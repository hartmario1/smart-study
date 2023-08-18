import {
  Box,
  Stack,
  Text,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  Center,
  Flex,
  Button,
  HStack,
} from '@chakra-ui/react'
import ChakraBox from '../../components/ChakraBox'
import StandardLayout from '../../components/Layouts/standard'

const Groups = () => {
  return (
    <Box
      maxW="md"
      borderWidth="1px"
      borderColor={"gray.400"}
      borderRadius="lg"
      overflow="hidden"
      p={4}
      bg="gray.100"
      color="white"
    >
      <Box px="2" bg="green.100" borderRadius={"xl"}>
        <Text color={"green.600"}>
          Sufficient spots available
        </Text>
      </Box>

      <Box paddingTop={3}>
        <Box p={2} bg="gray.50" borderRadius={"lg"}>
          <Text color="black" fontWeight="semibold">Group 1</Text>
        </Box>
      </Box>

      <Flex justify={"space-between"} p="2" paddingTop="5">
        <VStack>
          <Text color="black" fontSize="sm">
            Mon 15 Oct
          </Text>
          <Text color="black" fontSize="sm">
            Mon 15 Oct
          </Text>
          <Text color="black" fontSize="sm">
            Mon 15 Oct
          </Text>
        </VStack>
        <VStack>
          <Text color="black" fontSize="sm">
            11:00 - 12:00
          </Text>
          <Text color="black" fontSize="sm">
            11:00 - 12:00
          </Text>
          <Text color="black" fontSize="sm">
            11:00 - 12:00
          </Text>
        </VStack>
      </Flex>

      {/* Price row */}
      <Flex justify="space-between" align="center" mt={4}>
        <Text color="black" fontWeight="semibold">Price:</Text>
        <HStack>
          <Text color="purple" fontSize="lg" fontWeight={'semibold'}>
            €80.00
          </Text>
          <Text color="purple" fontSize="md">
            / €20.00 per hour
          </Text>
        </HStack>
      </Flex>

      <ChakraBox
          whileTap={{ scale: 0.9 }}
          opacity="1">
        <Button mt={4} w="100%" borderRadius="lg" backgroundColor="purple" _hover={{ bg: "hoverpurple" }} color="white">Purchase</Button>
      </ChakraBox>
    </Box>
  )
}

export default function Simple() {
  return (
    <StandardLayout>
      <Center paddingTop={20} paddingBottom="14">
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              Law & Organizations
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'xl'}>
              Lauder Business School
            </Text>
            <Text
              color={'purple'}
              fontWeight={300}
              fontSize={'2xl'}>
              €80.00 EUR
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet
                at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis
                porro, quae, quisquam quos reprehenderit velit? Natus, totam.
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={'purple'}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Groups available:
              </Text>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <Groups />
                <Groups />
                <Groups />
              </SimpleGrid>
            </Box>
          </Stack>
        </Stack>
      </Center>
    </StandardLayout>
  )
}