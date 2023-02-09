import type { NextApiRequest, NextApiResponse } from "next";
import { Pokemon, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Data = {
  statusCode: number;
  message: string;
  data: Pokemon[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // get all pokemon, should have pagination
  if (req.method === "GET") {
    // set pagination vairables
    const limit = req.query.limit ? parseInt(req.query.limit as string) : 20;
    const offset = req.query.offset ? parseInt(req.query.offset as string) : 0;

    // empty pokemon array
    let pokemon: Pokemon[] = [];

    try {
      // get all pokemon based on pagination
      pokemon = await prisma.pokemon.findMany({
        skip: offset,
        take: limit,
      });
    } catch (error) {
      // return error if there is one
      console.log(error);
      res
        .status(500)
        .json({ statusCode: 500, message: "Internal Server Error", data: [] });
    }

    // return pokemon
    res
      .status(200)
      .json({ statusCode: 200, message: "Success", data: pokemon });
  }
}
