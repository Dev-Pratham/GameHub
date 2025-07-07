import { Input, InputGroup } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

const Search = () => {
  return (
    <InputGroup flex="1" startElement={<LuSearch />}>
      <Input placeholder="Search games" borderRadius="20px" />
    </InputGroup>
  );
};

export default Search;
