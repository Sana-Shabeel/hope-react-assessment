import React, { useState } from "react";
import { Member } from "../App";
import DeleteModal from "../Modal/DeleteModal";
import { useDisclosure } from "@chakra-ui/react";

interface Props {
  members: Member;
  deleteMember: (id: number) => void;
  updateMemberName: (name: string, oldName: string) => void;
}

const Tbody = ({ members, deleteMember, updateMemberName }: Props) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <DeleteModal
        isOpen={isOpen}
        onClose={onClose}
        deleteMember={deleteMember}
        id={members.id}
      />
      <tbody className="divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
            {members.id}
          </td>
          {edit ? (
            <input
              type="text"
              className="px-2 md:px-6 py-4 text-sm text-gray-800 overflow-none"
              defaultValue={members.name}
              onChange={(e) => setValue(e.target.value)}
            />
          ) : (
            <td className="px-2 md:px-6 py-4 text-sm text-gray-800 overflow-none">
              {members.name}
            </td>
          )}
          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
            {edit ? (
              <a
                onClick={() => {
                  setEdit((prev) => !prev);
                  updateMemberName(value, members.name);
                }}
                className="text-green-500 hover:text-green-700"
                href="#"
              >
                Save
              </a>
            ) : (
              <a
                onClick={() => {
                  setEdit((prev) => !prev);
                }}
                className="text-green-500 hover:text-green-700"
                href="#"
              >
                Edit
              </a>
            )}
          </td>
          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
            <a
              onClick={() => onOpen()}
              className="text-red-500 hover:text-red-700"
              href="#"
            >
              Delete
            </a>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default Tbody;
