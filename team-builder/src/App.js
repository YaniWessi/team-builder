import React, { useState } from "react";
import Members from "./component/Members";
import MemberForm from "./component/MemberForm";

function App() {
  const [members, setMembers] = useState([
    {
      id: 2,
      name: "Wesley john",
      title: "Teacher"
    },
    {
      id: 2,
      name: "Micheal phil",
      title: "student"
    },
    {
      id: 3,
      name: "Yannick Wessidjam",
      title: "student"
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      title: member.title
    };
    setMembers([...members, newMember]);
  };
  return (
    <div className="App">
      <h1>Our Team</h1>
      <MemberForm addNewMember={addNewMember} />
      <Members members={members} />
    </div>
  );
}

export default App;
