import { Color, HStack, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import logo from "../../assets/image.png";
import ColorModeSwitch from "../ColorModeSwirch";
import Search from "../Search";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} p={4}>
      <Image src={logo} alt="GameHub" boxSize="90px" />
      <Search />
      {/* <Text>GameHub</Text> */}
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
