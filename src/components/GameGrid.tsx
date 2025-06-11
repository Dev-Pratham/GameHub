import { SimpleGrid, Text } from "@chakra-ui/react";
import UseGames from "../hooks/UseGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  //custom hook for seperaation of concerns
  const { games, error, loading } = UseGames();

  return (
    <>
      {loading && (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
          padding={5}
          gap={10}
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <GameCardSkeleton key={index} />
          ))}
        </SimpleGrid>
      )}
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={10} padding={5}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
