import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Hero from '../Components/Hero'
import Cooks from '../Components/Cooks'
import Footer from '../Components/Footer'
import { Helmet } from 'react-helmet'


const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - awsome website</title>
        <meta name="description" content="Welcome to our amazing website." />
        <meta name="keywords" content="home, awesome site, react" />
        <meta name="author" content="Pratham Vaja" />
      </Helmet>
      <Header />
      <Banner />
      <Hero />
      <Cooks/>  
      <Footer />
     
    </>
  )
}

export default Home