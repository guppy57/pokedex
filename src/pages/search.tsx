import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from "../../components/Navbar";
import SearchSplash from "../../components/SearchSplash";
import CollectedPokemonList from "../../components/CollectedPokemonList";
import PokemonCard from "../../components/PokemonCard";
import {Pokemon} from "@prisma/client";

export default function SearchResults(props: any) {
	const router = useRouter();
	const { q } = router.query;
	const query = q ? q as string : "";
	const decodedQuery = decodeURIComponent(query);

	return (
		<div>
			<Head>
				<title>{`Search Results | Armaan's Pokedex`}</title>
				<meta name="description" content={`Search Results | Armaan's Pokedex`} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<div className="sticky top-0 bg-white bg-opacity-80 backdrop-blur-md z-10">
					<Navbar />
				</div>
				<SearchSplash query={decodedQuery || ""} />
				<div className="mx-auto max-w-7xl px-6 lg:px-8 pb-12">
					<ul
						role="list"
						className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
					>
						{props.pokemon.map((aPokemon: Pokemon) => (
							<PokemonCard key={aPokemon.id} pokemon={aPokemon}	/>
						))}
					</ul>
				</div>
			</main>
		</div>
	)
}

export async function getServerSideProps(context: any) {
	const { q } = context.query;
	const response = await fetch(
			process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
					? `http://localhost:3000/api/pokemon/search?q=${q}`
					: "https://pokedex.kreativeusa.com/api/pokemon/search?q=${q}"
	);

	const payload = await response.json();

	return {
		props: {
			pokemon: payload.data.pokemon,
		}
	}
}