import {React, useEffect} from 'react'
import { IconButton } from '@chakra-ui/button';
import {Flex, Text,Spacer  } from '@chakra-ui/layout';
import { FaGithub,FaTelegram,FaBehance } from 'react-icons/fa'
import { useColorMode } from '@chakra-ui/color-mode';
import WebFont from 'webfontloader';

export default function Footer() {

     const { colorMode} = useColorMode();
     const isDark = colorMode ==="dark";

     useEffect(() => {
      WebFont.load({
        google: {
          families: ['Comfortaa', 'Roboto']
        }
      });
     }, []);
     

  return (
     <Flex backgroundColor={isDark ? "#2953A6" : "#00FF80"} borderTopRadius="40px"  
      p="2"  pl={ [4 ,4 ,4 , 16, 16, 16]} 
      alignSelf="flex-start" width={"100%"} >
      
     
      <Text mt={"2.5"} ml={ ["2" ,"2" , "2" , "40", "40", "40"]} 
         fontWeight="regular"
         fontFamily={"Work Sans"}>
         © 2022 All rights reserved
      </Text>

     <Spacer/>
     
     <IconButton size="md" icon={<FaBehance/>} 
      mr={ [ "2" ,"2" ,"2" , "6" , "6" , "6"]} 
      mt={ [ "2.5", "2.5", "2.5","1" ,"1" ,"1" ]} 
      onClick={()=>window.open("https://www.behance.net/nico_1008")} ></IconButton>
     
    
     <IconButton size="md" icon={<FaGithub/>}  
      mr={ [ "2" ,"2" ,"2" , "6" , "6" , "6"]} 
      mt={ [ "2.5", "2.5", "2.5","1" ,"1" ,"1" ]} 
      onClick={()=>window.open("https://github.com/nico1008")} ></IconButton>
     
     
     <IconButton size="md" icon={<FaTelegram/>} 
      mr={ ["4" ,"4" ,"4" , "40", "40", "40"]} 
      mt={ [ "2.5", "2.5", "2.5","1" ,"1" ,"1" ]} 
      onClick={()=>window.open("https://t.me/nico_1008k")}  ></IconButton>
     
     
   </Flex >

  )
}
