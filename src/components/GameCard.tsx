import { Card, HStack, Image, Text } from "@chakra-ui/react";

import { Game } from "../hooks/UseGames";
import PlatformIconList from "./PlatformIconList";
import CritcScore from "./CriticScore";
import { useColorModeValue } from "./ui/color-mode";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const boxShadow = useColorModeValue(
    "2xl",
    "0 0 16px 2px rgba(255,255,255,0.15)"
  );
  return (
    <Card.Root
      maxW="sm"
      overflow="hidden"
      borderRadius={10}
      _hover={{ boxShadow }}
      scale={1}
    >
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <Card.Body gap="2">
        <Card.Title fontSize="2xl">{game.name}</Card.Title>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList parent_platforms={game.parent_platforms} />
          <CritcScore metacritic={game.metacritic}></CritcScore>
        </HStack>
      </Card.Body>
      <Card.Footer gap="2"></Card.Footer>
    </Card.Root>
  );
};

export default GameCard;
