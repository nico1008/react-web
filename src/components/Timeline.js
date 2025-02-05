import React from 'react';
import { Box, Flex, Text, VStack, Circle, useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaPaintBrush, FaChartLine } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const TimelineItem = ({ year, title, description, mobileDescription, icon, isLeft, index }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      style={{ width: '100%' }}
    >
      <Flex
        justify={{ base: "center", md: isLeft ? "flex-start" : "flex-end" }}
        w="100%"
        position="relative"
        mb={8}
      >
        <Box
          w={{ base: "90%", md: "45%" }}
          p={6}
          borderRadius="xl"
          bg={isDark ? "#2953A6" : "#E3F2FD"}
          boxShadow="xl"
          position="relative"
          _hover={{ transform: "scale(1.05)" }}
          transition="transform 0.3s"
        >
          <Circle
            size="40px"
            bg={isDark ? "blue.500" : "blue.400"}
            color="white"
            position="absolute"
            top={{ base: "-20px", md: "50%" }}
            left={{ base: "50%", md: isLeft ? "calc(100% + 1.5rem)" : "calc(-3rem)" }}
            transform={{ 
              base: "translateX(-50%)", 
              md: isLeft ? "translateY(-50%)" : "translateY(-50%)" 
            }}
          >
            {icon}
          </Circle>
          
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="bold"
            color={isDark ? "blue.200" : "blue.600"}
            mb={2}
            fontFamily="Comfortaa"
          >
            {year}
          </Text>
          
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="bold"
            mb={2}
            fontFamily="Comfortaa"
          >
            {title}
          </Text>
          
          <Text
            fontSize="md"
            fontFamily="Work Sans"
            display={{ base: mobileDescription ? "none" : "block", md: "block" }}
          >
            {description}
          </Text>
          {mobileDescription && (
            <Text
              fontSize="md"
              fontFamily="Work Sans"
              display={{ base: "block", md: "none" }}
            >
              {mobileDescription}
            </Text>
          )}
        </Box>
      </Flex>
    </motion.div>
  );
};

export default function Timeline() {
  const timelineData = [
    {
      year: "2020 – 2024",
      title: "Bachelor's Degree in Informatics and Computer Engineering",
      description: "Earned a degree in Informatics and Computer Engineering from Moscow Technical University of Communications and Informatics (MTUCI).",
      mobileDescription: "Earned a degree in Informatics and Computer Engineering",
      icon: <FaGraduationCap size={20} />
    },
    {
        year: "2023 – 2024",
        title: "Web Developer & Designer",
        description: "Designed and developed web solutions at NIIPH ROSRESERVA, leading UI/UX strategy and frontend development.",
        icon: <FaPaintBrush size={20} />
      },
    {
      year: "2024 – Present",
      title: "IT Auditor at Sber",
      description: "Perform IT audits, risk assessments, and data analysis at Russia's largest bank, optimizing security and operational efficiency.",
      icon: <FaChartLine size={20} />
    }
  ];

  return (
    <VStack w="100%" spacing={0} py={16}>
      <Text
        fontFamily="Comfortaa"
        fontWeight="bold"
        fontSize={["3xl", "4xl", "6xl"]}
        textAlign="center"
        mb={12}
      >
        My Journey
      </Text>
      
      <Box w="100%" maxW="1200px" px={4}>
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            title={item.title}
            description={item.description}
            mobileDescription={item.mobileDescription}
            icon={item.icon}
            isLeft={index % 2 === 0}
            index={index}
          />
        ))}
      </Box>
    </VStack>
  );
} 