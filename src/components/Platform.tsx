import usePlatforms, { platforms } from "@/hooks/UsePlatfroms";
import { Box, Button, Menu, Portal } from "@chakra-ui/react";
import { RiArrowDownLine } from "react-icons/ri";

interface Props {
  onSelectPlatform: (platform: platforms) => void;
  selectedPlaform: platforms | null;
}

const Platform = ({ onSelectPlatform, selectedPlaform }: Props) => {
  const { platforms, error } = usePlatforms();

  if (error) return null;

  return (
    <Box m="5">
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button colorPalette="gray" variant="outline">
            {selectedPlaform ? selectedPlaform.name : "Platforms"}
            {/* {selectedPlaform?.name || "Platforms"} */}
            <RiArrowDownLine />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {platforms.map((platforms) => (
                <Menu.Item
                  key={platforms.id}
                  value={platforms.slug}
                  onClick={() => onSelectPlatform(platforms)}
                >
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
