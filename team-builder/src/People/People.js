import React from "react";

const People = props => {
    return (
        <div className="person-list">
            {props.personList.map(person => {
                return (
                    <div className="person" key={person.id}>
                        <h1>name: {person.name}</h1>
                        <h2>email: {person.email}</h2>
                        <h2>role: {person.role}</h2>
                    </div>
                )
            })}
        </div>
    );
};

export default People;