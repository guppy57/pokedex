import { useState } from "react";

export default function Splash(): JSX.Element {

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
        </div>
      </div>
    </div>
  );
}
