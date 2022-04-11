import React from "react";
import { Link } from "wouter";
import './person.css'

export default function Person({singlePerson}) {
    return (
        <Link to={`/starwars/character/${singlePerson.id}`} className="person">
            {singlePerson.name}
        </Link>
    )
}
