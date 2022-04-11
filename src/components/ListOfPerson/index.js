import React from "react";
import Person from "../Person";
import './styles.css'

export default function ListOfPerson({ persons }) {
  if (persons == null) return null;

  return (
    <div>
      {persons.map((singlePerson) => (
        <div className="ListOfPersons" key={singlePerson.id} >
            <Person singlePerson={singlePerson} />
        </div>
      ))}
    </div>
  );
}
