import { Box, Button, Center, Checkbox, Input, InputGroup, InputRightElement, Link, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"
import { MdSupervisorAccount } from 'react-icons/md';
import NextLink from 'next/link'

const SignUp = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Center h="100vh"
      bgGradient='linear(purple 0%, white 0%, purple 200%)'>
      <Box backgroundColor="white"
        minWidth = {{ base: '95%', md: '2xl' }}
        maxW='sm'
        borderWidth='1px'
        borderRadius='3xl'
        boxShadow="xl"
        overflow='hidden'
        paddingX="5"
        paddingTop="10"
        paddingBottom="5">
        <Center flexDirection="column" paddingBottom="5">
          <MdSupervisorAccount size={70} color="#6366f1" />
          <Text fontSize="xl" fontWeight="bold">Înregistrare</Text>
          <Text color="gray.500">
            Ai deja cont? {' '}
              <Link as={NextLink} color="purple" href="/autentificare">Autentificare</Link>
          </Text>
        </Center>
        <Stack paddingY="5" spacing={5}>
          <Input
            focusBorderColor='purple'
            placeholder='Email Address'
            size="lg"
            borderRadius="lg"
          />
          <InputGroup size='lg'>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Password'
              focusBorderColor='purple'
              borderRadius="lg"
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Checkbox size="lg" colorScheme="blackAlpha">
            <Text fontSize="md">
              Sunt de acord cu {' '}
              <Link href="/" as={NextLink} borderRadius="2xl" color="purple">termenii și condițilele</Link>
            </Text>
          </Checkbox>
        </Stack>
        <Stack spacing={2} paddingY='5'>
          <Button w="100%" borderRadius="2xl" backgroundColor='purple' _hover={{ bg: "hoverpurple" }} color="white">Înregistrare</Button>
        </Stack>
      </Box>
    </Center>
  )
}

export default SignUp;
