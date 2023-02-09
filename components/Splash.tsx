import { useState } from "react";

export default function Splash(): JSX.Element {
  const [query, setQuery] = useState<string>("");

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
      <div id="splash-section" className="sm:pt-24 sm:pb-24 pt-12 pb-12">
        <div className="">
          <h1 className="text-black text-center font-bold lg:text-7xl md:text-7xl text-4xl w-full">
            Find every Pokemon, ever.
          </h1>
          <div className="flex items-center justify-center">
            <p className="my-10 text-lg leading-8 text-gray-600 text-center lg:px-18 sm:px-0 w-8/12">
              Search the (rip-off) pokedex for any Pokemon from any game. Then,
              view stats like height, weight, type, and more! Why did I make
              this? Just for fun to be honest.
            </p>
          </div>
          <form className="mt-4 lg:max-w-screen-md md:max-w-screen-sm sm:mx-auto sm:flex max-w-screen-md">
            <div className="min-w-0 flex-1">
              <label htmlFor="url" className="sr-only">
                Search Query
              </label>
              <input
                id="url"
                type="text"
                value={query}
                name="query"
                required
                className="block w-full rounded-md border px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-hyper-blue-primary"
                placeholder="Search for a Pokemon..."
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-3">
              <button
                onClick={(e) => setQuery("")}
                className="block w-full rounded-md border border-transparent bg-red-600 px-5 py-3 text-base font-medium text-white hover:bg-red-400 sm:px-10"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
