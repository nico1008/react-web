import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Flex, Box, Heading, Text } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/icon';
import {SiCplusplus } from 'react-icons/si'
import {FaJava, FaPython } from 'react-icons/fa'
import {GiPencilBrush} from 'react-icons/gi'
import { useColorMode } from '@chakra-ui/color-mode';



export default function () {

  const [isNotSmallerScreen]=useMediaQuery("(min-width:600px)");
  const {colorMode} = useColorMode();
  const isDark = colorMode ==="dark";

  return (
    <Flex direction={isNotSmallerScreen ? "row": "column"} w="100%" maxWidth={{ base: "100vh", md:"130vh",lg:"165vh",xl:"13-vh"   }} >

      <Box alignSelf={"center"}   py="16">
        <Text fontWeight={"bold"} fontSize={isNotSmallerScreen ? "6xl": "3xl"} align={"center"}>
          Here are some of my projects:
        </Text>
        <Flex direction={isNotSmallerScreen ? "row":"column"} mt={8}>
          <Flex rounded={"2xl"} direction="column" mt={"4"} bg="blue.400" h="40vh" w="40vh" justify={"flex-end"}>

            <Icon color={isDark ? "gray.200" : "black"} p="4" as={SiCplusplus} w="24" h="24"></Icon>
              <Text color={isDark ? "gray.200" : "black"} p="4" fontSize={"xl"} fontWeight="semibold"> C++</Text>

          </Flex>
          
          <Flex rounded={"2xl"} direction="column" mt={"4"}  ml={isNotSmallerScreen ? 4:0}  bg="pink.200" h="40vh" w="40vh" justify={"flex-end"}>

            <Icon color={isDark ? "gray.200" : "black"} p="4" as={FaJava} w="24" h="24"></Icon>
              <Text color={isDark ? "gray.200" : "black"} p="4" fontSize={"xl"} fontWeight="semibold"> Java</Text>

          </Flex>

          <Flex rounded={"2xl"} direction="column" mt={"4"} ml={isNotSmallerScreen ? 4:0}  bg="blue.400" h="40vh" w="40vh" justify={"flex-end"}>

            <Icon color={isDark ? "gray.200" : "black"} p="4" as={FaPython} w="24" h="24"></Icon>
              <Text color={isDark ? "gray.200" : "black"} p="4" fontSize={"xl"} fontWeight="semibold"> Python</Text>

          </Flex>

          <Flex rounded={"2xl"} direction="column" mt={"4"} ml={isNotSmallerScreen ? 4:0}  bg="orange.300" h="40vh" w="40vh" justify={"flex-end"}>

            <Icon ccolor={isDark ? "gray.200" : "black"} p="4" as={GiPencilBrush} w="24" h="24"></Icon>
              <Text color={isDark ? "gray.200" : "black"} p="4" fontSize={"xl"} fontWeight="semibold"> Art</Text>

          </Flex>
        
        </Flex>

      </Box>

      

    </Flex>
  )
}
