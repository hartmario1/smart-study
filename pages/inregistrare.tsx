import { Box, Button, Center, Checkbox, Input, InputGroup, InputRightElement, Link, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"
import { MdSupervisorAccount } from 'react-icons/md';
import NextLink from 'next/link'
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';

interface CreateAccount {
  email: string;
  password: string;
  acceptTerms: boolean;
}

const SignUp = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Formik<CreateAccount> initialValues = {{ email: '', password: '', acceptTerms: false }}
      onSubmit = {async values => {
        console.log(values.email, values.password)
      }}
      validationSchema = {Yup.object().shape({
        email: Yup.string().required('This field is required!'),
        password: Yup.string().required('This field is required!'),
        acceptTerms: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required!')
      })}>
      {({ handleSubmit, errors, touched }) => (
        <Form>
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
              <Stack paddingY="5">
                <Box paddingBottom="5">
                  <Field name = "email">
                    {({ field }: { field: any }) => (
                      <Input
                        focusBorderColor='purple'
                        placeholder='Email Address'
                        size="lg"
                        borderRadius="lg"
                        {...field}
                      />
                    )}
                  </Field>
                  {errors.email && touched.email
                    ? (
                      <Text paddingTop={2} paddingLeft="2" fontWeight="semibold" color = "red.400">
                        {errors.email}
                      </Text>
                    )
                    : null}
                </Box>
                <Box paddingBottom="2">
                  <Field name = "password">
                    {({ field }: { field: any }) => (
                      <InputGroup size='lg'>
                        <Input
                          pr='4.5rem'
                          type={show ? 'text' : 'password'}
                          placeholder='Password'
                          focusBorderColor='purple'
                          borderRadius="lg"
                          {...field}
                        />
                        <InputRightElement width='4.5rem'>
                          <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    )}
                  </Field>
                  {errors.password && touched.password
                    ? (
                      <Text paddingTop={2} paddingLeft="2" fontWeight="semibold" color = "red.400">
                        {errors.password}
                      </Text>
                    )
                    : null}
                </Box>
                <Field as={Checkbox} size="lg" name="acceptTerms">
                  <Text fontSize="md">
                    Sunt de acord cu {' '}
                    <Link href="/" as={NextLink} borderRadius="2xl" color="purple">termenii și condițilele</Link>
                  </Text>
                </Field>
                {errors.acceptTerms && touched.acceptTerms
                    ? (
                      <Text paddingLeft="2" fontWeight="semibold" color = "red.400">
                        {errors.acceptTerms}
                      </Text>
                    )
                    : null}
              </Stack>
              <Stack spacing={2} paddingY='5'>
                <Button
                  onClick = {event => handleSubmit(event as any)}
                  w="100%"
                  borderRadius="2xl"
                  backgroundColor='purple'
                  _hover={{ bg: "hoverpurple" }}
                  color="white">Înregistrare</Button>
              </Stack>
            </Box>
          </Center>
        </Form>
      )}  
    </Formik>
  )
}

export default SignUp;
