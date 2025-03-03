import { HStack, Switch } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "./ui/color-mode";

const ColorModeSwitch = () => {
  //creating hook for toggling dark mode
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch.Root checked={colorMode === "dark"} onChange={toggleColorMode}>
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label>Dark Mode</Switch.Label>
      </Switch.Root>
    </HStack>
  );
};

export default ColorModeSwitch;
