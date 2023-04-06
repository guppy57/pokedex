import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { useAtom } from "jotai";
import { Popover, Transition } from "@headlessui/react";
import { ArrowRightIcon, XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

import collectedPokemonAtom from "../stores/collectedPokemon";

export default function Navbar(): JSX.Element {
  const [collection] = useAtom(collectedPokemonAtom);

  return (
    <header>
      <nav
        className="mx-auto max-w-7xl px-6 lg:px-8 sm:block hidden"
        aria-label="Top"
      >
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
              href={"mailto:armaan@kreativeusa.com"}
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
              <span className="bg-red-600 text-white py-1.5 px-2.5 rounded-full">
                {collection.length}
              </span>
            </Link>
          </div>
        </div>
      </nav>
      <div className="sm:hidden block">
        <Popover>
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
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-hyper-blue-primary">
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden space-x-10 tablet:flex">
          <Link
            href={"mailto:armaan@kreativeusa.com"}
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Contact Armaan
          </Link>
          <a
            href="https://support.kreativeusa.com/submit-issue"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
            target={"_blank"}
            rel={"noreferrer"}
          >
            Get Support
          </a>
        </Popover.Group>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition tablet:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/">
                    <span className="sr-only">Pokdex</span>
                    <Image
                      className="h-8 w-auto"
                      width={200}
                      height={100}
                      src="/Pokedex.png"
                      alt="Kreative Hyperlink"
                    />
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-hyper-blue-primary">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-3 px-5">
              <div className="grid grid-cols-1 gap-4">
                <Link
                  href="/"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Home
                </Link>
                <Link
                  href={"mailto:armaan@kreativeusa.com"}
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Contact Armaan
                </Link>
                <a
                  href="https://support.kreativeusa.com/hyperlink"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  Get support
                </a>
              </div>
              <div className="mt-6 border-t border-t-gray-200 text-center">
								<Link
										href="/collection"
										className="inline-block py-2 text-base font-regular text-gray-900 mt-3"
								>
									My Collection{" "}
									<span className="bg-red-600 text-white py-1.5 px-2.5 rounded-full">
										{collection.length}
									</span>
								</Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
      </nav>
        </Popover>
      </div>
    </header>
  );
}
