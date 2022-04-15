import React from "react";
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

  if (error) return <div>{error}</div>;

  return (
    <div>
      {
        loading ? <h1>Cargando....</h1> : <div>
               <h1>Nombre: {data.person.name}</h1>
               <p>Año de nacimiento: {data.person.birthYear}</p>
               <p>Color de ojos: {data.person.eyeColor}</p>
               <p>Genero: {data.person.gender}</p>
               <p>Color de pelo: {data.person.hairColor}</p>
               <p>Altura: {data.person.height}</p>
               <p>Masa: {data.person.mass}</p>
               <p>Color de piel: {data.person.skinColor}</p>
               <p>Planeta de nacimiento: {data.person.homeworld.name}</p>
               <span>
                 Peliculas en las que participo:{" "}
                 {data.person.filmConnection.films.map((movie) => (
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
      }
    </div>
  )
}
