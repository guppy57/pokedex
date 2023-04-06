import type { NextApiRequest, NextApiResponse } from "next";
import { Pokemon, PrismaClient } from "@prisma/client";
import IData from "../../../../types/IData";
import IResponse from "../../../../types/IResponse";

const prisma = new PrismaClient();

export default async function handler(
		req: NextApiRequest,
		res: NextApiResponse<IResponse>
) {
	if (req.method !== "GET") {
		res.status(404).json({ statusCode: 404, message: "Method not found" });
	}

	let pokemon: Pokemon[] = [];
	const encodedQuery = req.query.q as string;
	const query = decodeURIComponent(encodedQuery);

	try {
		pokemon = await prisma.pokemon.findMany({
			where: {
				OR: [
					{
						name: {
							contains: query,
							mode: "insensitive"
						},
						speciesName: {
							contains: query,
							mode: "insensitive"
						}
					}
				]
			}
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ statusCode: 500, message: "Internal Server Error" });
	}

	const response: IData = {
		totalCount: pokemon.length,
		pokemon,
	};

	res.status(200).json({ statusCode: 200, message: "Searched pokemon", data: response });
}