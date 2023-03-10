import { Pokemon } from "@prisma/client";
import Image from "next/image";
import { useAtom } from "jotai";

import PokemonTypeLabel from "./PokemonTypeLabel";
import collectedPokemonAtom from "../stores/collectedPokemon";

const PokemonCard: React.FC<{ pokemon: Pokemon }> = ({
  pokemon,
}): JSX.Element => {
  const [collection, setCollection] = useAtom(collectedPokemonAtom);
  const type: string = pokemon.type;

  const collectPokemon = (event: any): void => {
    event.preventDefault();
    if (collection.includes(pokemon)) return;
    else setCollection([...collection, pokemon]);
  };

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
        className="grid md:gap-3 grid-cols-2 border-t-2"
      >
        <div className="border-r-2 py-3">
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
      <div className="border-t-2 border-gray-20 rounded-b-md hover:bg-gray-100">
        <button 
          className="w-full py-4 text-gray-400"
          onClick={(e) => collectPokemon(e)}
        >
          Collect {pokemon.name}
        </button>
      </div>
    </li>
  );
};

export default PokemonCard;
