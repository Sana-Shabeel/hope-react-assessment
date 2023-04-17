import React, { useState } from "react";

interface Props {
  addNewMember: (name: string) => void;
}

const AddMember = ({ addNewMember }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const submitValue = (e: React.FormEvent) => {
    e.preventDefault();
    addNewMember(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={submitValue} className="flex items-center gap-1 mt-4">
      <input
        className="border-2 w-4/5 h-10 rounded px-4 outline-none md:w-11/12"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add new member..."
      />
      <button
        type="submit"
        className="px-4 p-2 text-white bg-slate-500 rounded"
        onClick={submitValue}
      >
        Add
      </button>
    </form>
  );
};

export default AddMember;
