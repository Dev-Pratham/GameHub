import { HStack, Switch } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "./ui/color-mode";

const ColorModeSwitch = () => {
  //creating hook for toggling dark mode
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      {/* main container of switch */}
      <Switch.Root
        checked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="white"
      >
        {/* hidden input for accesibility and form interraction */}
        <Switch.HiddenInput />
        {/* control is visual representation of switch */}
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        {/* label provides text description */}
        <Switch.Label>Dark Mode</Switch.Label>
      </Switch.Root>
    </HStack>
  );
};

export default ColorModeSwitch;
