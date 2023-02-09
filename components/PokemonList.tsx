import { Pokemon } from "@prisma/client";
import PokemonCard from "./PokemonCard";

// This is just a mock array of Pokemon objects. In the future, this will be replaced with a call to the API.
const pokemonList: Pokemon[] = [
  {
    id: 1,
    name: "Bulbasaur",
    speciesName: "Seed",
    type: "Grass",
    speed: 45,
    height: 7,
    weight: 69,
    attack: 49,
    defense: 49,
    hp: 45,
    artwork:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: "Ivysaur",
    speciesName: "Seed",
    type: "Grass",
    speed: 60,
    height: 10,
    weight: 130,
    attack: 62,
    defense: 63,
    hp: 60,
    artwork:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    url: "https://pokeapi.co/api/v2/pokemon/2/",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: "Venusaur",
    speciesName: "Seed",
    type: "Grass",
    speed: 80,
    height: 20,
    weight: 1000,
    attack: 82,
    defense: 83,
    hp: 80,
    artwork:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    url: "https://pokeapi.co/api/v2/pokemon/3/",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    name: "Charmander",
    speciesName: "Lizard",
    type: "Fire",
    speed: 65,
    height: 6,
    weight: 85,
    attack: 52,
    defense: 43,
    hp: 39,
    artwork:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    url: "https://pokeapi.co/api/v2/pokemon/4/",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default function PokemonList(): JSX.Element {
  return (
    <div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {pokemonList.map((pokemon) => (
          <PokemonCard pokemon={pokemon} />
        ))}
      </ul>
    </div>
  );
}
