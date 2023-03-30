import type { NextApiRequest, NextApiResponse } from "next";
import { Pokemon, PrismaClient } from "@prisma/client";
import IData from "../../../../types/IData";
import IResponse from "../../../../types/IResponse";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) {
  // get all pokemon, should have pagination
  if (req.method === "GET") {
    // set pagination vairables
    const limit = req.query.limit ? parseInt(req.query.limit as string) : 20;
    const page = req.query.page ? parseInt(req.query.page as string) : 1;

    try {
      // get all pokemon based on pagination
      const pokemon: Pokemon[] = await prisma.pokemon.findMany({
        take: limit,
        skip: page * limit - limit,
      });

      const pokemonCount = await prisma.pokemon.count();

      const response: IData = {
        pokemon: pokemon,
        totalCount: pokemonCount,
      };

      // return pokemon
      // TODO response needs to be moved out of the try block, however we are getting assignment errors
      res
        .status(200)
        .json({ statusCode: 200, message: "Success", data: response });
    } catch (error) {
      // return error if there is one
      console.log(error);
      res
        .status(500)
        .json({ statusCode: 500, message: "Internal Server Error" });
    }
  }
}
