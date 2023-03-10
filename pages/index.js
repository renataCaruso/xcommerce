import Head from 'next/head'
import React from 'react'
import Nav from './components/Navbar/Navbar'
import AbaButton from './components/Navbar/LineButtons/AbaButton'
import MaisVendidos from './components/Abas/MaisVendidos'

function Home() {
  return (
    <>
      <Head>
        <title>Xcommerce</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <AbaButton />
      <MaisVendidos />
      
    </>
  )
}

export default Home;