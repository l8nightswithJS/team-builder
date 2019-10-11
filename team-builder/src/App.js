import React, { useState } from 'react';
import './App.css';
import PersonForm from "./People/PersonForm";
import People from "./People/People";

function App() {

  const [ people, setPeople] = useSate([
    {
      id: 1,
      name: 'Eddie',
      email: 'eddiejdev@gmail.com',
      role: 'Front-End Web Developer'

    }

  ]);

  const addPerson = person => {
    const newPerson = {
      id: Date.now(),
      name: person.date,
      email: person.email,
      role: person.role
    };

    setPeople([...people, newPerson]);
  };


  return (
    <div className="App">
      <header className="App-header">
       <PersonForm addPersonFn={addPerson} />
       <People personList={people} /> 
      </header>
    </div>
  );
}

export default App;
