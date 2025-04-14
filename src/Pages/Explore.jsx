import React from 'react'
import Header from '../Components/Header'
import HeroSlider from '../Components/ExploreComponents/HeroSlider'
import ExpHero from '../Components/ExploreComponents/ExpHero'
import Footer from '../Components/Footer'
import { Helmet } from 'react-helmet'

const Explore = () => {
  return (
    <>
      <Helmet>
        <title>Explore Page</title>
        <meta name='description' content='Explore Page' />
        <meta name='keyword' content='Explore Page, react , awsome website' />
        <meta name='author' content='Pratham Vaja' />
      </Helmet>
      <Header />

      <HeroSlider />

      <ExpHero />

      <Footer />

    </>
  )
}

export default Explore