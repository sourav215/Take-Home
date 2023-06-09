import React from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = [
  { title: "Home", path: "/" },
  { title: "Travel Details", path: "/travel-details" },
];

const NavLink = ({ title, path }) => <Link to={path}>{title}</Link>;

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="white.100" px={4}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          fontSize={"xl"}
        >
          <HStack spacing={8} alignItems={"center"}>
            <Box fontSize={"2xl"} fontWeight={"semibold"}>
              {" "}
              <Link to={"/"}>Travelopia</Link>
            </Box>
          </HStack>
          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={20}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map(({ title, path }) => (
                <NavLink key={title} title={title} path={path} />
              ))}
            </HStack>
          </Flex>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map(({ title, path }) => (
                <NavLink key={title} title={title} path={path} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Divider />
    </>
  );
};

export default Navbar;
