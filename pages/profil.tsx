import { Avatar, Box,
  Button,
  Center,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack, 
  Text, 
  VStack} from "@chakra-ui/react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Calendar } from 'react-date-range';
import ProfileLayout from "../components/Layouts/profile";
import NextLink from "next/link";
import { useState } from "react";
import { ArrowRightIcon, BellIcon, ChevronRightIcon, SearchIcon } from "@chakra-ui/icons";
import ProfileSidebar from "../components/ProfileSidebar";
import { GrDocumentText } from "react-icons/gr";

const Profile = () => {
  const [date, setDate] = useState(null);

  return (
    <ProfileLayout>
      <ProfileSidebar children={
        <Stack direction={"row"}>
          <Box paddingY={8} w="100%" paddingX={6}>
            <Stack direction={"row"}>
              <Box w="100%">
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon color='gray.400' />}
                  />
                  <Input color={"gray.500"} variant="outline" type='search' placeholder='Search for a course, a lesson, etc...' borderRadius="2xl" focusBorderColor='#6366f1' />
                </InputGroup>
              </Box>
              <Box>
                <Popover>
                  <PopoverTrigger>
                    <IconButton
                      variant='ghost'
                      color='gray.400'
                      aria-label='Call Sage'
                      fontSize='20px'
                      icon={<BellIcon />}
                    />
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Notificări</PopoverHeader>
                    <PopoverBody>Ai programat cu succes o meditatie la matematica!</PopoverBody>
                  </PopoverContent>
                </Popover>
                
              </Box>
              <Box>
                <Avatar
                  boxSize='40px'
                  src='https://bit.ly/dan-abramov'
                />
              </Box>
            </Stack>

            <Box w={'100%'} bgColor="#2a2a46" borderRadius={"xl"} marginTop="9">
              <Stack direction={"row"}>
                <Box>
                  <Text fontSize={20} 
                    paddingX="14" 
                    paddingTop="10"
                    color="#87869f">Bine ai revenit, Mario!
                  </Text>
                  <Text fontSize={35}
                    paddingX="14"
                    paddingTop="2"
                    color="white">Ai programate 3 meditații <br/> săptămâna aceasta!
                  </Text>
                  <Box paddingY={"8"} paddingX="14">
                    <Link as={NextLink} href="/profesori">
                      <Button rightIcon={<ArrowRightIcon />} variant="filled" _hover={{ bg: "gray.300" }} bgColor={"white"} borderRadius="xl" size={"sm"} >Caută mai mulți meditatori</Button>
                    </Link>
                  </Box>
                </Box>
                <Box>
                  {/* meditatiile programate */}
                </Box>
              </Stack>
            </Box>
            
            <Stack direction={['column', 'row']}>
              <VStack w="100%">
                <Box w="100%" paddingTop="4">
                  <Heading size="md" color="#2a2a46" paddingX="1" paddingBottom={"4"}>Teme și documente</Heading>
                  <Box bg = "gray.100" h="48vh" borderRadius = "xl"
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
                      }
                    }}>
                    <Center h={"48vh"} paddingY = "3" paddingX = "3" flexDirection={"column"}>
                      <GrDocumentText size = "30px" color = "#2a2a46" />  
                      <Text fontWeight={"semibold"} fontSize={['sm', 'md', 'lg', 'xl']} paddingTop="2">
                        Nu există documente sau teme disponibile!
                      </Text>             
                    </Center>
                  </Box>
                </Box>
              </VStack>

              <Box>
                <Center paddingTop={"5"}>
                  <Calendar
                  direction="horizontal"
                  color="#6366f1"
                  style = {{ minWidth: "100%" }}
                  onChange={item => setDate(item)}
                  date={date}
                  />
                </Center>
                <Box>
                  <Heading paddingLeft="1" paddingBottom={"4"} size="md">Următoarea meditație programată</Heading>
                  <Box bgColor="gray.100" borderRadius={"2xl"}>
                    <Stack direction={"row"}>
                      <Box padding="2">
                        <Image
                          borderRadius='xl'
                          boxSize='60px'
                          src='https://bit.ly/dan-abramov'
                          alt='Dan Abramov'
                        />
                      </Box>
                      <HStack>
                        <Box>
                          <Text color="purple" fontWeight={"semibold"}>
                            10:00 - 11:00
                          </Text>
                          <Text fontWeight={"semibold"} color="gray.600">
                            Matematică - prof. Popescu
                          </Text>
                        </Box>
                        <Box justifyContent={"end"}>
                          <ChevronRightIcon />
                        </Box>
                      </HStack>
                    </Stack>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Stack>  
      } />
    </ProfileLayout>
  );
}; 

export default Profile;
