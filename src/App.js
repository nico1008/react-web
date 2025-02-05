import React, { Suspense } from 'react'
import { ChakraProvider, Container, VStack, Spinner } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

const HeaderLazy = React.lazy(() => import('./components/Header'))
const ProjectsLazy = React.lazy(() => import('./components/Projects'))
const FooterLazy = React.lazy(() => import('./components/Footer'))
const NavbarLazy = React.lazy(() => import('./components/Navbar'))
const AnimationLazy = React.lazy(() => import('./components/Dice'))
const TimelineLazy = React.lazy(() => import('./components/Timeline'))

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="90%" p={0} centerContent>
        <Suspense fallback={
          <Container centerContent>
            <Spinner size="xl" thickness="4px" speed="0.65s" />
          </Container>
        }>
          <VStack spacing={1} w="100%" minH="100vh" justify="space-between">
            <NavbarLazy />
            <HeaderLazy />
            <ProjectsLazy />
            <TimelineLazy />
            <AnimationLazy />
            <FooterLazy />
          </VStack>
        </Suspense>
      </Container>
    </ChakraProvider>
  )
}

export default App
