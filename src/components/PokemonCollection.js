import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";
import { useEffect } from "react/cjs/react.production.min";

function PokemonCollection({cards, setCards}) {
  

  const pokeCards = cards.map((pokemon) => {
    return <PokemonCard
      key={pokemon.id}
      id={pokemon.id}
      name={pokemon.name}
      hp={pokemon.hp}
      image={pokemon.sprites.front}
      />
  })
  return (
    <Card.Group itemsPerRow={6}>
      {pokeCards}
    </Card.Group>
  );
}

export default PokemonCollection;
