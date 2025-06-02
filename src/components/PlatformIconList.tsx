import { Platform } from "../hooks/UseGames";
import { Text } from "@chakra-ui/react";
interface Props {
  parent_platforms: { platform: Platform }[];
}

const PlatformIconList = ({ parent_platforms }: Props) => {
  return (
    <>
      {parent_platforms.map(({ platform }) => (
        <Text key={platform.id}>{platform.name}</Text>
      ))}
    </>
  );
};

export default PlatformIconList;
