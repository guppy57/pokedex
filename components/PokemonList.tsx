import { Pokemon } from "@prisma/client";
import PokemonCard from "./PokemonCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function PokemonList(): JSX.Element {
  const limit: number = 15;

  const fetchPokemon = async (page: number) => {
    const res = await fetch(`/api/pokemon?limit=${limit}&page=${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const data = await res.json();
    return data.data;
  };

  const {
    data,
    isSuccess,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["pokemon"],
    queryFn: ({ pageParam = 1 }) => fetchPokemon(pageParam),
    getNextPageParam: (lastPage, pages) => {
      const maxPages: number = Math.ceil(lastPage.totalCount / limit);
      if (pages.length < maxPages) return pages.length + 1;
      else return undefined;
    },
  });

  useEffect(() => {
    let fetching = false;
    const onScroll = async (event: any) => {
      const { scrollHeight, scrollTop, clientHeight } = event.target.scrollingElement;

      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
        fetching = true;
        if (hasNextPage || true) await fetchNextPage();
        fetching = false;
      }
    };

    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [fetchNextPage, hasNextPage]);

  return (
    <div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {isSuccess && data?.pages.map((page: any) => (
          page.pokemon.map((pokemon: Pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        ))}
      </ul>
      <div>
          {isFetchingNextPage && <p className="text-center py-4">Fetching more pokemon...</p>}
        </div>
        <div>
          {isLoading && <p className="text-center py-4">Loading pokemon...</p>}
        </div>
    </div>
  );
}
