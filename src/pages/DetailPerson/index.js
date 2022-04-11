import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";

const DETAIL_PERSON = gql`
  query findPersonById($idToSearch: ID!) {
    person(id: $idToSearch) {
      name
      birthYear
      eyeColor
      gender
      hairColor
      height
      mass
      skinColor
      homeworld {
        name
      }
      filmConnection {
        films {
          title
          director
          planetConnection {
            planets {
              name
            }
          }
        }
      }
    }
  }
`;

export default function DetailPerson({ params }) {
  const { data, error, loading } = useQuery(DETAIL_PERSON, {
    variables: { idToSearch: params.id },
  });
  const [persona, setPersona] = useState(null);

  const handleClick = () => {
    console.log(data.person);
    setPersona(data.person);
  };

  // useEffect(() => {
  //     setPersona(data.person)
  // }, [params])

  if (error) return <div>{error}</div>;

  if (persona) {
    return (
      <div>
        <h1>Nombre: {persona.name}</h1>
        <p>Año de nacimiento: {persona.birthYear}</p>
        <p>Color de ojos: {persona.eyeColor}</p>
        <p>Genero: {persona.gender}</p>
        <p>Color de pelo: {persona.hairColor}</p>
        <p>Altura: {persona.height}</p>
        <p>Masa: {persona.mass}</p>
        <p>Color de piel: {persona.skinColor}</p>
        <p>Planeta de nacimiento: {persona.homeworld.name}</p>
        <span>
          Peliculas en las que participo:{" "}
          {persona.filmConnection.films.map((movie) => (
            <span key={movie.title}>
              {movie.title}
              <p>Planetas en esta pelicula:</p>
              <h6>
                {movie.planetConnection.planets.map((planet) => (
                  <p key={planet.name}>{planet.name}</p>
                ))}
              </h6>
            </span>
          ))}
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={handleClick}>MOSTRAR</button>
      </div>
    );
  }
}
