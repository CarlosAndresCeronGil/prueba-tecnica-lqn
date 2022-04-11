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

  // const LISTA_PERSONAL = [
  //   'orochi',
  //   'asuma',
  //   'luz',
  //   'alma',
  //   'isol',
  //   'sona'
  // ]

  useEffect(() => {
    const auxArray = []
    const lenghtAux = []
    var auxCount = 0
    var nuevaIteracion = true
    for(var i = 0; i < POKEMON_LIST.length; i++){
        if(nuevaIteracion===true){
          auxArray.splice(0, auxArray.length)
          auxArray.push(POKEMON_LIST[auxCount])
          nuevaIteracion = false
        }
        if((auxArray[auxArray.length - 1] !== POKEMON_LIST[i]) && (auxArray[auxArray.length - 1].slice(-1) === POKEMON_LIST[i].slice(0,1)) && (auxArray.some(pokemon => pokemon === POKEMON_LIST[i]) === false) ) {
          auxArray.push(POKEMON_LIST[i])
          i = -1
        }
        if(i+1 === POKEMON_LIST.length){
          lenghtAux.push(auxArray.length)
          if(lenghtAux.length > 1) {
            // if(lenghtAux[lenghtAux.length - 2] < auxArray.length) {
            if(lenghtAux.every(n => n < auxArray.length)) {
              setFinalArray(auxArray)
            }
          }else {
            setFinalArray(auxArray)
          }
          auxCount++
          i = -1
          if(auxCount < POKEMON_LIST.length){
            nuevaIteracion = true
          }else {
            break
          }
        }
    }
  }, [])

  return <div>
        {
            finalArray.map(singlePokemon => (
                <p key={singlePokemon}>
                    {singlePokemon}
                </p>
            ))
        }
  </div>;
}
