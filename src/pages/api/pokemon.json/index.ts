import type { NextApiRequest, NextApiResponse } from "next";
import { Pokemon, PrismaClient } from "@prisma/client";
import IJSONData from "../../../../types/IJSONData";
import IResponse from "types/IResponse";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IJSONData | IResponse>
) {
  let pokemon: IJSONData = [];

  if (req.method !== "GET") {
    res.status(404).json({ statusCode: 404, message: "Not Found" });
  }

  try {
    pokemon = await prisma.pokemon.findMany({
      select: {
        id: true,
        name: true,
      }
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ statusCode: 500, message: "Internal Server Error" });
  }

  res.status(200).json(pokemon);
}