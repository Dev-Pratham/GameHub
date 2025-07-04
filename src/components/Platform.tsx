import usePlatforms, { platforms } from "@/hooks/UsePlatfroms";
import { Box, Button, Menu, Portal } from "@chakra-ui/react";
import { RiArrowRightLine } from "react-icons/ri";

const Platform = () => {
  const { platforms, error } = usePlatforms();

  if (error) return null;

  return (
    <Box m="5">
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button colorPalette="gray" variant="outline">
            Platforms <RiArrowRightLine />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {platforms.map((platforms) => (
                <Menu.Item key={platforms.id} value={platforms.slug}>
                  {platforms.name}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  );
};

export default Platform;
