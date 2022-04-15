import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import Persons from "../../components/Person";
import ListOfPerson from "../../components/ListOfPerson";

const ALL_PEOPLE = gql`
  query {
    allPeople {
      people {
        id
        name
      }
    }
  }
`;

export default function StarWars() {
  const { data, error, loading } = useQuery(ALL_PEOPLE);

    if(error) return <div style='color: red'>{error}</div>

  return (
    <div>
      {loading ? (
        <p>Cargando. . .</p>
      ) : (
        <ListOfPerson persons={data?.allPeople.people} />
      )}
    </div>
  );
}
