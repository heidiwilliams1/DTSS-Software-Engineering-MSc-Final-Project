import React from "react";
import { useQuery } from '@apollo/client';
import { GET_GEN_3 } from "../gql/Query";

function Data() {
  const { data, error } = useQuery(GET_GEN_3);
  console.log(data);
  return (
    <div >
        {data === undefined ? (
          <p>Error: {error}</p>
        ) : (
          <div>
            {data.pokemon_v2_pokemonspecies.map((pokemon) => {
              return (
                <p key={pokemon.id}>
                  {pokemon.id} {pokemon.name}
                </p>
              );
            })}
          </div>
        )}
    </div>
);
}


export default Data;