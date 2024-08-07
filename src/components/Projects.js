import {React, useEffect} from 'react'
import { Flex, Box, Text } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/icon';
import { FaPython } from 'react-icons/fa'
import {GiPencilBrush} from 'react-icons/gi'
import { useColorMode } from '@chakra-ui/color-mode';
import { motion} from 'framer-motion'
import WebFont from 'webfontloader';


function Projects() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Comfortaa', 'Rubik']
      }
    });
  }, []);

  return (
    <Flex direction={['column', 'column', 'column', 'row', 'row', 'row']} 
          w="100%" maxWidth={{ base: "100vh", md:"130vh",lg:"165vh",xl:"13-vh"}}>

      <Box alignSelf={"center"} py="16">

        <Text fontFamily={"Comfortaa"} fontWeight={"bold"} fontSize={["3xl", "3xl", "3xl", "6xl", "6xl", "6xl"]} align={"center"}>
          Here are some of my projects:
        </Text>

        <Flex direction={['column', 'column', 'column', 'row', 'row', 'row']} mt={8}>

          <Flex as={motion.div} whileHover={{scale:1.2, boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)", cursor: "pointer"}} whileTap={{ scale: 1.1 }}
                rounded={"3xl"} direction="column" mt={"4"} ml={[2, 2, 2, 4, 4, 4]}  
                bg="blue.500" h="40vh" w="40vh" justify={"flex-end"} onClick={()=>window.open("https://github.com/nico1008/paint2code")}>

            <Icon color={isDark ? "gray.200" : "black"} p="4" as={FaPython} w="12vh" h="12vh" />
            <Text color={isDark ? "gray.200" : "black"} p="4" fontSize={"4xl"} fontFamily={"Rubik"}> HTML Generator</Text>

          </Flex>

          <Flex as={motion.div} whileHover={{scale:1.2, boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)", cursor: "pointer"}} whileTap={{ scale: 1.1 }}
                rounded={"3xl"} direction="column" mt={"4"} ml={[2, 2, 2, 4, 4, 4]} 
                bg="purple" h="40vh" w="40vh" justify={"flex-end"} onClick={()=>window.open("https://github.com/nico1008/Mushrooms")}>

            <Icon color={isDark ? "gray.200" : "black"} p="4" as={FaPython} w="12vh" h="12vh" />
            <Text color={isDark ? "gray.200" : "black"} p="4" fontSize={"4xl"} fontFamily={"Rubik"}> Mushroom classifier</Text>

          </Flex>

          <Flex as={motion.div} whileHover={{scale:1.2, boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)", cursor: "pointer"}} whileTap={{ scale: 1.1 }}
                rounded={"3xl"} direction="column" mt={"4"} ml={[2, 2, 2, 4, 4, 4]}  
                bg="blueviolet" h="40vh" w="40vh" justify={"flex-end"} onClick={()=>window.open("https://github.com/nico1008/TwitchSentiment")}>

            <Icon color={isDark ? "gray.200" : "black"} p="4" as={FaPython} w="12vh" h="12vh" />
            <Text color={isDark ? "gray.200" : "black"} p="4" fontSize={"4xl"} fontFamily={"Rubik"}> Twitch sentiment</Text>

          </Flex>

          <Flex as={motion.div} whileHover={{scale:1.2, boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)", cursor: "pointer"}} whileTap={{ scale: 1.1 }}
                rounded={"3xl"} direction="column" mt={"4"} ml={[2, 2, 2, 4, 4, 4]}
                bg="orange.300" h="40vh" w="40vh" justify={"flex-end"} onClick={()=>window.open("https://www.behance.net/nico_1008")}>

            <Icon color={isDark ? "gray.200" : "black"} p="4" as={GiPencilBrush} w="12vh" h="12vh" />
            <Text color={isDark ? "gray.200" : "black"} p="4" fontSize={"4xl"} fontFamily={"Rubik"}> Art</Text>

          </Flex>

        </Flex>

      </Box>

    </Flex>
  );
}

export default Projects;