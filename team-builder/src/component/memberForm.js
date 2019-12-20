import React, { useState } from "react";

const MemberForm = props => {
  const [member, setMember] = useState({
    name: "",
    title: ""
  });

  const handleChanges = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };
  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({ title: "", body: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="name"
        onChange={handleChanges}
        name="name"
        value={member.name}
      />
      <label htmlFor="title">Title</label>
      <input
        id="title"
        tyoe="text"
        placeholder="title"
        onChange={handleChanges}
        name="title"
        value={member.title}
      />
      <button type="submit">Add team</button>
    </form>
  );
};

export default MemberForm;
