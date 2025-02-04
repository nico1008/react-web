import { React } from 'react'
import { Flex, Box, Text, Tag } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icon'
import { FaPython } from 'react-icons/fa'
import { GiPencilBrush } from 'react-icons/gi'
import { useColorMode } from '@chakra-ui/color-mode'
import { motion } from 'framer-motion'
import WebFont from 'webfontloader';
import { useInView } from 'react-intersection-observer';

// Define projects data
const PROJECTS = [
  {
    title: "HTML Generator",
    icon: FaPython,
    bgColor: "blue.500",
    lightBgColor: "#BBE3FA",
    url: "https://github.com/nico1008/paint2code",
    isML: true
  },
  {
    title: "Mushroom classifier",
    icon: FaPython,
    bgColor: "purple",
    lightBgColor: "#E9D8FD",
    url: "https://github.com/nico1008/Mushrooms",
    isML: true
  },
  {
    title: "Twitch sentiment",
    icon: FaPython,
    bgColor: "blueviolet",
    lightBgColor: "#D6BCFA",
    url: "https://github.com/nico1008/TwitchSentiment",
    isML: true
  },
  {
    title: "Art",
    icon: GiPencilBrush,
    bgColor: "orange.300",
    lightBgColor: "#FED7D7",
    url: "https://www.behance.net/nico_1008",
    isML: false
  }
];

export default function Projects() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const ProjectCard = ({ project }) => {
    const [ref, inView] = useInView({
      threshold: 0.2,
      triggerOnce: true
    });

    const variants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    };

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
        style={{ position: 'relative', zIndex: 1 }}
        whileHover={{ zIndex: 2 }}
      >
        <Flex
          as={motion.div}
          whileHover={{ scale: 1.2, boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)", cursor: "pointer" }}
          whileTap={{ scale: 1.1 }}
          rounded="3xl"
          direction="column"
          h={["30vh", "35vh", "40vh"]}
          w={["30vh", "35vh", "40vh"]}
          justify="flex-end"
          align="center"
          bg={isDark ? project.bgColor : project.lightBgColor}
          onClick={() => window.open(project.url)}
          position="relative"
        >
          {project.isML && (
            <Tag
              position="absolute"
              top="4"
              right="4"
              size="md"
              variant="solid"
              colorScheme="blue"
              bgColor="#0057FF"
              color="white"
              fontFamily="Comfortaa"
              px={3}
              py={1}
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              minW="3rem"
              h="1.75rem"
            >
              ML
            </Tag>
          )}
          <Icon
            color={isDark ? "gray.200" : "gray.700"}
            p="4"
            as={project.icon}
            w="12vh"
            h="12vh"
          />
          <Text
            color={isDark ? "gray.200" : "gray.700"}
            p="4"
            fontSize={["2xl", "2xl", "3xl"]}
            fontFamily="Comfortaa"
            textAlign="center"
            fontWeight="bold"
          >
            {project.title}
          </Text>
        </Flex>
      </motion.div>
    );
  };

  return (
    <Flex 
      direction="column" 
      w="100%" 
      align="center" 
      justify="center" 
      py={8}
      position="relative"
    >
      <Text
        fontFamily="Comfortaa"
        fontWeight="bold"
        fontSize={["3xl", "4xl", "6xl"]}
        textAlign="center"
      >
        Here are some of my projects:
      </Text>

      <Flex
        direction={['column', 'column', 'row']}
        wrap="wrap"
        justify="center"
        align="center"
        gap={6}
        mt={8}
        px={4}
      >
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </Flex>
    </Flex>
  );
}