import { Grid, GridItem, Show, Stack } from "@chakra-ui/react";

const App = () => {
  return (
    <>
      <Grid
        // templateAreas={[`"nav nav"  "aside main"`]}
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      >
        <GridItem area="nav" bg="coral">
          Nav
        </GridItem>

        <Stack hideBelow={["lg"]}>
          <GridItem area="aside" bg="gold">
            Aside
          </GridItem>
        </Stack>

        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
