import {React, useEffect} from 'react'
import { useColorMode } from '@chakra-ui/color-mode';
import { IconButton } from '@chakra-ui/button';
import { Flex,VStack,Heading,Spacer }  from "@chakra-ui/layout";
import { FaSun, FaMoon, FaGithub,FaTelegram,FaBehance } from 'react-icons/fa'
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { useBreakpointValue } from '@chakra-ui/react'
import WebFont from 'webfontloader';

import { motion} from 'framer-motion'


function App() {

  const { colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode ==="dark";

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Comfortaa', 'Roboto']
      }
    });
   }, []);
  
  return(
    <VStack p={5} pb={0}>
      <Flex as={motion.div} initial={{y: -100}} animate={{y:0}} transition={{delay:1}}
       w="100%" mb="35px" >
        <Heading fontFamily={"Comfortaa"} ml ="2" mt={"1.5"} size="lg" fontWeight='Bold' color="violet">
          Nico1008
        </Heading>
      
      <Spacer>

      </Spacer>
      <IconButton ml={5} size={useBreakpointValue(['md','md','md', 'lg', 'lg', 'lg'])}
      
        bgGradient="linear(to-b, violet,blue.500 )" icon={<FaBehance/>}
        isRound='true' onClick={()=>window.open("https://www.behance.net/nico_1008")}  
        _hover={{ bgGradient: 'linear(to-t,green.400,green.200)',}}></IconButton>

      <IconButton ml={5} size={useBreakpointValue(['md','md','md', 'lg', 'lg', 'lg'])}

        bgGradient="linear(to-b, violet,blue.500 )" icon={<FaGithub/>} 
        isRound='true' onClick={()=>window.open("https://github.com/nico1008")}  
        _hover={{ bgGradient: 'linear(to-t,green.400,green.200)',}}></IconButton>

      <IconButton ml={5} size={useBreakpointValue(['md','md','md', 'lg', 'lg', 'lg'])}

        bgGradient="linear(to-b, violet,blue.500 )" icon={<FaTelegram/>}
        isRound='true' onClick={()=>window.open("https://t.me/nico_1008k")} 
        _hover={{ bgGradient: 'linear(to-t,green.400,green.200)',}}></IconButton>

      <IconButton as={motion.div} whileHover={{rotate:360}} 
        ml={[ "5" , "5" , "5" , "20" , "20" , "20"]}
        size={useBreakpointValue(['md','md','md', 'lg', 'lg', 'lg'])}
        bgGradient="linear(to-b, violet,blue.500 )" 
        icon={isDark ? <FaSun/> :<FaMoon/>} isRound='true'  
        _hover={{ bgGradient: 'linear(to-t,green.400,green.200)', cursor: "pointer"}} 
        onClick={toggleColorMode}></IconButton>
        
      </Flex  >

      <Header ></Header>

      <Projects></Projects>

     <Footer  ></Footer>

    </VStack>
  )
}

export default App;
