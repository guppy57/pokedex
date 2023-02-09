import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import NavbarComponent from '../../components/Navbar';
import Splash from '../../components/Splash';
import PokemonList from '../../components/PokemonList';
import QueryDescriptor from '../../components/QueryDescriptor';

const inter = Inter({ subsets: ['latin'] });

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Armaan's Pokedex</title>
        <meta name="description" content="A rip-off pokedex for fun." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavbarComponent />
        <Splash />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-12">
          <QueryDescriptor />
          <PokemonList />
        </div>
      </main>
    </div>
  )
}
