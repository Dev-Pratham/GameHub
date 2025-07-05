import { Grid, GridItem, HStack, Show, Stack } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genres } from "./hooks/UseGenres";
import Platform from "./components/Platform";
// import { Platform } from "./hooks/UseGames";
import { platforms } from "./hooks/UsePlatfroms";
import SortSelector, { SortOption } from "./components/SortSelector";

const App = () => {
  const [selectedGenres, setSelectedGenres] = useState<Genres | null>(null);
  const [selectedPlatforms, setSelectedPlatfroms] = useState<platforms | null>(
    null
  );
  const [selectedSort, setSelectedSort] = useState<SortOption | null>(null);
  return (
    <>
      <Grid
        // templateAreas={[`"nav nav"  "aside main"`]}
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        //basically we define the column sizes
        templateColumns={{
          //single column
          base: "1fr",
          //2 col first 200 and second 1fr
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>

        {/* <Stack hideBelow={["lg"]}> */}

        <GridItem area="aside" hideBelow={["lg"]} paddingX="5">
          <GenresList
            selectedGenre={selectedGenres}
            onSelectGenre={(genre) => {
              setSelectedGenres(genre);
            }}
          ></GenresList>
        </GridItem>

        {/* </Stack> */}

        <GridItem area="main">
          <HStack>
            <Platform
              onSelectPlatform={(platform) => setSelectedPlatfroms(platform)}
              selectedPlaform={selectedPlatforms}
            ></Platform>
            <SortSelector
              onselectedMenu={(options) => setSelectedSort(options)}
              selectedSort={selectedSort}
            ></SortSelector>
          </HStack>

          <GameGrid
            selectedGenres={selectedGenres}
            selectedPlatforms={selectedPlatforms}
            selectedSort={selectedSort}
          ></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
