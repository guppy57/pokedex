import Link from "next/link";
import Image from "next/image";
import { useAtom } from "jotai";

import collectedPokemonAtom from "../stores/collectedPokemon";

export default function NavbarComponent(): JSX.Element {
  const [collection] = useAtom(collectedPokemonAtom);

  return (
    <header>
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-6">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">Armaan&apos;s Pokedex</span>
              <Image
                className="sm:h-10 w-auto h-8"
                width={300}
                height={300}
                src="/Pokedex.png"
                alt=""
              />
            </Link>
          </div>
          <div className="ml-10 space-x-8">
            <Link
              href={"mailto:armaan@guppy.im"}
              className="inline-block py-2 text-base font-regular text-gray-900"
            >
              Contact Armaan
            </Link>
            <Link
              href={"https://support.kreativeusa.com/submit-issue"}
              className="inline-block py-2 text-base font-regular text-gray-900"
              target={"_blank"}
            >
              Get support
            </Link>
            <Link
              href="/collection"
              className="inline-block py-2 text-base font-regular text-gray-900"
            >
              My Collection{" "}
              <span className="bg-red-600 text-white py-1 px-2 rounded-xl">
                {collection.length}
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}