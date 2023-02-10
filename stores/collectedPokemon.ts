import { atom } from "jotai";
import { Pokemon } from "@prisma/client";

const collectedPokemonAtom = atom([] as Pokemon[]);

export default collectedPokemonAtom;