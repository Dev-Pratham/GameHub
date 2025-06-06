import { Platform } from "../hooks/UseGames";
import { HStack, Text } from "@chakra-ui/react";
import {} from "react-icons/fa";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { Icon } from "@chakra-ui/react";
import { FaAndroid, FaGlobe } from "react-icons/fa";
import { IconType } from "react-icons";

interface Props {
  parent_platforms: { platform: Platform }[];
}

const PlatformIconList = ({ parent_platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    ios: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    web: FaGlobe,
  };

  return (
    <>
      <HStack>
        {parent_platforms.map(({ platform }) => {
          // return <Text>{platform.platform.slug}</Text>
          //agar nahi hai toh return null warna application crach hojaiga
          if (!iconMap[platform.slug]) return null;
          return <Icon as={iconMap[platform.slug]} />;
        })}
      </HStack>
    </>
  );
};

export default PlatformIconList;
