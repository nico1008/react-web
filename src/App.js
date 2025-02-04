import React, { Suspense } from 'react'
import { ChakraProvider, Container, VStack, Spinner } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import Header from './components/Header'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

const HeaderLazy = React.lazy(() => import('./components/Header'))
const ProjectsLazy = React.lazy(() => import('./components/Projects'))
const FooterLazy = React.lazy(() => import('./components/Footer'))
const NavbarLazy = React.lazy(() => import('./components/Navbar'))

const LoadingFallback = () => (
  <Container centerContent>
    <Spinner size="xl" thickness="4px" speed="0.65s" />
  </Container>
)

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container
        maxW="90%"
        p={0}
        centerContent
      >
        <VStack
          spacing={1}
          w="100%"
          minH="100vh"
          justify="space-between"
        >
          <NavbarLazy />
          <HeaderLazy />
          <ProjectsLazy />
          <FooterLazy />
        </VStack>
      </Container>
    </ChakraProvider>
  )
}

export default App
