import {React} from 'react'
import { IconButton } from '@chakra-ui/button';
import {Flex, Text, Spacer} from '@chakra-ui/layout';
import { FaGithub, FaTelegram, FaBehance } from 'react-icons/fa'
import { useColorMode } from '@chakra-ui/color-mode';

const SOCIAL_LINKS = [
  {
    icon: FaBehance,
    url: "https://www.behance.net/nico_1008",
    ariaLabel: "Behance Profile",
  },
  {
    icon: FaGithub,
    url: "https://github.com/nico1008",
    ariaLabel: "GitHub Profile",
  },
  {
    icon: FaTelegram,
    url: "https://t.me/nico_1008k",
    ariaLabel: "Telegram Profile",
  }
];

export default function Footer() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const iconButtonStyles = {
    mr: ["2", "2", "2", "6", "6", "6"],
    mt: ["2.5", "2.5", "2.5", "1", "1", "1"],
    size: "md",
    color: isDark ? "white" : "gray.800",
    bg: isDark ? "whiteAlpha.200" : "gray.100",
    _hover: {
      transform: "scale(1.1)",
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
    <Flex
      backgroundColor={isDark ? "#2953A6" : "#E3F2FD"}
      borderTopRadius="40px"
      p="2"
      pl={[4, 4, 4, 16, 16, 16]}
      alignSelf="flex-start"
      width="100%"
    >
      <Text
        mt="2.5"
        ml={["2", "2", "2", "40", "40", "40"]}
        fontWeight="regular"
        fontFamily="Work Sans"
      >
        © {new Date().getFullYear()} All rights reserved
      </Text>

      <Spacer />

      {SOCIAL_LINKS.map((link, index) => (
        <IconButton
          key={index}
          icon={<link.icon />}
          onClick={() => window.open(link.url)}
          aria-label={link.ariaLabel}
          {...iconButtonStyles}
          {...iconStyles}
          {...(index === SOCIAL_LINKS.length - 1 && {
            mr: ["4", "4", "4", "40", "40", "40"]
          })}
        />
      ))}
    </Flex>
  )
}
