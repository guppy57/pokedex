import Image from "next/image";
import React from "react";
import SearchBar from "./SearchBar";

const SearchSplash: React.FC<{ query: string }> = ({ query }): JSX.Element => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
      <div id="splash-section" className="sm:pt-12 sm:pb-12 pt-6 pb-6">
        <div className="">
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
            Results for &apos;{query}&apos;
          </h1>
					<div className="flex items-center justify-center">
						<p className="my-10 text-lg leading-8 text-gray-600 text-center lg:px-18 sm:px-0 lg:w-8/12 w-full">
							Have another pokemon you want to find? Search any pokemon from any game ever, right below!
						</p>
					</div>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default SearchSplash;
