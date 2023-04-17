import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface Props {
  handleSearchMember: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ handleSearchMember }: Props) => {
  return (
    <div className="border-2 rounded relative overflow-hidden flex justify-between items-center gap-4 bg-white">
      <input
        onChange={(e) => handleSearchMember(e.target.value)}
        className="w-full h-12  ml-4 outline-none"
        type="text"
        placeholder="Search the name..."
      />
      <AiOutlineSearch className="text-2xl mr-4" />
    </div>
  );
};

export default Search;
