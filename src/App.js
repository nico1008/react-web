import React from 'react';
import { useColorMode } from '@chakra-ui/color-mode';
import { IconButton } from '@chakra-ui/button';
import { Flex,VStack,Heading,Spacer }  from "@chakra-ui/layout";
import { FaSun, FaMoon, FaGithub,FaTelegram,FaVk } from 'react-icons/fa'
import Header from './components/Header';
import Social from './components/Social';
import Profile from './components/Profile';

function App() {

  const { colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode ==="dark";

  return(
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml ="8" mt={"1.5"} size="lg" fontWeight='semibold' color="violet">
          Nico1008
        </Heading>
      
      <Spacer>

      </Spacer>
      <IconButton ml={5} size="lg" bgGradient="linear(to-b, violet,blue.500 )" icon={<FaVk/>} isRound='true' onClick  _hover={{ bgGradient: 'linear(to-t, #D91E98, #F2226E)',}}></IconButton>
      <IconButton ml={5} size="lg" bgGradient="linear(to-b, violet,blue.500 )" icon={<FaGithub/>} isRound='true' onClick  _hover={{ bgGradient: 'linear(to-t, #D91E98, #F2226E)',}}></IconButton>
      <IconButton ml={5} size="lg" bgGradient="linear(to-b, violet,blue.500 )" icon={<FaTelegram/>} isRound='true' onClick  _hover={{ bgGradient: 'linear(to-t, #D91E98, #F2226E)',}}></IconButton>
      <IconButton ml={20} size="lg" bgGradient="linear(to-b, violet,blue.500 )"  icon={isDark ? <FaSun/> :<FaMoon/>} isRound='true'  _hover={{ bgGradient: 'linear(to-t,green.400,green.200)',}} onClick={toggleColorMode}></IconButton>
      </Flex>

      <Header></Header>
      <Social></Social>
      <Profile></Profile>

    </VStack>
  )
}

export default App;
