import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import NavbarComponent from '../../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Armaan's Pokedex</title>
        <meta name="description" content="URL shortening service by Kreative" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavbarComponent />
      </main>
    </div>
  )
}
