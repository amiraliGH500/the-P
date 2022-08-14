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
        <title>
          my page
        </title>
      </Head>  
      <Header/>
      <Nav/>
      <Section/>
    </div>
  )
}

export default Index
