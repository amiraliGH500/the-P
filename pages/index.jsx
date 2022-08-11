import React from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import Nav from '../components/Nav'
import Section from '../components/Section'
import Footer from '../components/Footer'

function Index() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <title>amirali's home page</title>
      </Head>
      <Header/>
      <Nav/>
      <Section/>
      <Footer/>
    </div>
  )
}

export default Index