import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [cards, setCards] = useState([])
  useEffect(()=> {
    fetch("http://localhost:3001/pokemon")
    .then(r => r.json())
    .then(data => setCards(data))
  }, [])
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      <PokemonCollection cards={cards} setCards={setCards} />
    </Container>
  );
}

export default PokemonPage;
