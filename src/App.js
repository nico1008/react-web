import React from 'react';
import { useColorMode } from '@chakra-ui/color-mode';
import { IconButton } from '@chakra-ui/button';
import { Flex,VStack,Heading,Spacer }  from "@chakra-ui/layout";
import { FaSun, FaMoon, FaGithub,FaTelegram,FaBehance } from 'react-icons/fa'
import Header from './components/Header';
import Social from './components/Social';
import Profile from './components/Profile';

function App() {

  const { colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode ==="dark";

  return(
    <VStack p={5}>
      <Flex w="100%" mb="20px">
        <Heading ml ="8" mt={"1.5"} size="lg" fontWeight='Bold' color="violet">
          Nico1008
        </Heading>
      
      <Spacer>

      </Spacer>
      <IconButton ml={5} size="lg" bgGradient="linear(to-b, violet,blue.500 )" icon={<FaBehance/>} isRound='true' onClick={()=>window.open("https://www.behance.net/nico_1008")}  _hover={{ bgGradient: 'linear(to-t, #D91E98, #F2226E)',}}></IconButton>
      <IconButton ml={5} size="lg" bgGradient="linear(to-b, violet,blue.500 )" icon={<FaGithub/>} isRound='true' onClick={()=>window.open("https://github.com/nico1008")}  _hover={{ bgGradient: 'linear(to-t, #D91E98, #F2226E)',}}></IconButton>
      <IconButton ml={5} size="lg" bgGradient="linear(to-b, violet,blue.500 )" icon={<FaTelegram/>} isRound='true' onClick={()=>window.open("https://t.me/nico_1008k")}  _hover={{ bgGradient: 'linear(to-t, #D91E98, #F2226E)',}}></IconButton>
      <IconButton ml={20} size="lg" bgGradient="linear(to-b, violet,blue.500 )"  icon={isDark ? <FaSun/> :<FaMoon/>} isRound='true'  _hover={{ bgGradient: 'linear(to-t,green.400,green.200)',}} onClick={toggleColorMode}></IconButton>
      </Flex  >

      <Header ></Header>
      <Social></Social>
      <Profile></Profile>

    </VStack>
  )
}

export default App;
