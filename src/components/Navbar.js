import React from 'react'
import { Flex, IconButton, useColorMode, Text, HStack } from '@chakra-ui/react'
import { FaSun, FaMoon, FaGithub, FaTelegram, FaBehance } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === "dark";

  const socialLinks = [
    { icon: FaBehance, url: "https://www.behance.net/nico_1008", label: "Behance" },
    { icon: FaGithub, url: "https://github.com/nico1008", label: "GitHub" },
    { icon: FaTelegram, url: "https://t.me/nico_1008k", label: "Telegram" }
  ]

  const iconButtonStyles = {
    size: "md",
    isRound: "true",
    color: isDark ? "white" : "gray.800",
    bg: isDark ? "whiteAlpha.200" : "gray.100",
    _hover: {
      bg: isDark ? "whiteAlpha.300" : "gray.200",
    },
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  const iconStyles = {
    sx: {
      "& > *": {
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      },
      "&:hover": {
        "& > *": {
          color: "#0057FF",
        }
      }
    }
  };

  return (
    <Flex w="100%" p={4} justify="space-between" align="center">
      <HStack spacing={4}>
        <Text
          fontFamily="Comfortaa"
          fontSize={["xl", "2xl", "3xl"]}
          fontWeight="bold"
          bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
          bgClip="text"
        >
          Nico1008
        </Text>
      </HStack>

      <HStack spacing={4}>
        {socialLinks.map((social, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <IconButton
              icon={<social.icon />}
              onClick={() => window.open(social.url)}
              aria-label={social.label}
              {...iconButtonStyles}
              {...iconStyles}
            />
          </motion.div>
        ))}
        
        <motion.div
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          <IconButton
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            aria-label="Toggle Theme"
            {...iconButtonStyles}
            {...iconStyles}
          />
        </motion.div>
      </HStack>
    </Flex>
  )
}

export default Navbar 