import React from 'react'
import { Flex, Box, Text } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/icon';
import {SiCplusplus } from 'react-icons/si'
import {FaJava, FaPython } from 'react-icons/fa'
import {GiPencilBrush} from 'react-icons/gi'
import { useColorMode } from '@chakra-ui/color-mode';
import { motion} from 'framer-motion'



export default function () {

  const {colorMode} = useColorMode();
  const isDark = colorMode ==="dark";
 
  return (
    <Flex direction={['column', 'column', 'column', 'row', 'row', 'row']} 
    w="100%" maxWidth={{ base: "100vh", md:"130vh",lg:"165vh",xl:"13-vh"}}>

      <Box alignSelf={"center"}   py="16">

        <Text fontFamily={"Comfortaa"} fontWeight={"bold"} fontSize={[ "3xl", "3xl","3xl","6xl","6xl","6xl"]} align={"center"}>
          Here are some of my projects:
        </Text>

        <Flex direction={['column', 'column', 'column', 'row', 'row', 'row']} mt={8}>

          <Flex as={motion.div} whileHover={{scale:1.2,boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)", cursor: "pointer"}} whileTap={{ scale: 1.1 }} ml={[ 2,2,2,4,4,4]} 
            rounded={"3xl"} direction="column" mt={"4"} bg="blue.400" h="40vh" w="40vh" 
            justify={"flex-end"} onClick={()=>window.open("https://github.com/nico1008")} >

            <Icon color={isDark ? "gray.200" : "black"} p="4" as={SiCplusplus} w="12vh" h="12vh" ></Icon>

            <Text color={isDark ? "gray.200" : "black"} p="4" fontSize={"4xl"} fontWeight="semibold"> C++</Text>

          </Flex>
          
          <Flex as={motion.div} whileHover={{scale:1.2,boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)", cursor: "pointer"}} whileTap={{ scale: 1.1  }}
           rounded={"3xl"} direction="column" mt={"4"}  ml={[ 2,2,2,4,4,4]} 
           bg="pink.200" h="40vh" w="40vh" justify={"flex-end"} onClick={()=>window.open("https://github.com/nico1008")}>

            <Icon color={isDark ? "gray.200" : "black"} p="4" as={FaJava} w="12vh" h="12vh"></Icon>

            <Text color={isDark ? "gray.200" : "black"} p="4" fontSize={"4xl"} fontWeight="semibold"> Java</Text>

          </Flex>

          <Flex as={motion.div} whileHover={{scale:1.2,boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)", cursor: "pointer"}} whileTap={{ scale: 1.1}}
            rounded={"3xl"} direction="column" mt={"4"} ml={[ 2,2,2,4,4,4]}  
            bg="blue.500" h="40vh" w="40vh" justify={"flex-end"} onClick={()=>window.open("https://github.com/nico1008")}>

            <Icon color={isDark ? "gray.200" : "black"} p="4" as={FaPython} w="12vh" h="12vh"></Icon>

            <Text color={isDark ? "gray.200" : "black"} p="4" fontSize={"4xl"} fontWeight="semibold"> Python</Text>

          </Flex>

          <Flex as={motion.div} whileHover={{scale:1.2,boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)", cursor: "pointer"}} whileTap={{ scale: 1.1 }}
            rounded={"3xl"} direction="column" mt={"4"} ml={[ 2,2,2,4,4,4]}
            bg="orange.300" h="40vh" w="40vh" justify={"flex-end"} onClick={()=>window.open("https://www.behance.net/nico_1008")}>

            <Icon color={isDark ? "gray.200" : "black"} p="4" as={GiPencilBrush} w="12vh" h="12vh"></Icon>

            <Text color={isDark ? "gray.200" : "black"} p="4" fontSize={"4xl"} fontWeight="semibold"> Art</Text>

          </Flex>
        
        </Flex>

      </Box>

    </Flex>
  )
}
