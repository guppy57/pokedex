import { PrismaClient } from "@prisma/client";
import { Pokemon } from "@prisma/client";

// prisma client
const prisma = new PrismaClient();

// pagination vairables
const limit = 100;
let offset = 0;

// count of total pokemon that can be queried
// this is from the 'count' property of the API response
// we will update this each call to make sure we get all the pokemon
let count = 1279;

const insertPokemonIntoDatabase = async () => {
  while (offset < count) {
    // gets a paginated list of pokemon from the API
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    // checks to see if the fetch request passed
    if (!response.ok) {
      throw Error("Network response was not ok for getAll call");
    }

    const data = await response.json();
    const pokemonList = data.results;

    // update the count
    count = data.count;

    // update the offset
    offset += limit;

    // loop through the response and get specific data for each pokemon
    for (const pokemon of pokemonList) {
      // gets the specific pokemon data from the API
      const response = await fetch(pokemon.url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      // checks to see if the fetch request passed
      if (!response.ok) {
        throw Error("Network response was not ok for getOne call");
      }

      const data = await response.json();
      let createdPokemon: Pokemon = {} as Pokemon;

      // create a pokemon object using primsa
      // this is the same as the Pokemon model in prisma
      try {
        createdPokemon = await prisma.pokemon.create({
          data: {
            name: data.name,
            speciesName: data.species.name,
            artwork: data.sprites.other["official-artwork"].front_default,
            type: data.types[0].type.name,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            speed: data.stats[5].base_stat,
            weight: data.weight,
            height: data.height,
            url: pokemon.url,
          },
        });
      } catch (error) {
        console.log(error);
      }

      console.log(`Created pokemon with id: ${createdPokemon.id}`);
    }
  }
};

insertPokemonIntoDatabase();