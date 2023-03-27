import Head from 'next/head'
import { Inter } from '@next/font/google'

import NavbarComponent from '../../components/Navbar';
import Splash from '../../components/Splash';
import PokemonList from '../../components/PokemonList';
import QueryDescriptor from '../../components/QueryDescriptor';

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Armaan&apos;s Pok&eacute;dex</title>
        <meta name="description" content="A rip-off pok&eacute;dex for fun." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="sticky top-0 bg-white bg-opacity-80 backdrop-blur-md z-10">
          <NavbarComponent />
        </div>
        <Splash />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-12">
          <QueryDescriptor />
          <PokemonList />
        </div>
      </main>
    </div>
  )
}
