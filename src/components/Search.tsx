import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { LuSearch } from "react-icons/lu";

interface Props {
  onSearch: (searchTerm: string) => void;
}

const Search = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          //   console.log(ref.current.value);
          onSearch(ref.current.value);
        }
      }}
    >
      <InputGroup flex="1" startElement={<LuSearch />}>
        <Input placeholder="Search games" borderRadius="20px" ref={ref} />
      </InputGroup>
    </form>
  );
};

export default Search;
