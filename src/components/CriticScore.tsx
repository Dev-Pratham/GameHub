import { Badge } from "@chakra-ui/react";
import { Si3M } from "react-icons/si";

interface Props {
  metacritic: number;
}

const CritcScore = ({ metacritic }: Props) => {
  return (
    <Badge justifyContent={"center"} w={10} size="lg">
      {metacritic}
    </Badge>
  );
};

export default CritcScore;
