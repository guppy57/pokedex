import Head from "next/head";
import { useAtom } from "jotai";

import NavbarComponent from "../../components/Navbar";
import QueryDescriptor from "../../components/QueryDescriptor";
import CollectedPokemonList from "../../components/CollectedPokemonList";
import collectedPokemonAtom from "../../stores/collectedPokemon";

export default function CollectionPage(): JSX.Element {
  const [collection, setCollection] = useAtom(collectedPokemonAtom);

  return (
    <div>
      <Head>
        <title>My Collection | Armaan&apos;s Pokedex</title>
        <meta name="description" content="A rip-off pokedex for fun." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="sticky top-0 bg-white bg-opacity-80 backdrop-blur-md z-10">
          <NavbarComponent />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-12">
          {collection && (
            <div>
              <div className="flex align-text-bottom justify-between py-6">
                <h1 className="text-4xl font-bold text-gray-900">My Pokemon</h1>
                <QueryDescriptor
                  message={`Showing ${collection.length} Collected Pokemon`}
                />
              </div>
              <CollectedPokemonList pokemons={collection} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
