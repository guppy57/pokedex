import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { useAtom } from "jotai";
import { Popover, Transition } from "@headlessui/react";
import { ArrowRightIcon, XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

import collectedPokemonAtom from "../stores/collectedPokemon";

export default function NavbarComponent(): JSX.Element {
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
            href="/contact-us"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Contact us
          </Link>
          <a
            href="https://support.kreativeusa.com/hyperlink"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
            target={"_blank"}
            rel={"noreferrer"}
          >
            Get Support
          </a>
        </Popover.Group>
        <div className="hidden items-center justify-end tablet:flex tablet:flex-1 lg:w-0">
          <Link
            href="#"
            className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Sign up
          </Link>
          <Link
            href="/dashboard"
            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-hyper-blue-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-hyper-blue-secondary"
          >
            Dashboard
            <ArrowRightIcon
              className="ml-2 -mr-0.5 h-6 w-6"
              aria-hidden="true"
            />
          </Link>
        </div>
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
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Home
                </Link>
                <Link
                  href="/#features"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Features
                </Link>
                <Link
                  href="/#faqs"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  FAQs
                </Link>
                <Link
                  href="/contact-us"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Contact us
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
              <div className="mt-6">
                <Link
                  href="/dashboard"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-hyper-blue-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-hyper-blue-secondary"
                >
                  Dashboard
                  <ArrowRightIcon
                    className="ml-2 -mr-0.5 h-6 w-6"
                    aria-hidden="true"
                  />
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  New to Hyperlink?{" "}
                  <Link
                    href="#"
                    className="text-hyper-blue-secondary hover:text-hyper-blue-primary"
                  >
                    Sign up
                  </Link>
                </p>
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
