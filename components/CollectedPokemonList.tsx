import { Pokemon } from "@prisma/client";

import CollectionCard from "./CollectionCard";

const CollectedPokemonList: React.FC<{ pokemons: Pokemon[] }> = (
  pokemons
): JSX.Element => {
  return (
    <div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {pokemons.pokemons.map((pokemon: Pokemon) => (
          <CollectionCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  );
};

export default CollectedPokemonList;
