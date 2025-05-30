import { Card, Image, Text } from "@chakra-ui/react";

import { Game } from "../hooks/UseGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root maxW="sm" overflow="hidden" borderRadius={10}>
      <Image src={game.background_image} alt={game.name} />
      <Card.Body gap="2">
        <Card.Title fontSize="2xl">{game.name}</Card.Title>
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </Card.Body>
      <Card.Footer gap="2"></Card.Footer>
    </Card.Root>
  );
};

export default GameCard;
