import React from 'react'
import { IconButton } from '@chakra-ui/button';
import {Flex, Text,Spacer  } from '@chakra-ui/layout';
import { FaGithub,FaTelegram,FaBehance } from 'react-icons/fa'
import { useColorMode } from '@chakra-ui/color-mode';
import { useMediaQuery } from '@chakra-ui/media-query';

export default function Footer() {

     const { colorMode} = useColorMode();
     const isDark = colorMode ==="dark";
     const [isNotSmallerScreen]=useMediaQuery("(min-width:600px)");

  return (
     <Flex backgroundColor={isDark ? "#2953A6" : "#00FF80"} borderTopRadius="40px"  
     p="2"  pl={isNotSmallerScreen ? "16" : "4"} 
     alignSelf="flex-start" width={"100%"} >
      
     
      <Text mt={"2.5"} ml={isNotSmallerScreen ? "40" : "2"} fontWeight="semibold">
      © 2022 All rights reserved
      </Text>
     <Spacer/>
     
     <IconButton size="md" icon={<FaBehance/>} mr={isNotSmallerScreen ? "6" : "2"} mt={isNotSmallerScreen ? "1" : "2.5"} onClick={()=>window.open("https://www.behance.net/nico_1008")} ></IconButton>
     
    
     <IconButton size="md" icon={<FaGithub/>}  mr={isNotSmallerScreen ? "6" : "2"} mt={isNotSmallerScreen ? "1" : "2.5"} onClick={()=>window.open("https://github.com/nico1008")} ></IconButton>
     
     
     <IconButton size="md" icon={<FaTelegram/>}  mr={isNotSmallerScreen ? "40" : "4"} mt={isNotSmallerScreen ? "1" : "2.5"} onClick={()=>window.open("https://t.me/nico_1008k")}  ></IconButton>
     
     
   </Flex >

  )
}
