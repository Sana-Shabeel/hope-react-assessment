import React, { useState } from "react";
import Tbody from "./Tbody";
import { Member } from "../App";

interface Props {
  deleteMember: (id: number) => void;
  updateMemberName: (name: string, oldName: string) => void;
  members: Member[];
}

export default function TableHeader({
  deleteMember,
  members,
  updateMemberName,
}: Props) {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [tableData, setTableData] = useState<Member[]>(members);

  const sortTableData = () => {
    const sortedData = members.sort((a, b) => {
      if (a.name < b.name) {
        return sortOrder === "asc" ? -1 : 1;
      }
      if (a.name > b.name) {
        return sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });

    setTableData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
  return (
    <div className="flex flex-col mt-4">
      <div className="overflow-x-auto">
        <div className=" w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Name
                    <button onClick={sortTableData}>
                      {sortOrder === "asc" ? "▲" : "▼"}
                    </button>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Edit
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              {members.map((member) => (
                <Tbody
                  key={member.id}
                  members={member}
                  deleteMember={deleteMember}
                  updateMemberName={updateMemberName}
                />
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
