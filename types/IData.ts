import { Pokemon } from "@prisma/client";

type IData = {
  pokemon: Pokemon[];
  totalCount: number;
};

export default IData;