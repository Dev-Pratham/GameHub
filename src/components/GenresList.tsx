import {
  HStack,
  List,
  ListItem,
  Text,
  Image,
  Spinner,
  Link,
} from "@chakra-ui/react";
import UseGenres from "../hooks/UseGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genere: any) => void;
  genresid?: number;
}
const GenresList = ({ onSelectGenre }: Props) => {
  const { genres, error, loading } = UseGenres();

  if (loading) return <Spinner />;
  if (error) return null;

  return (
    //first we
    // will chek if it working or not

    <List.Root listStyle="none">
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY={2}>
          <HStack gap="2">
            <Image
              boxSize="32px"
              borderRadius="l1"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Link fontSize="lg" onClick={() => onSelectGenre(genre)}>
              {genre.name}
            </Link>
            {/* <Text fontSize="lg">{genre.name}</Text> */}
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenresList;

//The genres was too close to the end so we applied padding x
// to the grid item in App.tsx
//because if later on we want to add more items in the aside
// we can do that without worrying about the padding
