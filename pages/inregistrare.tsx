import { Box, Button, Center, Checkbox, FormControl, FormLabel, Image, Input, InputGroup, InputRightElement, Link, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"
import NextLink from 'next/link'
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { useRouter } from "next/router";

interface CreateAccount {
  email: string;
  password: string;
  acceptTerms: boolean;
}

const SignUp = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const router = useRouter();

  return (
    <Formik<CreateAccount> initialValues = {{ email: '', password: '', acceptTerms: false }}
      onSubmit = {async values => {
        console.log(values.email, values.password)
        router.push('/autentificare')
      }}
      validationSchema = {Yup.object().shape({
        email: Yup.string().required('This field is required!'),
        password: Yup.string().required('This field is required!'),
        acceptTerms: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required!')
      })}>
      {({ handleSubmit, errors, touched }) => (
        <Form>
          <Center h="100vh"
            bgColor="blackAlpha.100" flexDirection="column">
              <Image
                  objectFit='cover'
                  maxW={{ base: '200px', sm: '230px' }}
                  src='/smartstudy.png'
                  alt="SmartStudy" />
            <Box
              minWidth = {{ base: '95%', md: '2xl' }}
              maxW='sm'              
              overflow='hidden'
              paddingX="5"
              paddingTop="10"
              paddingBottom="5">
              <Center flexDirection="column" paddingBottom="5">
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
                      <FormControl>
                      <FormLabel paddingLeft="2">Email</FormLabel>
                      <Input
                        focusBorderColor='purple'
                        placeholder='Email Address'
                        size="lg"
                        borderRadius="md"
                        borderColor="purple"
                        {...field}
                      />
                    </FormControl>
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
                      <FormControl>
                      <FormLabel paddingLeft="2">Parolă</FormLabel>
                      <InputGroup size='lg'>
                        <Input
                          pr='4.5rem'
                          type={show ? 'text' : 'password'}
                          placeholder='Password'
                          focusBorderColor='purple'
                          borderRadius="md"
                          borderColor="purple"
                          {...field}
                        />
                        <InputRightElement width='4.5rem'>
                          <Button h='1.75rem' size='sm' onClick={handleClick} bgColor="purple" color="white">
                            {show ? 'Hide' : 'Show'}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
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
                  borderRadius="lg"
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
