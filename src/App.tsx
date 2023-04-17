import { useEffect, useState } from "react";
import Search from "./component/Search";
import AddMember from "./component/AddMember";
import TableHeader from "./component/TableHeader";

export interface Member {
  id: number;
  name: string;
}

function App() {
  const [members, setMember] = useState<Member[]>([
    {
      id: 1,
      name: "Anas Barre",
    },
    {
      id: 2,
      name: "John Doe",
    },
  ]);
  const [searchName, setSearchName] = useState("");

  // SAVING THE NOTES TO LOCALSTORAGE
  useEffect(() => {
    const savedMembers: Member[] = JSON.parse(
      localStorage.getItem("members-hope-assesment") || "[]"
    );

    if (savedMembers) {
      setMember(savedMembers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("members-hope-assesment", JSON.stringify(members));
  }, [members]);

  const addNewMember = (member: string) => {
    if (member.trim() === "") return;
    setMember([
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

    setMember(updatedMembers);
  };

  const deleteMember = (id: number) => {
    setMember((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="w-11/12 mx-auto mt-12 md:w-9/12 lg:w-1110">
        <h1 className="text-3xl font-bold text-center mb-4">Name Book</h1>
        <Search handleSearchMember={setSearchName} />
        <AddMember addNewMember={addNewMember} />
        <TableHeader
          deleteMember={deleteMember}
          members={members.filter((note) => note.name.includes(searchName))}
          updateMemberName={updateMemberName}
          setMember={setMember}
        />
      </div>
    </div>
  );
}

export default App;
