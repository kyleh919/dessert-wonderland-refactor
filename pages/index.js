import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

import styles from '../styles/Home.module.css'

const Header = styled.h1`
  color: blue;
  font-family: Nunito;
`

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <Header>Welcome to Dessert Wonderland</Header>

        <Link href="/example/next-example">To Next example page</Link>
      </main>
    </div>
  )
}
