import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Flex, Box, Heading, Text } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/icon';
import {SiCplusplus } from 'react-icons/si'
import {DiJava,DiVisualstudio } from 'react-icons/di'
import {FaJava } from 'react-icons/fa'



export default function () {

  const [isNotSmallerScreen]=useMediaQuery("(min-width:600px)");

  return (
    <Flex direction={isNotSmallerScreen ? "row": "column"} w="100%" maxWidth={{ base: "100vh", md:"130vh",lg:"165vh",xl:"13-vh"   }} >

      <Box alignSelf={"center"}   py="16">
        <Text fontWeight={"bold"} fontSize="6xl" align={"center"}>
          Here are some of my projects:
        </Text>
        <Flex direction={isNotSmallerScreen ? "row":"column"} mt={8}>
          <Flex rounded={"xl"} direction="column" mt={"4"} bg="blue.400" h="40vh" w="40vh" justify={"flex-end"}>

            <Icon color={"white"} p="4" as={SiCplusplus} w="24" h="24"></Icon>
              <Text color="white" p="4" fontSize={"xl"} fontWeight="semibold"> forsen</Text>

          </Flex>
          
          <Flex rounded={"xl"} direction="column" mt={"4"}  ml={isNotSmallerScreen ? 4:0}  bg="pink.200" h="40vh" w="40vh" justify={"flex-end"}>

            <Icon color={"white"} p="4" as={SiCplusplus} w="24" h="24"></Icon>
              <Text color="white" p="4" fontSize={"xl"} fontWeight="semibold"> forsen</Text>

          </Flex>

          <Flex rounded={"xl"} direction="column" mt={"4"} ml={isNotSmallerScreen ? 4:0}  bg="blue.400" h="40vh" w="40vh" justify={"flex-end"}>

            <Icon color={"white"} p="4" as={SiCplusplus} w="24" h="24"></Icon>
              <Text color="white" p="4" fontSize={"xl"} fontWeight="semibold"> forsen</Text>

          </Flex>

          <Flex rounded={"xl"} direction="column" mt={"4"} ml={isNotSmallerScreen ? 4:0}  bg="orange.300" h="40vh" w="40vh" justify={"flex-end"}>

            <Icon color={"white"} p="4" as={SiCplusplus} w="24" h="24"></Icon>
              <Text color="white" p="4" fontSize={"xl"} fontWeight="semibold"> forsen</Text>

          </Flex>

          
        
        </Flex>

      </Box>

      

    </Flex>
  )
}
