import React from 'react'
import { useColorMode } from '@chakra-ui/color-mode'
import { Stack, Flex, Box, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import WebFont from 'webfontloader';

const TECH_STACK = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg",
    alt: "PyTorch",
    boxSize: { base: "25px", md: "40px" },
    mr: "4"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg",
    alt: "NumPy",
    boxSize: { base: "90px", md: "140px" },
    mr: "0"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
    alt: "TensorFlow",
    boxSize: { base: "25px", md: "40px" },
    mr: "4"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg",
    alt: "Pandas",
    boxSize: { base: "90px", md: "140px" },
    mr: "0"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg",
    alt: "Jupyter Notebook",
    boxSize: { base: "30px", md: "50px" },
    mr: "4"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    alt: "Python",
    boxSize: { base: "30px", md: "50px" },
    mr: "4"
  }
];

const StaggeredText = ({ text }) => {
  const letters = Array.from(text);
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.2 }
    }
  };
  
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    },
    hidden: {
      opacity: 0,
      y: 20
    }
  };

  return (
    <motion.div
      style={{ display: "flex", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const TechStackImage = ({ tech }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.1,
        transition: { duration: 0.2 }
      }}
    >
      <Image
        src={tech.src}
        alt={tech.alt}
        boxSize={tech.boxSize}
        mr={tech.mr}
      />
    </motion.div>
  );
};

export default function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const headerStyles = {
    backgroundColor: isDark ? '#2953A6' : '#E3F2FD', 
    borderRadius: "20px",
    direction: ['column', 'column', 'row'],
    spacing: "100px",
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
      : "linear(to-r, blue.400, purple.500, pink.500)", 
    bgClip: "text"
  };

  const bioTextStyles = {
    pt: "5",
    fontSize: ["xl", "2xl", "3xl"],
    color: isDark ? 'gray.200' : 'gray.700', 
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
        <Box mt={["5", "5", "12"]} pr={["0", "0", "170px"]} align="flex-start">
          <Text fontSize={["3xl", "4xl", "5xl"]} fontWeight="semibold" fontFamily="Comfortaa" color={isDark ? 'gray.200' : 'gray.700'}>
            Hello, my name is
          </Text>
          
          <Text {...nameTextStyles}>
            <StaggeredText text="Nicola Ivanov" />
          </Text>
          
          <Text {...bioTextStyles} textAlign="justify">
            Passionate ML engineer specializing in computer vision and deep learning.
            {" "}
            Transforming complex data into innovative solutions through AI.
          </Text>

          <Flex pt="5" justifyContent="flex-start" alignItems="center" spacing="4">
            {TECH_STACK.map((tech, index) => (
              <TechStackImage key={index} tech={tech} />
            ))}
          </Flex>
        </Box>

        <Image {...profileImageStyles} />
      </Flex>
    </Stack>
  );
}