import { SimpleGrid, Text } from "@chakra-ui/react";
import UseGames from "../hooks/UseGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genres } from "../hooks/UseGenres";
import { platforms } from "@/hooks/UsePlatfroms";

interface Props {
  selectedGenres: Genres | null;
  selectedPlatforms: platforms | null;
}
const GameGrid = ({ selectedGenres, selectedPlatforms }: Props) => {
  //custom hook for seperaation of concerns
  const { games, error, loading } = UseGames(
    selectedGenres,
    selectedPlatforms,
    {
      //AXIOS request config
      params: { genres: selectedGenres?.id, platforms: selectedPlatforms?.id },
    }
  );

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={10} padding={5}>
        {loading &&
          Array.from({ length: 20 }).map((_, index) => (
            <GameCardSkeleton key={index} />
          ))}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
