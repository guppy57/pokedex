import Image from "next/image";
import SearchBar from "./SearchBar";

export default function Splash(): JSX.Element {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
      <div id="splash-section" className="sm:pt-12 sm:pb-12 pt-6 pb-6">
        <div className="flex items-center justify-center">
          <Image
            src="/pokeball.png"
            alt="pokeball"
            className="w-auto pb-6 md:h-24 h-20"
            width={100}
            height={100}
          />
          </div>
        <h1 className="text-black text-center font-bold lg:text-7xl md:text-7xl text-4xl w-full">
          Find every Pok&eacute;mon, ever.
        </h1>
        <div className="flex items-center justify-center">
          <p className="my-10 text-lg leading-8 text-gray-600 text-center lg:px-18 sm:px-0 lg:w-8/12 w-full">
            Search the (rip-off) pokedex for any Pok&eacute;mon from any game. Then,
            view stats like height, weight, type, and more! Why did I make
            this? Just for fun to be honest.
          </p>
        </div>
        <SearchBar />
      </div>
    </div>
  );
}
