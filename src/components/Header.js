import {React, useEffect} from 'react'
import { useColorMode } from '@chakra-ui/color-mode';
import {  Stack, Flex, Box, Text,Spacer  } from '@chakra-ui/layout';
import { Button, Image } from '@chakra-ui/react'
import { FaGithub,FaTelegram,FaBehance } from 'react-icons/fa'
import { IconButton } from '@chakra-ui/button';
import { motion} from 'framer-motion'
import WebFont from 'webfontloader';

export default function Header() {

     const {colorMode} = useColorMode();
     const isDark = colorMode ==="dark";

     useEffect(() => {
          WebFont.load({
            google: {
              families: ['Comfortaa', 'Work Sans']
            }
          });
         }, []);
    
     return (
          <Stack >
               <Flex backgroundColor={isDark ? "#2953A6" : "#00FF80"} borderRadius="20px"  
                    direction={['column', 'column', 'column', 'row', 'row', 'row']}
                    spacing="200px" p={[ "4" ,"4" ,"4" , "32", "32", "32"]} 
                    pl={[ "4" , "4" , "4" , "16", "16", "16"]} 
                    alignSelf="flex-start">

                    <Box mt={[ "5","5","5", "12", "12", "12"]} 
                         pr={["0","0","0" ,"150px","150px","150px"]} 
                         align='flex-start'>

                         <Text fontSize={["3xl","4xl","4xl","5xl","5xl","5xl"]}
                              fontWeight="semibold"
                              fontFamily={"Comfortaa"}  >
                                   Hello, my name is 
                         </Text>
                         <Text as={motion.div} initial={{x: -500}} animate={{x:0}} 
                              transition={{delay:1}}
                              fontSize={["5xl","5xl","5xl","7xl","7xl","7xl"]} 
                              fontFamily={"Comfortaa"}
                              fontWeight="bold" 
                              bgGradient="linear(to-r, coral, violet, purple)" 
                              bgClip='text'>
                                   Nicola Ivanov
                         </Text >

                         <Text pt={"5"}   
                              fontSize={["xl","2xl","2xl","3xl","3xl","3xl"]} 
                              color={isDark ? "gray.200" : "black"}
                              fontFamily={"Work Sans"}>
                                   I am a young developer, studying at MTUCI. I work on  various C++,<br></br> Java, Python, Mathlab,Web design and Art projects.
                         </Text>
                         <Spacer>

                         </Spacer>

                         <Flex  mt={"10"} direction={['column', 'column', 'column', 'row', 'row', 'row']}>

                              <Button as={motion.div} whileHover={{scale:1.1, duration:2}} transition={{duration:2}} 
                                   size={"lg"} 
                                   bgGradient="linear(to-r, violet,blue.500 )" 
                                   _hover={{ bgGradient: 'linear(to-l, red.500, yellow.500)', cursor: "pointer"}}
                                   onClick={()=>window.open("https://vk.com/karkron")} 
                                   ml ={[ "1" ,"1" ,"1" , "7", "7", "7" ]}>
                                        Contact me  
                              </Button>
                              
                              <IconButton as={motion.div} whileHover={{scale:1.1}}  
                                   size="lg"  icon={<FaBehance/>}  onClick={()=>window.open("https://www.behance.net/nico_1008")}  
                                   _hover={{ bgGradient: 'linear(to-t, #D91E98, #F2226E)', cursor: "pointer"}}
                                   mt ={[ "5" ,"5" ,"5" ,"0" ,"0","0"]} 
                                   ml={[ "1" ,"1" ,"1" , "7", "7", "7" ]}></IconButton>

                              <IconButton as={motion.div} whileHover={{scale:1.1}} 
                                   size="lg"  icon={<FaGithub/>}  onClick={()=>window.open("https://github.com/nico1008")} 
                                   _hover={{ bgGradient: 'linear(to-t, #D91E98, #F2226E)', cursor: "pointer"}}
                                   mt ={["5" ,"5" , "5" , "0" , "0", "0"]} 
                                   ml={[ "1" ,"1" ,"1" , "7", "7", "7" ]}></IconButton>

                              <IconButton as={motion.div} whileHover={{scale:1.1}} 
                                   size="lg"  icon={<FaTelegram/>}  onClick={()=>window.open("https://t.me/nico_1008k")}  
                                   _hover={{ bgGradient: 'linear(to-t, #D91E98, #F2226E)', cursor: "pointer"}}
                                   mt ={["5" ,"5" , "5" , "0" , "0", "0"]} 
                                   ml ={[ "1" ,"1" ,"1" , "7", "7", "7" ]}></IconButton>

                         </Flex>
                        
                    </Box>
                    <Image alignSelf="center"
                         mt={[ "10","10","10", "0", "0", "0"]} 
                         mb = {[ "0" ,"0" ,"0" , "10", "10", "10"]} borderRadius='full'
                         backgroundColor={"transparent"} boxShadow="lg" 
                         boxSize={[ "250px","250px","250px","250px","400px","400px"]} 
                         opacity="1" border='8px solid black'
                         src='https://avatars.githubusercontent.com/u/70664528?s=400&u=861e9fafb08a103ed6de3852531877eecfa63036&v=4'/>

               </Flex> 
          </Stack>

     )
}
