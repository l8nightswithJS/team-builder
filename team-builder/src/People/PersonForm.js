import React, { useState } from "react";

const PersonForm = props => {
    const [person, setPerson] = useState({ id: "", name: "", email: "", role: "" })


const handleChange = e => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  }; 

  const handleSubmit = e => {
    e.preventDefault();
    props.addPersonFn(person);
    setPerson({ id: "", name: "", email: "", role: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Name">Person's Name</label>
      <input
        id= "name"
        value={person.name}
        name="name"
        type="text"
        onChange={handleChange}
      />
      <label htmlFor="email">email</label>
      <input
        id="email"
        value={person.email}
        type="textarea"
        name="email"
        onChange={handleChange}
      />
      <label htmlFor="email">email</label>
      <input
        id="role"
        value={person.role}
        type="textarea"
        name="role"
        onChange={handleChange}
      />
      <button type="submit">Add Person</button>
    </form>
  );
};

export default PersonForm;
