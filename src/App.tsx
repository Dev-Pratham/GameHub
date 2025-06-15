import { Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";

const App = () => {
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
          <GenresList></GenresList>
        </GridItem>

        {/* </Stack> */}

        <GridItem area="main">
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
