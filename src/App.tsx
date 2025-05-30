import { Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar";
import GameGrid from "./components/GameGrid";

const App = () => {
  return (
    <>
      <Grid
        // templateAreas={[`"nav nav"  "aside main"`]}
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>

        {/* <Stack hideBelow={["lg"]}> */}

        <GridItem area="aside" bg="gold" hideBelow={["lg"]}>
          Aside
        </GridItem>

        {/* </Stack> */}

        <GridItem area="main" bg="dodgerblue">
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
