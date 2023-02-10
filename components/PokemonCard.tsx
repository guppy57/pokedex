import { Pokemon } from "@prisma/client";
import Image from "next/image";

import PokemonTypeLabel from "./PokemonTypeLabel";

const PokemonCard: React.FC<{ pokemon: Pokemon }> = ({
  pokemon,
}): JSX.Element => {
  console.log(pokemon); 
  const type: string = pokemon.type;

  return (
    <li
      key={pokemon.id}
      className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow border-2"
    >
      <div className="flex flex-1 flex-col p-3">
        <div className="flex justify-end">
          <PokemonTypeLabel type={type} />
        </div>
        <Image
            className="mx-auto h-44 w-44 flex-shrink-0 rounded-full"
            height={200}
            width={200}
            src={pokemon.artwork}
            alt=""
          />
        <h3 className="mt-6 text-2xl font-medium text-gray-900">
          {pokemon.name}
        </h3>
        <p className="text-sm text-gray-500 text-center pb-3">
          {pokemon.speciesName}
        </p>
      </div>
      <div
        id="stats"
        className="grid grid-cols-1 gap-3 md:grid-cols-2 border-t-2"
      >
        <div className="md:border-r-2 py-3">
          <p>HP: {pokemon.hp}</p>
          <p>Speed: {pokemon.speed}</p>
          <p>Weight: {pokemon.weight}</p>
        </div>
        <div className="py-3">
          <p>Attack: {pokemon.attack}</p>
          <p>Defense: {pokemon.defense}</p>
          <p>Height: {pokemon.height}</p>
        </div>
      </div>
      <div className="border-t-2 border-gray-20 hover:bg-gray-100">
        <button className="w-full py-4 text-gray-400">
          Collect {pokemon.name}
        </button>
      </div>
    </li>
  );
};

export default PokemonCard;
