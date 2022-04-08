import React, { useEffect, useState } from "react";

export default function Pokemons() {
    const [finalArray, setFinalArray] = useState([])

  const POKEMON_LIST = [
    "audino",
    "bagon",
    "baltoy",
    "banette",
    "bidoof",
    "braviary",
    "bronzor",
    "carracosta",
    "charmeleon",
    "cresselia",
    "croagunk",
    "darmanitan",
    "deino",
    "emboar",
    "emolga",
    "exeggcute",
    "gabite",
    "girafarig",
    "gulpin",
    "haxorus",
    "heatmor",
    "heatran",
    "ivysaur",
    "jellicent",
    "jumpluff",
    "kangaskhan",
    "kricketune",
    "landorus",
    "ledyba",
    "loudred",
    "lumineon",
    "lunatone",
    "machamp",
    "magnezone",
    "mamoswine",
    "nosepass",
    "petilil",
    "pidgeotto",
    "pikachu",
    "pinsir",
    "poliwrath",
    "poochyena",
    "porygon2",
    "porygonz",
    "registeel",
    "relicanth",
    "remoraid",
    "rufflet",
    "sableye",
    "scolipede",
    "scrafty",
    "seaking",
    "sealeo",
    "silcoon",
    "simisear",
    "snivy",
    "snorlax",
    "spoink",
    "starly",
    "tirtouga",
    "trapinch",
    "treecko",
    "tyrogue",
    "vigoroth",
    "vulpix",
    "wailord",
    "wartortle",
    "whismur",
    "wingull",
    "yamask",
  ];

  useEffect(function() {
    const auxCount = 0
    const auxArray = []
    for(var i = 0; i <= POKEMON_LIST.length; i++){

    }
  }, [])

  return <div>
      {
          POKEMON_LIST.map(singlePokemon => (
              <p key={singlePokemon}>
                  {singlePokemon}
              </p>
          ))
      }
  </div>;
}
