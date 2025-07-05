import { Box, Button, Menu, Portal } from "@chakra-ui/react";
import { RiArrowDownLine } from "react-icons/ri";

export interface SortOption {
  value: string;
  label: string;
}

interface Props {
  onselectedMenu: (item: SortOption) => void;
  selectedSort: SortOption | null;
}
const SortSelector = ({ onselectedMenu, selectedSort }: Props) => {
  //This will be used to sort the games based on the selected option
  // relevance is the default option
  const sortOrderOptions = [
    { value: "relevance", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "added", label: "Date Added" },
    { value: "rating", label: "Rating" },
    { value: "metacritic", label: "Metacritic" },
    { value: "created", label: "Created" },
    { value: "updated", label: "Updated" },
  ];

  return (
    <Box m="5">
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm">
            {selectedSort?.label || "Order by : Relevance"}
            <RiArrowDownLine />
          </Button>
          {/* <RiArrowRightLine /> */}
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {sortOrderOptions.map((options) => (
                <Menu.Item
                  key={options.value}
                  onClick={() => onselectedMenu(options)}
                  value={options.value}
                >
                  {options.label}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  );
};

export default SortSelector;
