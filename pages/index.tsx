import { Box, Button, Center, Divider, Heading, HStack, Image, Img, Input, Stack, Text } from "@chakra-ui/react";
import IndexCard from "../components/IndexCard";
import IndexLayout from "../components/Layouts/index";
import { GiTeacher, GiBlackBook } from 'react-icons/gi';
import { HiOutlineHomeModern } from 'react-icons/hi2';
import { BsCalendar4Week } from 'react-icons/bs';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { IoSchoolOutline } from 'react-icons/io5';
import ChakraBox from "../components/ChakraBox";
import QuestionsCard from "../components/QuestionsCard";

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
                <Input focusBorderColor='purple' type='email' placeholder="Introduce emailul..."  />
              </Box>
              <ChakraBox
                whileTap={{ scale: 0.9 }}
                opacity="1">
              <Button w="300px" borderRadius="2xl" backgroundColor="purple" _hover={{ bg: "hoverpurple" }} color="white">Înscrie-te la newsletter</Button>
            </ChakraBox>
            </HStack>
          </Box>
          <Box>
            <Image src = "/teacher_purple.png" maxW={{ base: '300px', sm: '650px' }} alt="teacher_purple" />
          </Box>
        </Stack>
      </Center>

      <Center backgroundColor="bg">
        <Stack 
          align="center" direction={['column', 'row']} padding="5" spacing={{ base: '20px', sm: '75px' }}> 
          <Box>
            <Img borderRadius="10" src = "/board_purple.jpg" maxW={{ base: '300px', sm: '500px' }} />
          </Box>
          {/* @ts-ignore */}
          <Box align="center" maxW="37rem" justifySelf="center">
            <Heading
              fontWeight={800}
              letterSpacing="-0.08rem"
              mb={4}
              fontSize={{ base: '3xl', sm: '4xl' }}
              color="blackAlpha.800"
              paddingBottom="2">Suntem aici pentru a te ajuta!
            </Heading>
            <Text paddingBottom="4" fontSize={{ base: 'lg', sm: 'xl' }}>
              Credem că toată lumea merită acces la o educație de calitate, iar platforma noastră de îndrumare online este concepută pentru a face asta o realitate. Indiferent dacă sunteți un student care se luptă cu o materie dificilă sau un adult care dorește să învețe o nouă abilitate, suntem aici pentru a vă ajuta. Încercați astăzi platforma noastră și vedeți cum tutorii noștri vă pot ajuta să vă atingeți întregul potențial!
            </Text>
            <ChakraBox
                whileTap={{ scale: 0.9 }}
                opacity="1">
              <Button w="100%" borderRadius="2xl" backgroundColor="purple" _hover={{ bg: "hoverpurple" }} color="white">Înscrie-te acum</Button>
            </ChakraBox>
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
            <Image src = "/City_purple.png" maxW={{ base: '300px', sm: '500px' }} alt="teacher_purple" />
          </Box>
          {/* @ts-ignore */}
          <Box align="center" maxW="37rem" justifySelf="center">
            <Heading
              fontWeight={800}
              letterSpacing="-0.08rem"
              mb={4}
              fontSize={{ base: '3xl', sm: '4xl' }}
              color="blackAlpha.800"
              paddingBottom="2">Dorești sa devii profesor?
            </Heading>
            <Text paddingBottom="6" fontSize={{ base: 'lg', sm: 'xl' }}>
              Alăturați-vă platformei noastre de îndrumare online și extindeți-vă ca educator! Veți avea oportunitatea de a intra în legătură cu studenți din întreaga țară, de a oferi instruire personalizată și de a avea un impact pozitiv asupra succesului lor academic. Interfața noastră ușor de utilizat și programarea flexibilă fac ca instruirea să fie ușoară și convenabilă. Nu ratați această șansă de a vă împărtăși experiența și de a ajuta studenții să-și atingă potențialul maxim!     
            </Text>
            <ChakraBox
                whileTap={{ scale: 0.9 }}
                opacity="1">
              <Button w="100%" borderRadius="2xl" backgroundColor="purple" _hover={{ bg: "hoverpurple" }} color="white">Înscrie-te acum</Button>
            </ChakraBox>
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
          textAlign="center">Întrebări frecvente
        </Heading>
        <Stack direction={['column', 'row']} spacing={{ base: '0px', sm: '40px' }}>
          <QuestionsCard
            title="Cum funcționează platforma de tutorat online?"
            content="Platforma noastră de îndrumare online vă pune în legătură cu profesori calificați care vă pot oferi instruire personalizată, individuală, într-o varietate de subiecte. Puteți programa sesiuni la un moment potrivit pentru dvs. și puteți comunica cu tutorele dvs. prin video, audio sau chat." />
          <QuestionsCard
            title="Ce subiecte sunt oferite pe platformă?"
            content="Oferim îndrumare într-o gamă largă de materii, inclusiv matematică, știință, arte lingvistice, studii sociale, pregătire pentru teste și multe altele. Puteți răsfoi lista noastră de tutori și discipline pentru a găsi tutorele potrivit nevoilor dumneavoastră." />
          <QuestionsCard
            title="Cum programez o sesiune de tutorat cu un profesor?"
            content="Programarea unei sesiuni de tutorat este ușoară! Pur și simplu răsfoiți lista noastră de profesori și domenii, selectați un tutor și programați o sesiune la momentul potrivit pentru dvs. Puteți comunica cu tutorele dvs. prin video, audio sau chat în timpul sesiunii." />
        </Stack>
        <Stack direction={['column', 'row']} spacing={{ base: '0px', sm: '40px' }}>
          <QuestionsCard
            title="Cât durează sesiunile de tutorat și cât de des ar trebui să le programez?"
            content="Sesiunile de instruire durează de obicei 60 de minute, dar durata și frecvența sesiunilor pot fi personalizate pentru a satisface nevoile dvs. Tutorul tău va colabora cu tine pentru a dezvolta un plan personalizat de învățare care se potrivește programului și obiectivelor tale academice." />
          <QuestionsCard
            title="Ce se întâmplă dacă trebuie să anulez sau să reprogramez o sesiune de îndrumare?"
            content="Dacă trebuie să anulați sau să reprogramați o sesiune de îndrumare, pur și simplu contactați tutorele pentru a face aranjamente. Înțelegem că pot apărea circumstanțe neașteptate și vom colabora cu dvs. pentru a găsi o nouă oră de sesiune care să funcționeze pentru dvs." />
          <QuestionsCard
            title="Cum sunt gestionate plățile pe platformă?"
            content="Plățile pentru sesiunile de tutorat sunt gestionate în siguranță prin platforma noastră. Vi se va solicita să introduceți informațiile de plată atunci când vă programați sesiunea, iar noi ne vom ocupa de restul." />
        </Stack>
        <Stack direction={['column', 'row']} spacing={{ base: '0px', sm: '40px' }}>
          <QuestionsCard
            title="Prin ce este diferită experiența de îndrumare online de tutoratul în persoană?"
            content="Îndrumarea online vă permite să primiți instrucțiuni personalizate din confortul propriei case sau oriunde alegeți să învățați. Cu platforma noastră, puteți accesa servicii de îndrumare de înaltă calitate de oriunde, în orice moment și aveți flexibilitatea de a vă personaliza experiența de învățare pentru a vă satisface nevoile individuale." />
          <QuestionsCard
            title="Cine sunt tutorii de pe platformă și care sunt calificările lor?"
            content="Tutorii noștri sunt educatori cu experiență și cunoștințe care au trecut printr-un proces riguros de verificare pentru a se asigura că au expertiza și abilitățile de comunicare necesare pentru a oferi un tutorat eficient. Puteți vizualiza statisticile profesorilor noștri pentru a afla mai multe despre calificările și experiența lor de predare." />
        </Stack>
      </Center>
      <Divider />
    </IndexLayout>
  )
}

export default HomePage;