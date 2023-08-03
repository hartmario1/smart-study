import { Box, Button, Center, Divider, Heading, HStack, Image, Img, Input, Stack, Text } from "@chakra-ui/react";
import IndexCard from "../components/IndexCard";
import IndexLayout from "../components/Layouts/index";
import { GiTeacher, GiBlackBook } from 'react-icons/gi';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { IoSchoolOutline } from 'react-icons/io5';
import ChakraBox from "../components/ChakraBox";
import QuestionsCard from "../components/QuestionsCard";
import useTranslation from 'next-translate/useTranslation';
import { MdSubject } from 'react-icons/md';
import { AiOutlineInteraction } from 'react-icons/ai'; 

const HomePage = () => {
  const { t, lang } = useTranslation('common');

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
              paddingTop="5">{t('title1')}</Heading>
            <Text fontSize='xl' color="blackAlpha.700">
              {t('description1')}
            </Text>
            <Box paddingTop="5">
              <ChakraBox
                  whileTap={{ scale: 0.9 }}
                  opacity="1">
                <Button w="100%" borderRadius="2xl" backgroundColor="purple" _hover={{ bg: "hoverpurple" }} color="white">{t('join')}</Button>
              </ChakraBox>
            </Box>
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
              paddingBottom="2">
                {t('title2')}
            </Heading>
            <Text paddingBottom="4" fontSize={{ base: 'lg', sm: 'xl' }}>
              {t('description2')}
            </Text>
            <ChakraBox
                whileTap={{ scale: 0.9 }}
                opacity="1">
              <Button w="100%" borderRadius="2xl" backgroundColor="purple" _hover={{ bg: "hoverpurple" }} color="white">{t('join')}</Button>
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
          textAlign="center">
            {t('cardSectionTitle')}
        </Heading>
        <Text paddingBottom="6" fontSize={{ base: 'lg', sm: 'xl' }} maxWidth={900} align="center">
          {t('cardSectionDescription')}     
        </Text>
        <Stack direction={['column', 'row']} spacing="20px">
          <IndexCard title={t("cardTitle1")}
            content={t("cardDescription1")}
            featureIcon={<MdSubject size={35} color="#2D3748" />} />
          <IndexCard title={t("cardTitle2")}
            content={t("cardDescription2")}
            featureIcon={<AiOutlineInteraction size={33} color="#2D3748" />} />
          <IndexCard title={t("cardTitle3")}
            content={t("cardDescription3")}
            featureIcon={<GiTeacher size={35} color="#2D3748" />} />
        </Stack>
      </Center>
      <Center paddingBottom="12">
        <Stack direction={['column', 'row']} spacing="20px">
          <IndexCard title={t("cardTitle4")}
            content={t("cardDescription4")}
            featureIcon={<GiBlackBook size={35} color="#2D3748" />} />
          <IndexCard title={t("cardTitle5")}
            content={t("cardDescription5")}
            featureIcon={<FaRegMoneyBillAlt size={35} color="#2D3748" />} />
          <IndexCard title={t("cardTitle6")}
            content={t("cardDescription6")}
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
              paddingBottom="2">
                {t('title3')}
            </Heading>
            <Text paddingBottom="6" fontSize={{ base: 'lg', sm: 'xl' }}>
              {t('description3')}
            </Text>
            <ChakraBox
                whileTap={{ scale: 0.9 }}
                opacity="1">
              <Button w="100%" borderRadius="2xl" backgroundColor="purple" _hover={{ bg: "hoverpurple" }} color="white">{t('join')}</Button>
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
          textAlign="center">
            {t('questionsTitle')}
        </Heading>
        <Stack direction={['column', 'row']} spacing={{ base: '0px', sm: '40px' }}>
          <QuestionsCard
            title={t('question1')}
            content={t('answer1')} />
          <QuestionsCard
            title={t('question2')}
            content={t('answer2')} />
          <QuestionsCard
            title={t('question3')}
            content={t('answer3')} />
        </Stack>
        <Stack direction={['column', 'row']} spacing={{ base: '0px', sm: '40px' }}>
        <QuestionsCard
            title={t('question4')}
            content={t('answer4')} />
          <QuestionsCard
            title={t('question5')}
            content={t('answer5')} />
          <QuestionsCard
            title={t('question6')}
            content={t('answer6')} />
        </Stack>
        <Stack direction={['column', 'row']} spacing={{ base: '0px', sm: '40px' }}>
        <QuestionsCard
            title={t('question7')}
            content={t('answer7')} />
          <QuestionsCard
            title={t('question8')}
            content={t('answer8')} />
        </Stack>
      </Center>
      <Divider />
    </IndexLayout>
  )
}

export default HomePage;