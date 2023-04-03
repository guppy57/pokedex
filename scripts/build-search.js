/**
 * before running this script,
 * you will need to turn off the Cloudflare DNS for 'pokedex.kreativeusa.com'
 */

// import all required packages
const algoliasearch = require("algoliasearch");

// load all enviroment variables (from docker)
const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY;
const ALGOLIA_ADMIN_KEY = process.env.ALGOLIA_ADMIN_KEY;
const ALGOLIA_INDEX_NAME = "pokemon_list";

// functions that gets all pokemon as a list, but only the name and id
const getAllPokemon = async () => {
  const response = await fetch("https://pokedex.kreativeusa.com/api/pokemon.json");
  const payload = await response.json();
  console.log(payload);
  return payload;
};

// transform the data to fit algolia's requirements and to make it searchable
const transformPokemon = (pokemon) => {
  return pokemon.map((p) => {
    const name = p.name.replace("-", " ");
    const transformedName = name.charAt(0).toUpperCase() + name.slice(1);

    return {
      objectID: p.id,
      name: transformedName,
      id: p.id,
    };
  });
};

// send the data to algolia
const sendPokemonToAlgolia = async () => {
  try {
    const pokemon = await getAllPokemon();
    const pokemonTransformed = transformPokemon(pokemon);
    const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
    const index = client.initIndex(ALGOLIA_INDEX_NAME);
    const algoliaResponse = await index.saveObjects(pokemonTransformed);

    console.log(
      `Succesfully sent ${
        pokemonTransformed.length
      } pokemon to Algolia. Object IDs: \n${algoliaResponse.objectIDs.join("\n")}`
    );
  } catch (error) {
    console.error(error);
  }
};

// run the script
sendPokemonToAlgolia();