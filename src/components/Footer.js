import React from 'react'
import { IconButton } from '@chakra-ui/button';
import {  Stack, Circle, Flex, Box, Text,Spacer  } from '@chakra-ui/layout';
import { FaGithub,FaTelegram,FaBehance } from 'react-icons/fa'
import { useColorMode } from '@chakra-ui/color-mode';
import { useMediaQuery } from '@chakra-ui/media-query';

export default function Footer() {

     const { colorMode, toggleColorMode} = useColorMode();
     const isDark = colorMode ==="dark";
     const [isNotSmallerScreen]=useMediaQuery("(min-width:600px)");

  return (
     <Flex backgroundColor={isDark ? "#2953A6" : "#00FF80"} borderTopRadius="40px"  
     p={isNotSmallerScreen ? "2" : "2"} pl={isNotSmallerScreen ? "16" : "4"} 
     alignSelf="flex-start" width={"100%"} >
     <Spacer/>
     <Text pt={"2"}>A</Text>
     <IconButton size="md" icon={<FaBehance/>} ml="2" onClick={()=>window.open("https://www.behance.net/nico_1008")} ></IconButton>
     <Spacer/>
     <Text pt={"2"}>B</Text>
     <IconButton size="md" icon={<FaGithub/>}  ml="2" onClick={()=>window.open("https://github.com/nico1008")} ></IconButton>
     <Spacer/>
     <Text pt={"2"}>C</Text>
     <IconButton size="md" icon={<FaTelegram/>}  ml="2" onClick={()=>window.open("https://t.me/nico_1008k")}  ></IconButton>
     <Spacer/>
   </Flex >

  )
}
