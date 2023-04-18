import { useEffect, useState } from "react";
import { Member } from "./modal";
import { MemberList } from "./component/MemberList";

function App() {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    const savedMembers: Member[] = JSON.parse(
      localStorage.getItem("members-hope-assesment") || "[]"
    );

    if (savedMembers) {
      setMembers(savedMembers);
    }
    console.log("savedMembers", savedMembers);

    console.log(members);
  }, []);

  useEffect(() => {
    localStorage.setItem("members-hope-assesment", JSON.stringify(members));
  }, [members]);

  return (
    <div>
      <div className="w-11/12 mx-auto mt-12 md:w-9/12 lg:w-1110">
        <h1 className="text-3xl font-bold text-center mb-4">Name Book</h1>
        <MemberList members={members} setMembers={setMembers} />
      </div>
    </div>
  );
}

export default App;
