import { Box } from "@chakra-ui/react";
import StandardLayout from "../components/Layouts";
import { Image, keyframes, usePrefersReducedMotion } from '@chakra-ui/react'
import logo from '../public/logo.jpg'

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const HomePage = () => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`

  return(
    <StandardLayout>
      <Image animation={animation} src={logo} />
    </StandardLayout>
  )
}

export default HomePage;