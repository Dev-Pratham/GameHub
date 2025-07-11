import { Genres } from "@/hooks/UseGenres";
import { platforms } from "@/hooks/UsePlatfroms";
import { Box, Text } from "@chakra-ui/react";
import { SortOption } from "../SortSelector";

// we are rendering dynamic heading based on the selected genres,
//  platforms, sort option and search term in the requests

interface gameQuery {
  selectedGenres: Genres | null;
  selectedPlatforms: platforms | null;
  selectedSort: SortOption | null;
  searchTerm: string | "";
}

interface Props {
  heading: gameQuery;
}

const Header = ({ heading }: Props) => {
  return (
    <Box m={5}>
      <Text fontWeight={"bold"} fontSize={"2xl"}>
        {heading?.searchTerm || ""}
        {heading.selectedGenres?.name || ""}
        {heading.selectedPlatforms?.name || ""}
        {heading.selectedSort?.label || ""} Games
      </Text>
    </Box>
  );
};

export default Header;
