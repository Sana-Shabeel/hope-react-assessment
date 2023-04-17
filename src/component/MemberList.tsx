import React, { useEffect, useMemo, useState } from "react";
import { Member } from "../modal";
import Search from "./Search";
import AddMember from "./AddMember";
import TableHeader from "./TableHeader";

export interface MemberListProps {
  initialMembers: Member[];
}

export function MemberList({ initialMembers }: MemberListProps) {
  const [members, setMembers] = useState<Member[]>(initialMembers);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    localStorage.setItem("members-hope-assesment", JSON.stringify(members));
  }, [members]);

  const addNewMember = (member: string) => {
    if (member.trim() === "") return;
    setMembers([
      ...members,
      {
        id: members.length + 1,
        name: member,
      },
    ]);
  };

  const updateMemberName = (newName: string, oldName: string) => {
    const updatedMembers = members.map((member) => {
      if (member.name === oldName) {
        return {
          ...member,
          name: newName,
        };
      }
      return member;
    });

    setMembers(updatedMembers);
  };

  const deleteMember = (id: number) => {
    setMembers((prev) => prev.filter((item) => item.id !== id));
  };

  // Using useMemo to avoid expensive computations on every re-render
  const filteredMembers = useMemo(
    () => members.filter((note) => note.name.includes(searchName)),
    [members, searchName]
  );

  // Wrap the TableHeader component with React.memo to avoid unnecessary re-renders
  const MemoizedTableHeader = React.memo(TableHeader);

  return (
    <>
      <Search handleSearchMember={setSearchName} />
      <AddMember addNewMember={addNewMember} />
      <TableHeader
        deleteMember={deleteMember}
        members={filteredMembers}
        updateMemberName={updateMemberName}
        setMembers={setMembers}
      />
    </>
  );
}
