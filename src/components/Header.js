import React from 'react'
import { useColorMode } from '@chakra-ui/color-mode'
import { Stack, Flex, Box, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import WebFont from 'webfontloader';

// Define tech stack images as constants
const TECH_STACK = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg",
    alt: "PyTorch",
    boxSize: "40px",
    mr: "4"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg",
    alt: "NumPy",
    boxSize: "140px",
    mr: "0"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
    alt: "TensorFlow",
    boxSize: "40px",
    mr: "4"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg",
    alt: "Pandas",
    boxSize: "140px",
    mr: "0"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg",
    alt: "Jupyter Notebook",
    boxSize: "50px",
    mr: "4"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    alt: "Python",
    boxSize: "50px",
    mr: "4"
  }
];

export default function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const headerStyles = {
    backgroundColor: isDark ? '#2953A6' : '#E3F2FD', // Light blue background
    borderRadius: "20px",
    direction: ['column', 'column', 'row'],
    spacing: "200px",
    p: ["4", "4", "32"],
    pl: ["4", "4", "16"],
    alignSelf: "flex-start"
  };

  const nameTextStyles = {
    as: motion.div,
    initial: { x: -500 },
    animate: { x: 0 },
    transition: { delay: 1 },
    fontSize: ["5xl", "5xl", "7xl"],
    fontFamily: "Comfortaa",
    fontWeight: "bold",
    bgGradient: isDark 
      ? "linear(to-r, coral, violet, purple)"
      : "linear(to-r, blue.400, purple.500, pink.500)", // Softer gradient for light mode
    bgClip: "text"
  };

  const bioTextStyles = {
    pt: "5",
    fontSize: ["xl", "2xl", "3xl"],
    color: isDark ? 'gray.200' : 'gray.700', // Darker gray for better readability
    fontFamily: "Work Sans"
  };

  const profileImageStyles = {
    alignSelf: "center",
    mt: ["10", "10", "0"],
    mb: ["0", "0", "10"],
    borderRadius: "full",
    backgroundColor: "transparent",
    boxShadow: "lg",
    boxSize: ["250px", "250px", "400px"],
    opacity: 1,
    border: "8px solid black",
    src: "https://avatars.githubusercontent.com/u/70664528?s=400&u=861e9fafb08a103ed6de3852531877eecfa63036&v=4"
  };

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ['Comfortaa', 'Work Sans']
      }
    });
  }, []);

  return (
    <Stack>
      <Flex {...headerStyles}>
        <Box mt={["5", "5", "12"]} pr={["0", "0", "150px"]} align="flex-start">
          <Text fontSize={["3xl", "4xl", "5xl"]} fontWeight="semibold" fontFamily="Comfortaa" color={isDark ? 'gray.200' : 'gray.700'}>
            Hello, my name is
          </Text>
          
          <Text {...nameTextStyles}>
            Nicola Ivanov
          </Text>
          
          <Text {...bioTextStyles}>
            I am a young developer working on various machine learning projects.
            <br />
            Love to work with big data and computer vision.
          </Text>

          <Flex pt="5" justifyContent="flex-start" alignItems="center" spacing="4">
            {TECH_STACK.map((tech, index) => (
              <Image
                key={index}
                src={tech.src}
                alt={tech.alt}
                boxSize={tech.boxSize}
                mr={tech.mr}
              />
            ))}
          </Flex>
        </Box>

        <Image {...profileImageStyles} />
      </Flex>
    </Stack>
  );
}