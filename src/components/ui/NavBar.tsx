import { Color, HStack, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import logo from "../../assets/image.png";
import ColorModeSwitch from "../ColorModeSwirch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} p={4}>
      <Image src={logo} alt="GameHub" boxSize="110px" />
      {/* <Text>GameHub</Text> */}
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
