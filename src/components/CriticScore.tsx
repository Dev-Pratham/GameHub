import { Badge } from "@chakra-ui/react";
import { Si3M } from "react-icons/si";

interface Props {
  metacritic: number;
}

const CritcScore = ({ metacritic }: Props) => {
  const color = metacritic > 75 ? "green" : metacritic > 60 ? "yellow" : "red";
  return (
    <Badge color={color} justifyContent={"center"} w={10} size="lg">
      {metacritic}
    </Badge>
  );
};

export default CritcScore;
