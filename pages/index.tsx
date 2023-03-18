import { Box, Button, Center, Heading, HStack, Image, Input, Stack, Text } from "@chakra-ui/react";
import IndexCard from "../components/IndexCard";
import IndexLayout from "../components/Layouts/index";
import { GiBookCover, GiTeacher, GiBlackBook } from 'react-icons/gi';
import { HiOutlineHomeModern } from 'react-icons/hi2';
import { BsCalendar4Week } from 'react-icons/bs';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { IoSchoolOutline } from 'react-icons/io5';

const HomePage = () => {
  return(
    <IndexLayout>
        <Center paddingBottom={{ base: '0px', sm: '100px' }}>
          <Stack width = {{ base: 'full', md: '70%' }} minW = "350px" paddingX = "20px" 
            align="center" direction={['column-reverse', 'row']} padding="5" spacing={{ base: '20px', sm: '75px' }}> 
            <Box maxW="37rem" justifySelf="center">
              <Heading
                fontWeight={900}
                letterSpacing="-0.08rem"
                mb={4}
                fontSize={{ base: '3xl', sm: '5xl' }}
                color="blackAlpha.800"
                paddingTop="5">Găsește un profesor online care să te ajute să reușești!</Heading>
              <Text fontSize='xl' color="blackAlpha.700">
                Obțineți îndrumări online de la profesori experți și preia controlul succesului tău.
              </Text>
              <HStack paddingTop="6" flexDirection={['column', 'row']}>
                <Box paddingBottom={{ base: '10px', sm: '0px' }} w="100%">
                  <Input type='email' placeholder="Introduce emailul..."  />
                </Box>
                <Button w="300px" borderRadius="2xl" backgroundColor="purple" _hover={{ bg: "hoverpurple" }} color="white">Înscrie-te la newsletter</Button>
              </HStack>
            </Box>
            <Box>
              <Image src = "/City.png" maxW={{ base: '300px', sm: '650px' }} />
            </Box>
          </Stack>
        </Center>

        <Center backgroundColor="bg">
          <Stack 
           align="center" direction={['column', 'row']} padding="5" spacing={{ base: '20px', sm: '75px' }}> 
            <Box>
              <Image src = "/lesson.png" maxW={{ base: '300px', sm: '500px' }} />
            </Box>
            <Box align="center" maxW="37rem" justifySelf="center">
            <Heading
              fontWeight={800}
              letterSpacing="-0.08rem"
              mb={4}
              fontSize={{ base: '3xl', sm: '4xl' }}
              color="blackAlpha.800"
              paddingBottom="2">Suntem aici pentru a te ajuta!
              </Heading>
              <Text paddingBottom="4" fontSize={{ base: 'lg', sm: '2xl' }}>
                Platforma noastră de meditații online facilitează conectarea cu profesorii și programarea sesiunilor la un moment potrivit pentru tine sau copilul tău.     
              </Text>
              <Button w="300px" borderRadius="2xl" backgroundColor="purple" _hover={{ bg: "hoverpurple" }} color="white">Înscrie-te acum</Button>
            </Box>
          </Stack>
        </Center>

        <Center paddingTop="10" paddingBottom={5} flexDirection={['column', 'column']}>
          <Heading
            fontWeight={800}
            letterSpacing="-0.08rem"
            mb={4}
            fontSize={{ base: '3xl', sm: '4xl' }}
            color="blackAlpha.800"
            paddingTop="5"
            textAlign="center">Timpul perfect pentru a învăța!
          </Heading>
          <Text paddingBottom="6" fontSize={{ base: 'lg', sm: 'xl' }} maxWidth={900} align="center">
            Platforma noastră de meditații online facilitează conectarea cu profesorii și programarea sesiunilor la un moment potrivit pentru tine sau copilul tău.     
          </Text>
          <Stack direction={['column', 'row']} spacing="20px">
            <IndexCard title="Învățare flexibilă"
              content="Platforma noastră de îndrumare online vă permite să învățați de oriunde, astfel încât să puteți învăța din mers sau din confortul propriei case."
              featureIcon={<HiOutlineHomeModern size={35} color="#2D3748" />} />
            <IndexCard title="Program convenabil"
              content="Programeză cu ușurință sesiuni de îndrumare la un moment potrivit pentru tine sau copilul tău. Puteți programa sesiuni în avans sau la cerere."
              featureIcon={<BsCalendar4Week size={33} color="#2D3748" />} />
            <IndexCard title="Profesori de calitate"
              content="Analizăm și verificăm cu atenție profesorii noștri pentru a ne asigura că au expertiza și abilitățile de comunicare necesare."
              featureIcon={<GiTeacher size={35} color="#2D3748" />} />
          </Stack>
        </Center>
        <Center paddingBottom="12">
          <Stack direction={['column', 'row']} spacing="20px">
            <IndexCard title="Învățare personalizată"
              content="Profesorii noștri lucrează cu tine individual pentru a dezvolta un plan de învățare personalizat care se potrivește nevoilor și stilului tău unic de învățare."
              featureIcon={<GiBlackBook size={35} color="#2D3748" />} />
            <IndexCard title="Tarife accesibile"
              content="Credem că toată lumea merită acces la educație de calitate, motiv pentru care oferim tarife competitive și accesibile pentru serviciile noastre de tutorat."
              featureIcon={<FaRegMoneyBillAlt size={35} color="#2D3748" />} />
            <IndexCard title="Performanță academică îmbunătățită"
              content="Cu ajutorul nostru, veți observa o îmbunătățire a performanței academice. Profesorii noștri sunt dedicați să vă ajute să vă atingeți obiectivele."
              featureIcon={<IoSchoolOutline size={35} color="#2D3748" />} />
          </Stack>
        </Center>

        <Center backgroundColor="bg">
          <Stack 
           align="center" direction={['column', 'row']} padding="5" spacing={{ base: '20px', sm: '75px' }}> 
            <Box>
              <Image src = "/lesson.png" maxW={{ base: '300px', sm: '500px' }} />
            </Box>
            <Box align="center" maxW="37rem" justifySelf="center">
              <Heading paddingBottom="2">Suntem aici pentru a te ajuta!</Heading>
              <Text paddingBottom="4" fontSize={{ base: 'lg', sm: '2xl' }}>
                Platforma noastră de meditații online facilitează conectarea cu profesorii și programarea sesiunilor la un moment potrivit pentru tine sau copilul tău.     
              </Text>
              <Button w="300px" borderRadius="2xl" backgroundColor="purple" _hover={{ bg: "hoverpurple" }} color="white">Înscrie-te acum</Button>
            </Box>
          </Stack>
        </Center>
    </IndexLayout>
  )
}

export default HomePage;