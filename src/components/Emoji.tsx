import { IconType } from "react-icons";
import { FiMeh } from "react-icons/fi";
import { GiBullseye } from "react-icons/gi";
import { FaRegThumbsUp } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";

interface Props {
  ratings_count: number;
}

const Emoji = ({ ratings_count }: Props) => {
  // Map of ratings count to emoji

  const emojiMap: { [key: number]: { icon: IconType; alt: string } } = {
    1: { icon: FiMeh, alt: "meh" },
    2: { icon: GiBullseye, alt: "bullseye" },
    3: { icon: FaRegThumbsUp, alt: "thumbs up" },
    4: { icon: FiMeh, alt: "meh" },
    5: { icon: GiBullseye, alt: "bullseye" },
    6: { icon: FaRegThumbsUp, alt: "thumbs up" },
    7: { icon: FaRegThumbsUp, alt: "thumbs up" },
    8: { icon: FaRegThumbsUp, alt: "thumbs up" },
    9: { icon: FaRegThumbsUp, alt: "thumbs up" },
  };

  const emoji = emojiMap[Math.floor(ratings_count / 1000)];
  //Math floor rounds down to the nearest integer
  if (!emoji) return null; // Return null if no emoji is found for the ratings count
  return <Icon as={emoji.icon} boxSize={"25px"}></Icon>;
};

export default Emoji;
