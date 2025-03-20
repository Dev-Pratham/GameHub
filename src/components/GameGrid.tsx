import { Text } from "@chakra-ui/react";
import UseGames from "../hooks/UseGames";

const GameGrid = () => {
  //custom hook for seperaation of concerns
  const { games, error } = UseGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
